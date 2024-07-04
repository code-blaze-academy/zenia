

import math

from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
class TotalListGeomeriesViewset(viewsets.ViewSet):
    serializer_class = chair.ChairSerializer
    http_method_names = ['get']
    permission_classes=[AllowAny]
    

    def list(self,request):
        
        return Response({'status':True,
            'creatable_objects': ['chair','feeder','gear','hammer','saving_box','beam','cone','cube','wastebin','bottle'],
        },status=status.HTTP_200_OK)
        
        