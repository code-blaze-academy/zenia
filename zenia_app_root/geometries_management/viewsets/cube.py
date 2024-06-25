from rest_framework import viewsets
from zenia_app_root.geometries_management.serializers import cube
from rest_framework.response import Response
from rest_framework import status

class CubeViewset(viewsets.ModelViewSet):
    serializer_class=cube.CubeSerializer
    
    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            
            return Response({"status":True,"data":serializer.data})
        return Response({"status":True,"data":serializer.data})
        

    def get_queryset(self):
        return super().get_queryset()