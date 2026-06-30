# 윤우리 성우 TTS 사용법 (마누스 전용)

## 📍 파일 위치
`jabang-ai-fp-center/tts_tools/tts_yoonwoori.py`

---

## 🔑 Step 1 — API 키 설정 (최초 1회)

```bash
# Linux/Mac
export ELEVEN_API_KEY="여기에_API_키_입력"

# Windows
set ELEVEN_API_KEY=여기에_API_키_입력
```

> **API 키는 센터장님께 받을 것. 직접 발급 금지.**

---

## 🎙️ Step 2 — 기본 사용법

```bash
# 텍스트 → mp3 생성 (파일명 자동)
python tts_yoonwoori.py "안녕하세요, 3W AI FP CENTER입니다."

# 파일명 직접 지정
python tts_yoonwoori.py "읽을 텍스트" scene1.mp3
```

---

## 🎬 Step 3 — 여러 씬 한 번에 생성 (Python 코드)

```python
from tts_yoonwoori import batch_generate

scenes = [
    {"id": 1, "text": "정보의 바다에서 핵심을 찾다. 3W AI FP CENTER가 시작됩니다."},
    {"id": 2, "text": "CFP 출신 센터장의 AI 혁신 비전을 소개합니다."},
    {"id": 3, "text": "1인 기업 보험컨설팅, 이제 완전 자동화됩니다."},
    {"id": 4, "text": "고객 서비스 초격차. 보험사용설명서를 제공합니다."},
    {"id": 5, "text": "이 노트북 하나면 충분합니다."},
]

files = batch_generate(scenes, output_dir="./narration_output")
# → narration_output/scene1.mp3 ~ scene5.mp3 생성
```

---

## ⚙️ 고정값 (절대 변경 금지)

| 항목 | 값 |
|---|---|
| Voice ID | `FCwkO6YAajaFLPJU3RXS` |
| 성우명 | 윤우리 (JABANG_YoonWoori_V1) |
| 모델 | `eleven_multilingual_v2` |
| 언어 | 한국어 |

---

## ❌ 흔한 실수

```
[오류] ELEVEN_API_KEY 환경변수가 설정되지 않았습니다.
→ API 키 설정 안 함. Step 1 다시 확인.

HTTPError 401
→ API 키 틀림. 센터장님께 재확인.

HTTPError 429
→ API 크레딧 소진. 센터장님께 보고.
```
