



import math

from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
import cadquery as cq

class BottleViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        (L, w, t) = (20.0, 6.0, 10.0)
        s = cq.Workplane("XY")

        # Draw half the profile of the bottle and extrude it
        p = (
            s.center(-L / 2.0, 0)
            .vLine(w / 2.0)
            .threePointArc((L / 2.0, w / 2.0 + t), (L, w / 2.0))
            .vLine(-w / 2.0)
            .mirrorX()
            .extrude(30.0, True)
        )

        # Make the neck
        p = p.faces(">Z").workplane(centerOption="CenterOfMass").circle(3.0).extrude(2.0, True)

        # Make a shell
        result = p.faces(">Z").shell(0.3)
        stl_path = os.path.join('threedmodels', "bottle.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/bottle.stl'),
        },status=status.HTTP_200_OK)
        
        
class CreateHollowBottleViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        import os

        (L, w, t) = (20.0, 6.0, 3.0)
        s = cq.Workplane("XY")

        # Draw half the profile of the bottle and extrude it
        p = (
            s.center(-L / 2.0, 0)
            .vLine(w / 2.0)
            .threePointArc((L / 2.0, w / 2.0 + t), (L, w / 2.0))
            .vLine(-w / 2.0)
            .mirrorX()
            .extrude(30.0, True)
        )

        # Make the neck
        p = p.faces(">Z").workplane(centerOption="CenterOfMass").circle(3.0).extrude(2.0, True)

        # Create a horizontal hole in the center of the bottle
        p = p.faces(">Z").workplane(centerOption="CenterOfMass").hole(4.0, 20.0)

        # Make a shell
        result = p.faces(">Z").shell(0.3)
        stl_path = os.path.join('threedmodels', "bottle.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f''),
        },status=status.HTTP_200_OK)
        
        