from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import cube
from rest_framework.response import Response
from rest_framework import status
import cadquery as cq
from cadquery import exporters,importers
from rest_framework.permissions import AllowAny
import os
class CubeViewset(viewsets.ModelViewSet):
    http_method_names = ['get','post']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        
        # Create a box
        result = cq.Workplane("front").box(2.0, 2.0, 2.0)

        stl_path = os.path.join('threedmodels', "cube.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/cube.stl'),
        },status=status.HTTP_200_OK)
        
    
    