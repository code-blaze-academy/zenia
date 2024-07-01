from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
class ChairViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def create_chair(self):
        # Dimensions
        seat_width = 10.0
        seat_depth = 10.0
        seat_height = 1.0
        backrest_height = 10.0
        leg_height = 10.0
        leg_width = 1.0

        # Create the seat
        seat = cq.Workplane("XY").box(seat_width, seat_depth, seat_height)

        # Create the backrest
        backrest = (
            cq.Workplane("XY", origin=(0, -seat_depth / 2, seat_height / 2))
            .workplane(offset=seat_height / 2)
            .rect(seat_width, backrest_height)
            .extrude(seat_height)
            .translate((0, 0, backrest_height / 2))
        )

        # Create one leg
        leg = cq.Workplane("XY").box(leg_width, leg_width, leg_height)

        # Position the legs
        leg_positions = [
            (seat_width / 2 - leg_width / 2, seat_depth / 2 - leg_width / 2, -leg_height / 2),
            (-seat_width / 2 + leg_width / 2, seat_depth / 2 - leg_width / 2, -leg_height / 2),
            (seat_width / 2 - leg_width / 2, -seat_depth / 2 + leg_width / 2, -leg_height / 2),
            (-seat_width / 2 + leg_width / 2, -seat_depth / 2 + leg_width / 2, -leg_height / 2)
        ]

        legs = [leg.translate(pos) for pos in leg_positions]

        # Combine all parts
        chair = seat.union(backrest)
        for leg in legs:
            chair = chair.union(leg)

        return chair
    
    def list(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Create the chair
        result = self.create_chair()

        # Export the chair to an STL file
        stl_path = os.path.join('threedmodels', "chair.stl")
        exporters.export(result, stl_path)

        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/chair.stl'),
        },status=status.HTTP_200_OK)

    