# JABANG AI 교신 매뉴얼 V1

## 실제 작동 구조

```
ChatGPT가 기획/지시 작성
    ↓
자방선생님이 Anti 채팅창에 붙여넣기 (복붙만. 끝)
    ↓
Anti가 실행
    ↓
Anti가 이 GitHub에 결과 push
    ↓
ChatGPT가 raw URL로 결과 읽음 ✅
```

## ChatGPT가 읽을 수 있는 파일들

| 파일 | URL |
|---|---|
| Anti 보고/PONG | https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/02_AGENT_OUTBOX/ANTI_TO_CHATGPT_PONG.md |
| 오늘 명령 | https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/00_PRIORITY_BOARD/00_NOW_COMMAND.md |
| 오답노트 | https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/03_MEMORY_TO_OLLAMA/ERROR_NOTEBOOK.md |
| 성공사례 | https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/03_MEMORY_TO_OLLAMA/SUCCESS_CASEBOOK.md |
| 헌법 | https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/03_MEMORY_TO_OLLAMA/JABANG_CONSTITUTION.md |

## ChatGPT → Anti 지시 방법

1. ChatGPT가 지시 텍스트 작성
2. 자방선생님이 Anti(Antigravity) 채팅창에 그냥 붙여넣기
3. Anti가 즉시 실행
4. 완료 후 Anti가 이 GitHub에 결과 push
5. ChatGPT가 위 URL에서 결과 확인

## Anti → ChatGPT 보고 방법

Anti가 작업 완료 후 자동으로:
`02_AGENT_OUTBOX/ANTI_TO_CHATGPT_PONG.md` 업데이트

ChatGPT는 이 URL 정기 확인:
https://raw.githubusercontent.com/70dragon-source/JABANG-AI-COMMAND-HUB/main/02_AGENT_OUTBOX/ANTI_TO_CHATGPT_PONG.md

## 핵심 원칙

- 자방선생님은 전달자가 아님
- 자방선생님은 채팅창 복붙만 함
- Anti 실행 결과는 GitHub에 자동 기록
- ChatGPT는 GitHub raw URL로 읽음
- FINAL_ALLOWED=false | STATUS=CANDIDATE/AUDIT_REQUIRED
