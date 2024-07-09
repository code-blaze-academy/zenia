import pyaudio
import wave
from gtts import gTTS

def text_to_wave(text, output_file):
    # Initialize PyAudio
    p = pyaudio.PyAudio()

    # Set the audio parameters
    chunk = 1024
    sample_format = pyaudio.paInt16
    channels = 1
    sample_rate = 16000

    # Open the audio stream
    stream = p.open(format=sample_format,
                    channels=channels,
                    rate=sample_rate,
                    frames_per_buffer=chunk,
                    output=True)

    # Convert the text to speech using gTTS
    tts = gTTS(text=text, lang='en')
    tts.save(output_file)

    # Open the audio file and play it
    wf = wave.open(output_file, 'rb')

    # Read and write the audio data to the stream
    data = wf.readframes(chunk)
    while data:
        stream.write(data)
        data = wf.readframes(chunk)

    # Stop and close the stream
    stream.stop_stream()
    stream.close()
    p.terminate()

    print(f"Audio wave file saved as: {output_file}")

# Example usage
text_to_wave("Hello, this is a test.", "output.wav")