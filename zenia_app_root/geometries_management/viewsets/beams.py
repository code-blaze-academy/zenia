

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

class BeamsViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        (L, H, W, t) = (100.0, 20.0, 20.0, 1.0)
        pts = [
            (0, H / 2.0),
            (W / 2.0, H / 2.0),
            (W / 2.0, (H / 2.0 - t)),
            (t / 2.0, (H / 2.0 - t)),
            (t / 2.0, (t - H / 2.0)),
            (W / 2.0, (t - H / 2.0)),
            (W / 2.0, H / -2.0),
            (0, H / -2.0),
        ]
        result = cq.Workplane("front").polyline(pts).mirrorY().extrude(L)
        stl_path = os.path.join('threedmodels', "beams.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/beams.stl'),
        },status=status.HTTP_200_OK)
        
  