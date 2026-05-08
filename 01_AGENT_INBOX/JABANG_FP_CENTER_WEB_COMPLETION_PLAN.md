# [JABANG AI FP CENTER 내일 웹완성 1장 정본]
**작성일**: 2026-05-09 05:34 KST  
**발령자**: 자방선생님 (President / CFP 금융전문가 / 최종 승인자)  
**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**

> 🚨 이 파일은 정본이다. 모든 AI(ChatGPT, ANTI-GEN, Codex, ThankYou)는 내일 작업 시작 전 반드시 읽는다.

---

## 공식 목표

Lovable 최종 PASS본을 기준으로 메인웹을 로컬에서 실행하고,  
00~15 각 페이지 스크린샷을 GitHub에 올린 뒤,  
ChatGPT가 자방선생님 수정안 + 엔진개발 의도 + 디자인 기준으로 검수하고,  
ANTI가 한 화면씩 수정하여 엔진결합 준비본까지 완성한다.

---

## 공식 위계

| 순위 | 주체 | 역할 |
|---|---|---|
| 1순위 | 자방선생님 | President / CFP 금융전문가 / 최종 승인자 |
| 2순위 | JABANG AI COMMAND HUB V1 | 현재 명령 / 우선순위 / 작업 대상 / 지휘본부 |
| 3순위 | Ollama/ThankYou 헌법 | 의도 기억 / 헌법 / 오답노트 / 오류 규제 |
| 협업자 | ChatGPT / ANTI-GEN / Antigravity / Codex/Koen / n8n / Firebase / GitHub / Google Drive | - |

---

## 내일 작업 순서 (11단계 — 건너뜀 금지)

| 단계 | 담당 | 내용 |
|---|---|---|
| 1 | ANTI | Lovable 최종본 GitHub pull 또는 다운로드 |
| 2 | ANTI | 정본 보존 + 별도 로컬 작업본 생성 |
| 3 | ANTI | npm install → npm run dev 실행 |
| 4 | ANTI | **수정 없이** 00~15 전체 스크린샷 |
| 5 | ANTI | 스크린샷 + 보고서 → GitHub `screenshots/` 업로드 |
| 6 | ChatGPT | GitHub 스크린샷 직접 확인 |
| 7 | ChatGPT | 화면별 PASS/HOLD/FAIL 판정 |
| 8 | ChatGPT | 한 화면씩 ANTI 수정명령 작성 |
| 9 | ChatGPT | GitHub 작업지시 파일 업로드 (불가시 자방선생님께 1회 붙여넣기) |
| 10 | ANTI | 지시받은 한 화면만 수정 → after 스크린샷 |
| 11 | ChatGPT | 재검수 PASS → 다음 화면 |

---

## ChatGPT 검수 기준 (6개 고정)

1. 이 화면이 왜 존재하는가?
2. 어떤 엔진/JSON/감사 슬롯이 붙어야 하는가?
3. 고객상담 현장 PT에서 설명 가능한가?
4. 디자인이 고급스럽고 가독성이 좋은가?
5. 임의 수치·보험금·점수·세금·투자판단이 없는가?
6. FINAL_ALLOWED=false / output_allowed=false가 유지되는가?

---

## 전체 엔진개발 의도

```
원본 파일
  → OCR/parser (텍스트 추출)
  → source-backed JSON (검증된 데이터)
  → Python/JS rules engine (계산)
  → audit engine (검증)
  → AI 설명문 (자연어 해설)
  → dashboard/PDF/PT 출력
```

> 🚨 AI는 계산하지 않는다.  
> 보험금, 부족분, 점수, 세금, 투자판단, 합계는 **rules engine만** 계산한다.  
> AI는 설명·구조화·스토리텔링·검수·작업지시만 한다.

---

## 자방선생님 핵심 수정사항 13개

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

---

## 페이지별 핵심 개발 의도

| 페이지 | 핵심 |
|---|---|
| **V1** | 보험사용설명서 / 현재 가입현황 / 18대 건강보장 분류 / 질병별 사용법 / 추정·정본 구분 / 단독 출력 가능 |
| **V2** | 보장공백 진단 / 표준·철벽 기준 / 현재보장 비교 / 암·뇌·심 청구권 타워 / 니즈환기 |
| **V3** | 리모델링 후보안 / 유지·검토·보완·신규 / 초가집 vs 초고층 청구권 타워 / 보험료 전후 비교는 엔진값만 |
| **CEO** | 정관정비, 임원보수·퇴직금, 경영인정기보험, 단체보험, 가지급금, 증여, 종신보험 구조, 전문가 검토 표시 |
| **달러연금** | 노후현금흐름, 통화분산, 환리스크, USD 쿠폰형 카드, 연금수령구조 |
| **PDF** | ChatGPT 샘플 10종을 React/PDF 템플릿으로 구현, 고객별 JSON 자동 삽입 |

---

## ANTI 절대 금지 (내일 작업 중)

- ❌ 정본 직접 덮어쓰기
- ❌ 전체 화면 일괄 수정
- ❌ 알아서 고급화
- ❌ 현황판 프로젝트 이탈
- ❌ 엔진 없는 숫자 생성
- ❌ 고객용 PDF/PT 잠금 해제
- ❌ ChatGPT 검수 전 다음 화면 이동

---

## GitHub 보고 경로

```
screenshots/00_main_before.png
screenshots/01_v1_before.png
screenshots/02_v2_before.png
screenshots/03_v3_before.png
screenshots/04_ceo_before.png
screenshots/05_dollar_pension_before.png
02_AGENT_OUTBOX/SCREENSHOT_INDEX.md
02_AGENT_OUTBOX/ANTI_REPORT.md
```

---

## 내일 성공 기준

- [ ] Lovable 최종본 로컬 실행 성공
- [ ] 00~15 스크린샷 GitHub 업로드
- [ ] ChatGPT 화면별 검수
- [ ] ANTI 한 화면씩 수정
- [ ] after 스크린샷 재검수
- [ ] 엔진 슬롯·JSON·audit gate 연결 준비본 확보

---

**FINAL_ALLOWED=false**  
**output_allowed=false**  
**STATUS=CANDIDATE / AUDIT_REQUIRED**
