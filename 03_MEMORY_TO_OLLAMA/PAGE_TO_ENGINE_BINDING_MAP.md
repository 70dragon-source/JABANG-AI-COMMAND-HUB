# PAGE_TO_ENGINE_BINDING_MAP.md — 페이지별 엔진 연결 정본
**갱신일**: 2026-05-09 04:46 KST | FINAL_ALLOWED=false | STATUS=CANDIDATE/AUDIT_REQUIRED

> 🚨 메인웹 수정 전 반드시 읽는다. 예쁜 화면만 = FAIL. 엔진 미연결 = FAIL.

---

| 페이지 | 개발의도 | 연결엔진 | JSON슬롯 | 누락가능성 | 판정 |
|---|---|---|---|---|---|
| **00** 메인홈 | FP센터 진입점 | 없음 | 없음 | 메인블록 삭제 필요 | CANDIDATE |
| **01** V1 보험설명 | 내 보험이 뭘 해주나 | V1 rules engine | v1_output.insurance_items[] | 하드코딩 샘플 가능성 | CANDIDATE |
| **02** V2 공백진단 | 현재보장 vs 권고 | V2 gap + 18대분류 | v2_output.gap_items[], risk_level | AI임의 공백 생성 위험 | CANDIDATE |
| **03** V3 리밸런싱 | 후보안 제시 | V3 proposal engine | v3_output.proposal_cards[] | 감사없이 활성화 위험 | CANDIDATE |
| **04** CEO절세 | 상속·증여·법인·달러 | 절세 rules engine | tax_plan.inheritance/gift | 계산값 AI임의생성 위험 | CANDIDATE |
| **05** 은퇴연금 | 4층구조·연금자금 | 연금 calc engine | pension.four_layer[] | 연금값 하드코딩 가능성 | CANDIDATE |
| **06** 건강보험 | 상한액·산정특례 | 건보 rules engine | health.limit_amount | 연도별 기준 미업데이트 | CANDIDATE |
| **07** 실손보험 | 1~4세대 비교 | 실손 비교 engine | silson.generation | source 미확인 | CANDIDATE |
| **08** 보험사분석 | 18대담보·사망분석 | 경쟁력 분석 engine | company.18_coverage[] | 데이터 최신화 여부 | CANDIDATE |
| **09** 행동경제학 | 18대건강보장 시각화 | 18대분류 rules | behavior.18_categories[] | rules engine 실연결 여부 | CANDIDATE |
| **10** 출력허브 | PT·SNS·인쇄 | Stitch+PDF engine | output.pt/sns/print | 감사없이 출력버튼 위험 | CANDIDATE |
| **11** 올라마연동 | 로컬AI 연동 (보류) | Ollama API | ollama.model/query | 의도적 보류 | DEFERRED |
| **12** 상담흐름 | AI FP 상담 UI | 상담AI + V1/V2/V3 | consultation.query | 화면 미구현 가능성 | CANDIDATE |
| **13** 사후관리 | CRM·Kakao·Telegram | CRM + Kakao API | crm.followup | 화면 미구현 가능성 | CANDIDATE |
| **14** 마케팅 | 유튜브·블로그·n8n | n8n workflow | marketing.content_queue[] | 화면 미구현 가능성 | CANDIDATE |
| **15** 경영관리 | 현황판·백업 | 현황판 engine | management.task_queue[] | 메인웹 혼동 주의 | CANDIDATE |

---

**공통**: 카드글로우 + AI INSIGHT박스 + OPEN버튼 + 상태칩 + 감사배지 전 화면 적용

**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**