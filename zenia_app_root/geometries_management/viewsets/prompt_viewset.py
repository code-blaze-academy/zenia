from zenia_app_root.geometries_management.serializers.prompt_serializer import MessagePrompt
from rest_framework import viewsets
from rest_framework.response import Response 
from rest_framework import status 

class MessagePromptViewset(viewsets.ModelViewSet):
    def create(self,request):
        return Response({"status":True,"message":"Text Recieved Successfully ready for processing"},status=status.HTTP_200_OK)