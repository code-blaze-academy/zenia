#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class

import speech_recognition as sr
# obtain audio from the microphone
r = sr.Recognizer()
with sr.Microphone() as source:
    print("which drawing do you want to create!")
    r.adjust_for_ambient_noise(source,duration=0.2)
    audio = r.listen(source)
    mytext=r.recognize_google(audio)
    
    

import pyttsx4

# Initialize the engine
engine = pyttsx4.init()

# Define the text to be spoken
text = mytext
print(text)
rate = engine.getProperty('rate')   # Get the current rate
engine.setProperty('rate', rate - 50)  # Decrease the rate by 50 words per minute
engine.say("you said"+text+" your drawing is available as a 3d file")
engine.runAndWait()