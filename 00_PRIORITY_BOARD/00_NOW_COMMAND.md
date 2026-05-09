# 00_NOW_COMMAND — JABANG AI COMMAND HUB V1
**갱신일**: 2026-05-09 15:37 KST  
**헌법 버전**: JABANG_5AXIS_3W_CONSTITUTION_V1-1_CANONICAL  
**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**

---

## ⚡ AI 즉시 파악 — 현재 상태 스냅샷 (세션 시작 시 반드시 먼저 읽을 것)

> 🚨 이 블록을 읽지 않으면 처음부터 멍청이가 된다. 반드시 읽고 시작한다.

| 항목 | 현재 상태 |
|---|---|
| **COMMAND HUB V1 폴더 구조** | ✅ 100% 구축 완료. 다시 만들지 말 것 |
| **BAT 파일** | ✅ 이미 작동 중 (`06_LAUNCHER/START_JABANG_COMMAND_HUB.bat`) |
| **헌법 파일** | ✅ `03_MEMORY_TO_OLLAMA/JABANG_CONSTITUTION.md` 존재 |
| **AI 간 교신 방법** | ✅ **GitHub** (파일 기반 로컬 교신 아님, 절대 혼동 금지) |
| **ChatGPT ↔ ANTI 교신** | GitHub Issues / 공동작업실 폴더 통해 연결 |
| **성공/실패 → 땡큐 전달** | 현재 방식 자방선생님께 확인 필요 (미확정) |
| **Lovable 메인웹** | GitHub 연동됨. 로컬 수정 후 push → Lovable 자동 반영 |
| **바탕화면 HTML** | ANTI_HTML_QUARANTINE_정리전보관으로 격리 예정 |
| **Ollama 에이전트** | `1.올라마-땡큐/ANTI_OLLAMA_AGENT_HUB.py` 존재 |
| **감사부 현재 점수** | 97% (2026-05-09 15:37) |
| **게임 오피스 현황판** | ✅ 090_GAME_OFFICE_V2_CANDIDATE.html 완성 — 07_VISUAL_DASHBOARD/ |

### 절대 하지 말 것 (이미 저질러진 실수들)
- ❌ GitHub 교신을 파일 기반이라고 잘못 보고
- ❌ 이미 구축된 폴더 구조를 새로 만들려는 행위
- ❌ 구조 파악 전에 승인 요청부터 하는 행위
- ❌ 스크린샷 없이 파일 열기
- ❌ 바탕화면에 HTML 생성
- ❌ 수정마다 새 브라우저 창 열기 (탭 누적 금지)

---

## 🚨 모든 AI — 작업 전 반드시 이 순서로 읽는다

1. 이 파일 (`00_NOW_COMMAND.md`)
2. `../03_MEMORY_TO_OLLAMA/JABANG_CONSTITUTION.md`
3. `../03_MEMORY_TO_OLLAMA/ENGINE_INTENT_MAP.md`
4. `../03_MEMORY_TO_OLLAMA/ERROR_NOTEBOOK.md`
5. `../03_MEMORY_TO_OLLAMA/SUCCESS_CASEBOOK.md`
6. `../01_AGENT_INBOX/ANTI_ORDER.md`

읽기 완료 후 → "명령서 읽었습니다. 오늘 무엇을 도와드릴까요?" 한 줄만 보고.  
그 이상 먼저 하지 않는다.

---

## 📝 표준 보고 포맷 (모든 응답에 강제 적용)
**모든 응답은 반드시 아래 형식을 가장 먼저 출력한다. 헌법(GEMINI.md) 기반.**

```
[작업 라벨 : 00X 작업명]  
[상태] Firebase ✅/❌ | GitHub ✅/❌ | Stitch ✅/❌ | 감사부: 100%  
[목적] 이번 작업의 목적을 1줄로 명시  

---

⚠️ [승인 요청]  
━━━━━━━━━━━━━━━━━━━━━━━━  
📌 무엇을: (어떤 작업을 하는지 한국어로 명확히)  
📌 왜: (왜 이 작업이 필요한지)  
📌 위험도: 🟢안전 / 🟡주의 / 🔴위험  
📌 되돌리기: (원복 가능 여부)  
━━━━━━━━━━━━━━━━━━━━━━━━  
→ 자방선생님 승인 후 즉시 실행합니다.
```

