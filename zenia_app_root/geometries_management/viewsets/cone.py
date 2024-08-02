from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import cube
from rest_framework.response import Response
from rest_framework import status
import cadquery as cq
from cadquery import exporters
from rest_framework.permissions import AllowAny
import os
import cadquery as cq

class ConeViewset(viewsets.ModelViewSet):
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
         
       
        # Create a cone
        cone = cq.Solid.makeCone(0.8, 0, 4)

        # Create an assembly
        cone_assy = cq.Assembly()

        # Add the cone to the assembly
        cone_assy.add(cone, name="cone", color=cq.Color("blue"))

        # Show the assembly
        # show_object(assy)
        stl_path = os.path.join('threedmodels', "cone.stl")
        exporters.export(cone_assy.toCompound(),stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/cone.stl'),
        },status=status.HTTP_200_OK)
        
       