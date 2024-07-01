from zenia_app_root.geometries_management.serializers.prompt_serializer import MessagePrompt
from rest_framework import viewsets
from rest_framework.response import Response 
from rest_framework import status 
from zenia_app_root.geometries_management.viewsets import base_url
import requests
from zenia_app_root.geometries_management.serializers.chair import ChairSerializer
class MessagePromptViewset(viewsets.ModelViewSet):
    serializer_class=MessagePrompt
    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            print(serializer.data)
            if 'chair' in str(serializer.validated_data['message_body']):
                response=requests.get(f"{base_url.url}chair/")
                
                response=response.json()
                
                return Response({"status":True,"message":"Text Recieved Successfully ready for processing",'data':response},status=status.HTTP_200_OK)
            
            if 'gear' in str(serializer.validated_data['message_body']):
                response=requests.get(f"{base_url.url}gear/")
                
                response=response.json()
                
                return Response({"status":True,"message":"Text Recieved Successfully ready for processing",'data':response},status=status.HTTP_200_OK)
                
        return Response({"status":True,"message":"Text Recieved Successfully ready for processing"},status=status.HTTP_200_OK)