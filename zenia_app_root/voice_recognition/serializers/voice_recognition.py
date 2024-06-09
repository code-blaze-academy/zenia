from rest_framework import serializers

class VoiceRecognitionSerializer(serializers.Serializer):
    audio_file=serializers.FileField()