---

## 🪟 새창전환 인수인계 프로토콜 — 헌법 강제

> 🚨 **[2026-05-09 자방선생님 직접 지시] 모든 창, 모든 엔진에서 예외 없이 적용.**

### 새창전환이란
자방선생님이 **새 채팅창으로 전환할 때**, 이전 창 작업 맥락을 끊김 없이 이어가기 위해  
**상황 브리핑문을 붙여넣기로 전달하는 방식**이다.

### AI 수신 즉시 행동 규칙
1. 브리핑문 수신 → **"명령서 읽었습니다. HOLD 조건 확인. 오늘 무엇을 도와드릴까요?"** 1줄만 보고
2. HOLD 조건 수신 → 즉시 내부 고정. 재판정/수정 시도 금지
3. FINAL_ALLOWED=false 수신 → 출력/배포 명령 자동 차단
4. 브리핑 없이 이전 맥락 추정하는 행위 → **즉시 -10%**

---

## 자방선생님이 누구인가

- 직함: President / CFP 금융전문가 / 최종 승인자
- 사업: 보험·재무·절세 컨설팅 / AI 1인기업 구축
- 주력: V1(보험사용설명서) → V2(보장공백 진단) → V3(리밸런싱 제안)
- 목표: 고객이 문의하면 AI가 심리 파악 → 자동 상담 → 계약으로 이어지는 시스템
- 비전: AI 1인기업으로 금융컨설팅 자동화 + 고객 사후관리 + 콘텐츠 자동화

---

## 현재 진행 중인 프로젝트

| 프로젝트 | 상태 | 담당 |
|---|---|---|
| JABANG AI FP CENTER 메인웹 | Lovable 최신본 존재, 로컬 수정 체계 구축 필요 | ANTI-GEN + Codex |
| COMMAND HUB V1 구축 | ✅ 완료 | ANTI-GEN |
| V1~V3 고객 상담 인터랙티브 화면 | 설계 완료, 구현 시작 전 | ANTI-GEN |
| 게임 오피스 현황판 | ✅ V2 CANDIDATE 완성 | 제3작업실 ANTI |
| Ollama/ThankYou 기억 인프라 | ANTI_OLLAMA_AGENT_HUB.py 존재, 연동 필요 | ANTI-GEN |
| n8n + Telegram + Kakao 자동화 | 설계 완료, 구축 시작 전 | n8n |

---

## 🎯 현재 판정 현황 (2026-05-09 15:37 KST)

| 화면 | 판정 | 조건 |
|---|---|---|
| 03 V2GapPage | ✅ ChatGPT 재판정 조건부 PASS | 추가 수정 금지 |
| 04 V3RebalancePage | 🔶 HOLD | 검토보고 완료, ChatGPT 검수 + 자방선생님 승인 대기 |
| 05 CEOPage | 🔶 HOLD | 조건부 해제 아직 아님 |
| 게임 오피스 V2 | ✅ CANDIDATE | 1작업실 iframe 연결 대기 |

## ⛔ 현재 HOLD 조건 (절대 위반 금지)

1. **03 V2GapPage 추가 수정 금지**
2. **sampleData.ts 수치 변경 금지**
3. **FINAL_ALLOWED=true 변경 금지**
4. **output_allowed=true 변경 금지**
5. **04/05 코드 수정 전 화면 캡처 + 검토보고 먼저 제출**

---

## ERROR_NOTEBOOK (오늘 기록)

| 날짜 | 실수 | 교훈 |
|---|---|---|
| 2026-05-09 | 현황판 HTML 열기 반복 | 스크린샷 없이 파일 열기 금지 |
| 2026-05-09 | ZIP 임의 압축 해제 | 파일 작업 전 반드시 승인 |
| 2026-05-09 | 맥락 파악 없이 npm run dev 실행 | 자방선생님이 집중하는 업무 먼저 파악 |
| 2026-05-09 | 게임 오피스 이미지 배경 방식 | Canvas 직접 렌더링이 정답. devicePixelRatio 필수 |
| 2026-05-09 | 수정마다 Start-Process로 새 창 열기 | 탭 10개 누적. 채팅창 임베드 원칙 준수 |

---

**FINAL_ALLOWED=false**  
**output_allowed=false**  
**STATUS=CANDIDATE / AUDIT_REQUIRED**
