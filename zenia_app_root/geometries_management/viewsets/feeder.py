

import math

from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
class FeederViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        result = (
        cq.Workplane("front")
        .box(4.0, 4.0, 0.25)
        .faces(">Z")
        .circle(1.5)
        .workplane(offset=3.0)
        .rect(0.75, 0.5)
        .loft(combine=True)
            )
        stl_path = os.path.join('threedmodels', "feeder.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/feeder.stl'),
        },status=status.HTTP_200_OK)
        

class CreateHollowFeederViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        result = (
        cq.Workplane("front")
        .box(4.0, 4.0, 0.25)
        .faces(">Z")
        .circle(1.5)
        .workplane(offset=3.0)
        .rect(0.75, 0.5)
        .loft(combine=True)
        .faces(">Z")
        .hole(1.0, depth=4.0)  # Create a hole with a diameter of 1.0 and a depth of 4.0
        )

        stl_path = os.path.join('threedmodels', "feeder.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/feeder.stl'),
        },status=status.HTTP_200_OK)
        
