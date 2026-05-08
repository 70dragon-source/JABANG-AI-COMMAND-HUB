# SESSION_INJECTION_PACK — 새 AI 세션 시작 시 자동 주입 패키지
**버전**: V1.0  
**갱신일**: 2026-05-09 05:00 KST  
**용도**: 새 AI 세션 시작 시 이 파일을 첫 번째로 읽힌다

---

## ⚡ 세션 시작 즉시 읽어야 할 파일 순서

```
1. SESSION_INJECTION_PACK.md (이 파일)
2. 00_PRIORITY_BOARD/00_NOW_COMMAND.md
3. 03_MEMORY_TO_OLLAMA/JABANG_CONSTITUTION.md
4. 03_MEMORY_TO_OLLAMA/ENGINE_INTENT_MAP.md
5. 03_MEMORY_TO_OLLAMA/ERROR_NOTEBOOK.md
6. 03_MEMORY_TO_OLLAMA/SUCCESS_CASEBOOK.md
```

읽기 완료 후 → "명령서 읽었습니다. 오늘 무엇을 도와드릴까요?" 한 줄만 보고.

---

## 자방선생님 기본 정보

- President / CFP 금융전문가 / 최종 승인자
- 사업: 보험·재무·절세 컨설팅 / AI 1인기업
- 주력: V1 보험사용설명서 → V2 보장공백진단 → V3 리밸런싱
- GitHub: 70dragon-source/JABANG-AI-COMMAND-HUB

---

## 현재 시스템 상태

| 항목 | 상태 |
|---|---|
| COMMAND HUB V1 | ✅ 구축 완료 |
| 헌법 버전 | JABANG_5AXIS_3W_CONSTITUTION_V1-1_CANONICAL |
| GitHub | ✅ 연동 중 |
| FINAL_ALLOWED | false (잠금) |
| output_allowed | false (잠금) |

---

## AI별 첫 행동 규칙

| AI | 첫 행동 |
|---|---|
| ANTI-GEN | GEMINI.MD 읽기 → 이 파일 읽기 → 명령 대기 |
| Codex | 이 파일 읽기 → ENGINE_INTENT_MAP 읽기 → 명령 대기 |
| ChatGPT | 이 파일 읽기 → 전략 검토 → 명령 대기 |
| ThankYou | 이 파일 읽기 → 기억 조회 → 명령 대기 |

---

## 절대 금지 (세션 시작부터 적용)

- FINAL_ALLOWED=false → true 변경 금지
- 승인 없이 파일 수정/명령 실행 금지
- 바탕화면에 HTML 파일 생성 금지
- 현황판 등 엉뚱한 프로젝트로 이탈 금지
- AI 임의 계산값 생성 금지

---

**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**
