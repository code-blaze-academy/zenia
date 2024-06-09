from zenia_app_root.voice_recognition.serializers.voice_recognition import VoiceRecognitionSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
import speech_recognition as sr
from rest_framework.response import Response
from rest_framework import status
# obtain audio from the microphone
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
import speech_recognition as sr
from io import BytesIO

# obtain audio from the microphone
r = sr.Recognizer()

class VoiceRecognitionViewset(viewsets.ViewSet):
    serializer_class = VoiceRecognitionSerializer
    http_method_names = ["get", "post"]
    permission_classes = [AllowAny]
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            audio_file = serializer.validated_data['audio_file']
            
            # Convert the uploaded audio file to audio data
            audio_data = sr.AudioFile(BytesIO(audio_file.read()))
            with audio_data as source:
                r.adjust_for_ambient_noise(source)
                audio = r.record(source)
            
            try:
                # Recognize speech using Google Web Speech API
                voice_text = r.recognize_google(audio)
                return Response({"voice_text": voice_text, "status": True, "message": "Voice translated successfully"}, status=status.HTTP_200_OK)
            except sr.UnknownValueError:
                return Response({"error": "Could not understand the audio", "status": False}, status=status.HTTP_400_BAD_REQUEST)
            except sr.RequestError as e:
                return Response({"error": f"Speech recognition service error: {e}", "status": False}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get_queryset(self):
        return super().get_queryset()

    