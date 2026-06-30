# -*- coding: utf-8 -*-
"""
==========================================================
 3W AI FP CENTER — 윤우리 성우 TTS 자동 생성 도구
 파일명: tts_yoonwoori.py
 사용법: python tts_yoonwoori.py "여기에 읽을 텍스트 입력"
 출력: 같은 폴더에 output_YYYYMMDD_HHMMSS.mp3 저장
==========================================================

【마누스 사용법】
1. 이 파일을 실행할 서버/환경에 복사
2. 환경변수 ELEVEN_API_KEY 를 설정하거나, 아래 API_KEY 값을 직접 입력
3. 명령어 실행:
   python tts_yoonwoori.py "안녕하세요, 3W AI FP CENTER입니다."

【API 정보】
- 서비스: ElevenLabs (https://elevenlabs.io)
- Voice ID: FCwkO6YAajaFLPJU3RXS  ← 윤우리 성우 고정값 (변경 금지)
- 모델: eleven_multilingual_v2
- API 키: 환경변수 ELEVEN_API_KEY 또는 아래 직접 입력

【주의사항】
- API 키는 센터장님 계정 것을 사용. 직접 발급 금지.
- Voice ID 변경 금지 (윤우리 성우 고정)
- 텍스트는 한국어로 입력할 것
"""

import os
import sys
import json
import urllib.request
import urllib.error
from datetime import datetime

# ============================================================
#  설정 (여기만 수정)
# ============================================================
API_KEY = os.environ.get("ELEVEN_API_KEY", "")  # 환경변수 우선
VOICE_ID = "FCwkO6YAajaFLPJU3RXS"               # 윤우리 성우 — 변경 금지
MODEL_ID = "eleven_multilingual_v2"
# ============================================================

def generate_tts(text: str, output_path: str = None) -> str:
    """
    텍스트 → 윤우리 성우 MP3 생성
    
    Args:
        text: 읽을 한국어 텍스트
        output_path: 저장 경로 (None이면 자동 생성)
    
    Returns:
        저장된 파일 경로
    """
    if not API_KEY:
        raise ValueError("[오류] ELEVEN_API_KEY 환경변수가 설정되지 않았습니다.")
    
    if not output_path:
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_path = f"output_{ts}.mp3"
    
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
        "accept": "audio/mpeg"
    }
    payload = {
        "text": text,
        "model_id": MODEL_ID,
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    
    print(f"[TTS] 생성 중... ({len(text)}자)")
    with urllib.request.urlopen(req) as response:
        audio_data = response.read()
    
    with open(output_path, "wb") as f:
        f.write(audio_data)
    
    size_kb = len(audio_data) / 1024
    print(f"[완료] {output_path} ({size_kb:.1f} KB)")
    return output_path


def batch_generate(scenes: list, output_dir: str = ".") -> list:
    """
    여러 씬 텍스트를 한 번에 생성
    
    Args:
        scenes: [{"id": 1, "text": "나레이션 텍스트"}, ...] 형태의 리스트
        output_dir: 저장 폴더
    
    Returns:
        생성된 파일 경로 리스트
    """
    os.makedirs(output_dir, exist_ok=True)
    results = []
    for scene in scenes:
        sid = scene.get("id", len(results) + 1)
        text = scene.get("text", "")
        path = os.path.join(output_dir, f"scene{sid}.mp3")
        result = generate_tts(text, path)
        results.append(result)
    return results


# ============================================================
#  직접 실행 시
# ============================================================
if __name__ == "__main__":
    # 사용법 출력
    if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
        print(__doc__)
        print("\n[예시]")
        print('  python tts_yoonwoori.py "안녕하세요, 3W AI FP CENTER입니다."')
        print('  python tts_yoonwoori.py "텍스트" output.mp3')
        sys.exit(0)
    
    text_input = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) > 2 else None
    
    result_path = generate_tts(text_input, out_path)
    print(f"\n✅ 파일 저장: {result_path}")
