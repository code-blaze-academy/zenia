from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import sphere
from rest_framework.response import Response
from rest_framework import status
import cadquery as cq
from cadquery import exporters
import os
from rest_framework.permissions import AllowAny
class SphereViewset(viewsets.ModelViewSet):
    serializer_class=sphere.SphereSerializer
    http_method_names=['get']
    permission_classes=[AllowAny]
    
    def list(self,request):
            # Create a sphere
        result = cq.Workplane("front").sphere(1.0)  # Example: radius 1.0

        # Export the shape to an STL file
        stl_path = os.path.join('threedmodels', "sphere.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/sphere.stl'),
    },status=status.HTTP_200_OK)
      
        

    def get_queryset(self):
        return super().get_queryset()