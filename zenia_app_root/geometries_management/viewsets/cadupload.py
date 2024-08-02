from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import cube
from rest_framework.response import Response
from rest_framework import status
import cadquery as cq
from cadquery import exporters,importers
from rest_framework.permissions import AllowAny
import os
import tempfile
from zenia_app_root.geometries_management.serializers.cadupload import NumberCadSerializer
class NumberCadViewset(viewsets.ModelViewSet):
    http_method_names = ['get']
    serializer_class=NumberCadSerializer
    permission_classes=[AllowAny]
    def get_queryset(self):
        return []

    def list(self, request):
        
        # Create a cone
        result = (
        cq.Workplane("XY")
        # create a triangular prism and tag it
        .polygon(3, 5)
        .extrude(4)
        .tag("prism")
        # create a sphere that obscures the prism
        .sphere(10)
        # create features based on the prism's faces
        .faces("<X", tag="prism")
        .workplane()
        .circle(1)
        .cutThruAll()
        .faces(">X", tag="prism")
        .faces(">Y")
        .workplane()
        .circle(1)
        .cutThruAll()
    )
        # Export the shape to a DXF file
        # dxf_file = 'path/to/output.dxf'
        dxf_path = os.path.join('threedmodels', "cone.dxf")
        
        exporters.export(result, dxf_path, exportType='DXF')
       
    


        return Response({'status': True,
                            'stl_url': request.build_absolute_uri(f'/threedmodels/cone.dxf')},
                        status=status.HTTP_201_CREATED)
        