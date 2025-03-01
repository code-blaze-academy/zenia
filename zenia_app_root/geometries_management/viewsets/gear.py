from rest_framework import viewsets
from rest_framework.response import Response
import cadquery as cq
from math import sin, cos, pi, floor

from cadquery import exporters
import os
from rest_framework import status
from zenia_app_root.geometries_management.serializers import chair
from rest_framework.permissions import AllowAny
class GearViewset(viewsets.ViewSet):
    
    http_method_names = ['get']
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self,request):
        # Dimensions
        

        # define the generating function
        def hypocycloid(t, r1, r2):
            return (
                (r1 - r2) * cos(t) + r2 * cos(r1 / r2 * t - t),
                (r1 - r2) * sin(t) + r2 * sin(-(r1 / r2 * t - t)),
            )


        def epicycloid(t, r1, r2):
            return (
                (r1 + r2) * cos(t) - r2 * cos(r1 / r2 * t + t),
                (r1 + r2) * sin(t) - r2 * sin(r1 / r2 * t + t),
            )


        def gear(t, r1=4, r2=1):
            if (-1) ** (1 + floor(t / 2 / pi * (r1 / r2))) < 0:
                return epicycloid(t, r1, r2)
            else:
                return hypocycloid(t, r1, r2)


        # create the gear profile and extrude it
        result = (
            cq.Workplane("XY")
            .parametricCurve(lambda t: gear(t * 2 * pi, 6, 1))
            .twistExtrude(15, 90)
            .faces(">Z")
            .workplane()
            .circle(2)
            .cutThruAll()
        )
        stl_path = os.path.join('threedmodels', "gear.stl")
        exporters.export(result,stl_path)
        return Response({'status':True,
            'stl_url': request.build_absolute_uri(f'/threedmodels/gear.stl'),
        },status=status.HTTP_200_OK)
        
        