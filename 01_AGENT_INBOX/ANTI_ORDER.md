# ANTI_ORDER.md — ANTI에게 전달되는 작업 명령
**갱신일**: 2026-05-09 04:46 KST
**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**

---

## 🚨 현재 명령

**Lovable 정본 메인웹을 로컬 작업본으로 가져오기 전,**
**00~15 페이지별 엔진의도·구동슬롯·디자인수정 체크리스트를 먼저 완성하라.**

### 작업 순서
1. PAGE_TO_ENGINE_BINDING_MAP.md 검토 완료 확인
2. DESIGN_UPGRADE_RULES.md 검토 완료 확인
3. ENGINE_INTENT_MAP.md 검토 완료 확인
4. 위 3개 파일 요약 보고 (파일별 핵심 3줄)
5. 자방선생님 승인 후 → git pull
6. npm run dev → localhost 메인 화면 확인
7. 스크린샷 → 수정 계획 보고 → 승인 → 수정
8. GitHub push → Lovable 자동 반영

---

## 📋 대기 중인 명령

| ID | 명령 | 상태 |
|---|---|---|
| ORDER-001 | 메인웹 00~15 체크리스트 완성 | ⏳ 진행 중 |
| ORDER-002 | git pull → npm dev → 화면 확인 | 🔒 ORDER-001 후 |
| ORDER-003 | Ollama/ThankYou 성공·실패 전달 방식 확정 | 🔲 자방선생님 결정 필요 |
| ORDER-004 | n8n + Telegram + Kakao 자동화 | 🔲 미착수 |
| ORDER-005 | V1~V3 고객상담 인터랙티브 화면 | 🔲 미착수 |

---

## ✅ 완료

| DONE | 내용 | 날짜 |
|---|---|---|
| DONE-001 | COMMAND HUB V1 폴더 구조 구축 | 2026-05-09 |
| DONE-002 | ENGINE_INTENT_MAP.md 정본 | 2026-05-09 |
| DONE-003 | DESIGN_UPGRADE_RULES.md 정본 | 2026-05-09 |
| DONE-004 | ANTI_BOOTLOCK_READ_FIRST.md 생성 | 2026-05-09 |
| DONE-005 | 00_NOW_COMMAND.md 스냅샷 블록 추가 | 2026-05-09 |

---

**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**