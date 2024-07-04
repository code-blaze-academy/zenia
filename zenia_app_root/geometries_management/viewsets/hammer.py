

import math

from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
class HammerViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        result = (
        cq.Workplane("front")
        .circle(1)
        .extrude(10) 
     
        .copyWorkplane(
       
            cq.Workplane("right", origin=(-5, 0, 0))
        )
        .circle(1)
        .extrude(10)
            )
        
        stl_path = os.path.join('threedmodels', "hammer.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/hammer.stl'),
        },status=status.HTTP_200_OK)
        
        