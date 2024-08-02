from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from rest_framework.permissions import AllowAny

class DoorViewset(viewsets.ViewSet):
    
    http_method_names = ['get']
    permission_classes = [AllowAny]

    def get_queryset(self):
        return []

    def list(self, request):
        import cadquery as cq

# Parameters
        H = 400
        W = 200
        D = 350

        PROFILE = cq.Workplane("XY").rect(20, 20).wires()

        SLOT_D = 6
        PANEL_T = 3

        HANDLE_D = 20
        HANDLE_L = 50
        HANDLE_W = 4


        def make_vslot(l):
            return PROFILE.toPending().extrude(l)


        def make_connector():
            rv = (
                cq.Workplane()
                .box(20, 20, 20)
                .faces("<X")
                .workplane()
                .cboreHole(6, 15, 18)
                .faces("<Z")
                .workplane(centerOption="CenterOfMass")
                .cboreHole(6, 15, 18)
            )

            # tag mating faces
            rv.faces(">X").tag("X").end()
            rv.faces(">Z").tag("Z").end()

            return rv


        def make_panel(w, h, t, cutout):
            rv = (
                cq.Workplane("XZ")
                .rect(w, h)
                .extrude(t)
                .faces(">Y")
                .vertices()
                .rect(2 * cutout, 2 * cutout)
                .cutThruAll()
                .faces("<Y")
                .workplane()
            )

            # Add handle holes
            handle_hole_locations = [(-w / 3, HANDLE_L / 2), (-w / 3, -HANDLE_L / 2)]
            for x, y in handle_hole_locations:
                rv = rv.pushPoints([(x, y)]).hole(3)

            # Tag mating edges
            rv.faces(">Y").edges("%CIRCLE").tag("edge_top")
            rv.faces("<Y").edges("%CIRCLE").tag("edge_bottom")

            return rv

        def make_handle(w, h, r):
            pts = ((0, 0), (w, 0), (w, h), (0, h))

            path = cq.Workplane().polyline(pts)

            rv = (
                cq.Workplane("YZ")
                .rect(r, r)
                .sweep(path, transition="round")
                .tag("solid")
                .faces("<X")
                .workplane()
                .faces("<X", tag="solid")
                .hole(r / 1.5)
            )

            # tag mating faces
            rv.faces("<X").faces(">Y").tag("mate1")
            rv.faces("<X").faces("<Y").tag("mate2")

            return rv


        # define the elements

        door = (
            cq.Assembly()
            .add(make_vslot(H), name="left")
            .add(make_vslot(H), name="right")
            .add(make_vslot(W), name="top")
            .add(make_vslot(W), name="bottom")
            .add(make_connector(), name="con_tl", color=cq.Color(0, 0, 0))
            .add(make_connector(), name="con_tr", color=cq.Color(0, 0, 0))
            .add(make_connector(), name="con_bl", color=cq.Color(0, 0, 0))
            .add(make_connector(), name="con_br", color=cq.Color(0, 0, 0))
            .add(
                make_panel(W + 2 * SLOT_D, H + 2 * SLOT_D, PANEL_T, SLOT_D),
                name="panel",
                color=cq.Color(0, 0, 1, 0.2),
            )
            .add(
                make_handle(HANDLE_D, HANDLE_L, HANDLE_W),
                name="handle",
                color=cq.Color(1, 1, 0),
            )
        )
                    # define the constraints
    
        # define the constraints
        # define the constraints
        (
            door
            # left profile
            .constrain("left", "con_bl", "Plane", "Z")
            .constrain("left", "con_bl", "Axis", "X")
            .constrain("left", "con_tl", "Plane", "Z")
            .constrain("left", "con_tl", "Axis", "X")
            # top
            .constrain("top", "con_tl", "Plane", "Z")
            .constrain("top", "con_tl", "Axis", "Y")
            # bottom
            .constrain("bottom", "con_bl", "Axis", "Y")
            .constrain("bottom", "con_bl", "Plane", "Z")
            # right connectors
            .constrain("top", "con_tr", "Plane", "Z")
            .constrain("bottom", "con_br", "Plane", "Z")
            .constrain("left", "con_tr", "Axis", "Z")
            .constrain("left", "con_br", "Axis", "Z")
            # right profile
            .constrain("right", "con_tr", "Plane", "Z")
            .constrain("right", "left", "Axis", "X")
            # panel
            .constrain("left", "panel", "Plane", "X")
            .constrain("left", "panel", "Axis", "Z")
            # handle
            .constrain("panel", "handle", "Plane", "Z")
            .constrain("panel", "handle", "Point", "Z")
        )
        # solve
        door.solve()
        stl_path = os.path.join('threedmodels', "door.stl")
        exporters.export(door,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/door.stl'),
        },status=status.HTTP_200_OK)
        