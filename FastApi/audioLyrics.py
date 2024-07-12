import torch
import whisperx
import gc
from whisperx.diarize import DiarizationPipeline
from whisperx import load_align_model, align
from whisperx.diarize import assign_word_speakers

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")
DEVICE

HF_TOKEN = "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"
diarization_pipeline = DiarizationPipeline(use_auth_token=HF_TOKEN,device=DEVICE)

compute_type = "float16"
model = whisperx.load_model("large-v2",'cuda',language='en',compute_type=compute_type,)
model_a, metadata = whisperx.load_align_model(language_code='en', device=DEVICE)

def diarizeAudio(audio_path):
    audio = whisperx.load_audio(audio_path)
    result = model.transcribe(audio)
    result = whisperx.align(result["segments"], model_a, metadata, audio,DEVICE, return_char_alignments=False)
    script_aligned = result["segments"]
    return script_aligned

