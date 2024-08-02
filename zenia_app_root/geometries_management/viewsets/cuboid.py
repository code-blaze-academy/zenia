from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import cube
from rest_framework.response import Response
from rest_framework import status
import cadquery as cq
from cadquery import exporters
from rest_framework.permissions import AllowAny
import os
class CuboidViewset(viewsets.ModelViewSet):
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        
        # Create a box
        length = 80.0
        height = 60.0
        thickness = 10.0
        # center_hole_dia = 22.0

        # Create a box based on the dimensions above and add a 22mm center hole
        result = (
            cq.Workplane("XY")
            .box(length, height, thickness)
            .faces(">Z")
            .workplane()
            # .hole(center_hole_dia)
        )
        stl_path = os.path.join('threedmodels', "cuboid.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/cuboid.stl'),
        },status=status.HTTP_200_OK)
    
    
class CreateHoleCuboidViewset(viewsets.ModelViewSet):
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        
        # Create a box
        length = 80.0
        height = 60.0
        thickness = 10.0
        center_hole_dia = 22.0

        # Create a box based on the dimensions above and add a 22mm center hole
        result = (
            cq.Workplane("XY")
            .box(length, height, thickness)
            .faces(">Z")
            .workplane()
            .hole(center_hole_dia)
        )

        stl_path = os.path.join('threedmodels', "cuboid.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/cuboid.stl'),
        },status=status.HTTP_200_OK)
    
    
        