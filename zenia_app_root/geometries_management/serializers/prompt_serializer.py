from rest_framework import serializers
from zenia_app_root.geometries_management.models import MessagePromptModel
class MessagePrompt(serializers.ModelSerializer):
    class Meta:
        model=MessagePromptModel
        fields=["message_body"]