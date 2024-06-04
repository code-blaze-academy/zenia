#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import speech_recognition as sr
# obtain audio from the microphone
r = sr.Recognizer()
with sr.Microphone() as source:
    print("Say something!")
    r.adjust_for_ambient_noise(source,duration=0.2)
    audio = r.listen(source)
    mytext=r.recognize_google(audio)
    
    

print(mytext)
  