import os
from gtts import gTTS
import wave

# Set the text to be converted to speech
text = "You have successfully tested Zenia"

# Convert the text to speech using gTTS
tts = gTTS(text=text, lang='en')

# Save the audio to a file
tts.save("output.wav")

# Open the wave file and get the audio data
with wave.open("output.wav", 'r') as wav:
    audio_frames = wav.readframes(wav.getnframes())

# Create a new wave file
with wave.open('output.wav', 'w') as wav_file:
    wav_file.setnchannels(1)  # Mono audio
    wav_file.setsampwidth(2)  # 16-bit audio
    wav_file.setframerate(16000)  # 16kHz sample rate
    wav_file.writeframes(audio_frames)

print("Sound wave file 'output.wav' created successfully!")