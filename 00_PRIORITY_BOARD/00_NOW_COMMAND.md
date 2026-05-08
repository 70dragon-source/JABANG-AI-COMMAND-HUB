# 00_NOW_COMMAND — JABANG AI COMMAND HUB V1
**갱신일**: 2026-05-09 05:30 KST  
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
| **Lovable 메인웹** | GitHub 연동됨. 로컬 수정 후 push → Lovable 자동 반영 |
| **Ollama 헌법감시관** | ✅ JABANG_CONSTITUTION_GUARD.py 구축 완료 |
| **Telegram 보고 시스템** | ⚠️ config.env에 BOT_TOKEN / CHAT_ID 입력 필요 |
| **감사부 현재 점수** | 104% |

### 절대 하지 말 것 (이미 저질러진 실수들)
- ❌ GitHub 교신을 파일 기반이라고 잘못 보고
- ❌ 이미 구축된 폴더 구조를 새로 만들려는 행위
- ❌ 구조 파악 전에 승인 요청부터 하는 행위
- ❌ 스크린샷 없이 파일 열기
- ❌ 바탕화면에 HTML 생성

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
| JABANG AI FP CENTER 메인웹 완성 | 🎯 내일 최우선 | ANTI-GEN + ChatGPT |
| COMMAND HUB V1 구축 | ✅ 완료 | ANTI-GEN |
| Ollama 헌법감시관 + Telegram | ✅ 스크립트 완성, BOT_TOKEN 입력 필요 | ANTI-GEN |
| V1~V3 고객 상담 인터랙티브 화면 | 설계 완료, 구현 시작 전 | ANTI-GEN |
| n8n + Telegram + Kakao 자동화 | 설계 완료, 구축 시작 전 | n8n |

---

## 🎯 내일(2026-05-10) 1순위 명령 — JABANG AI FP CENTER 메인웹 완성

> 🚨 **ENGINE_DEVELOPMENT_INTENT_V1.md 반드시 먼저 읽고 시작. 순서 건너뜀 = FAIL.**

### 공식 목표
Lovable 최종 PASS본 → 로컬 실행 → 00~15 스크린샷 → GitHub 업로드 → ChatGPT 검수 → ANTI 한 화면씩 수정 → 엔진결합 준비본 완성

### 11단계 고정 순서
| 단계 | 담당 | 내용 |
|---|---|---|
| 1 | ANTI | GitHub pull → Lovable 최신본 로컬 반영 |
| 2 | ANTI | 정본 보존 + 별도 로컬 작업본 생성 |
| 3 | ANTI | npm install → npm run dev 실행 |
| 4 | ANTI | **수정 없이** 00~15 전체 스크린샷 |
| 5 | ANTI | 스크린샷 → GitHub `screenshots/` 폴더 업로드 |
| 6 | ChatGPT | GitHub 스크린샷 직접 확인 |
| 7 | ChatGPT | 화면별 PASS/HOLD/FAIL 판정 |
| 8 | ChatGPT | 한 화면씩 ANTI 수정명령 작성 |
| 9 | ChatGPT | GitHub 작업지시 파일 업로드 |
| 10 | ANTI | 지시받은 한 화면만 수정 → after 스크린샷 |
| 11 | ChatGPT | 재검수 PASS → 다음 화면 |

### GitHub 보고 경로
```
screenshots/00_main_before.png ~ screenshots/15_management_before.png
02_AGENT_OUTBOX/SCREENSHOT_INDEX.md
02_AGENT_OUTBOX/ANTI_REPORT.md
```

### 자방선생님 핵심 수정사항 13개
1. 메인 직함: "AI FP 센터장 자방선생" 한 줄
2. 메인 고객/가족/상담목적 블록 삭제
3. 로고: 고대비 골드/화이트 선명화
4. AI 배경선: 글자 간섭 없는 미세 네트워크/노드/분석링
5. 내부 반복 엔진상태 사이드바 삭제 또는 축소
6. V1/V2/V3/CEO/달러연금 화면 폭 확장
7. V1: 핵심 독립상품/보험사용설명서 강화
8. V2: 표준 방어플랜/철벽 방어플랜 기준 먼저 제시
9. V2/V3: 암·뇌·심 1년/10년 청구권 타워 강화
10. V3: 유지/검토/보완/신규제안 + 해지검토 후보 상단
11. CEO: 전략카드형 상담센터
12. 달러연금: 통화분산·환리스크·달러자산비중·노후현금흐름 중심
13. PDF/프린트: 내부검토용 가능, 고객용은 감사 후 허용

### ANTI 절대 금지 (내일 작업 중)
- ❌ 정본 직접 덮어쓰기  ❌ 전체 화면 일괄 수정
- ❌ 알아서 고급화  ❌ 현황판 프로젝트 이탈
- ❌ 엔진 없는 숫자 생성  ❌ ChatGPT 검수 전 다음 화면 이동

### 성공 기준
- [ ] Lovable 최종본 로컬 실행 성공
- [ ] 00~15 스크린샷 GitHub 업로드
- [ ] ChatGPT 화면별 검수 + ANTI 수정 완료
- [ ] 엔진 슬롯·JSON·audit gate 연결 준비본 확보

---

## ⚙️ Telegram 헌법감시관 활성화 방법 (BOT_TOKEN 받으면 즉시)

```
파일 위치: 1.올라마-땡큐/config.env
입력 내용:
  BOT_TOKEN=발급받은토큰
  CHAT_ID=자방선생님채팅방ID
실행: 실행_헌법감시관.bat 더블클릭
테스트: 모드 2 선택 → Telegram 테스트 메시지 발송
```

---

## ERROR_NOTEBOOK (오늘 기록)

| 날짜 | 실수 | 교훈 |
|---|---|---|
| 2026-05-09 | 현황판 HTML 열기 반복 | 스크린샷 없이 파일 열기 금지 |
| 2026-05-09 | ZIP 임의 압축 해제 | 파일 작업 전 반드시 승인 |
| 2026-05-09 | 맥락 파악 없이 npm run dev 실행 | 자방선생님이 집중하는 업무 먼저 파악 |
| 2026-05-09 | GitHub 교신을 파일 기반이라고 잘못 보고 | 세션 시작 시 스냅샷 블록 반드시 먼저 읽기 |

---

## SUCCESS_CASEBOOK (오늘 기록)

| 날짜 | 성공 | 재사용 방법 |
|---|---|---|
| 2026-05-09 | 헌법준비 전체 완료 + GitHub 동기화 | 세션 시작 시 SESSION_INJECTION_PACK.md 먼저 읽기 |
| 2026-05-09 | Ollama 헌법감시관 구축 | JABANG_CONSTITUTION_GUARD.py — BOT_TOKEN만 넣으면 즉시 작동 |
| 2026-05-09 | ChatGPT 검토 → COMMAND HUB V1 헌법 완성 | 중요 구조는 ChatGPT와 함께 설계 후 ANTI 실행 |

---

**FINAL_ALLOWED=false**  
**output_allowed=false**  
**STATUS=CANDIDATE / AUDIT_REQUIRED**
