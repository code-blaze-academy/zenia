from rest_framework import serializers

class MessagePrompt(serializers.Serializer):
    message_body=serializers.CharField()
    
    class Meta:
        fields=["message_body"]