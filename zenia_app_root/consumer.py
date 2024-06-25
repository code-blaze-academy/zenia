# from channels.generic.websocket import WebsocketConsumer
# import speech_recognition as sr
# import pyttsx3

# class SpeechRecognitionConsumer(WebsocketConsumer):
#     def connect(self):
#         self.accept()

#     def disconnect(self, close_code):
#         pass

#     def receive(self, text_data):
#         recognizer = sr.Recognizer()

#         try:
#             audio_data = recognizer.record(text_data)
#             text = recognizer.recognize_google(audio_data)
#             self.send(text)

#         except sr.UnknownValueError:
#             self.send("Google Speech Recognition could not understand audio")

#         except sr.RequestError as e:
#             self.send("Could not request results from Google Speech Recognition service")
