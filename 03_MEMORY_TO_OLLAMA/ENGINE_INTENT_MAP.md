# ENGINE_INTENT_MAP.md — JABANG AI 엔진 개발의도 정본
**갱신일**: 2026-05-09 04:42 KST
**헌법 버전**: JABANG_5AXIS_3W_CONSTITUTION_V1-1_CANONICAL
**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**

---

## 1. 핵심 파이프라인

```
원본 파일 → OCR/Parser → source-backed JSON → rules engine → audit engine → AI 설명문 → dashboard/PDF/PT
```

> 🚨 **AI 임의 계산 절대 금지** — 모든 계산값은 rules engine에서만 나온다.

---

## 2. V1 / V2 / V3 정의

| 버전 | 명칭 | 목적 |
|---|---|---|
| **V1** | 보험사용설명서 | 고객 보험을 쉽게 이해하도록 설명 |
| **V2** | 보장공백 진단 | 현재 보장 vs 표준 권고 비교, 공백 탐지 |
| **V3** | 리밸런싱 제안 | V2 공백 기반 리모델링 후보안 제시 |

> V3 최종 권유·계약·투자 판단은 반드시 자방선생님 승인 후 실행.

---

## 3. ROLE-A / B / C 구조

| 역할 | 담당 | 권한 |
|---|---|---|
| **ROLE-A** | 자방선생님 | 최종 승인, 고객 면담, 계약 판단 |
| **ROLE-B** | ANTI-GEN | 설명, 자료 조회, 분석 보조 |
| **ROLE-C** | Codex/Koen | 엔진 구현, JSON 스키마, rules engine 코딩 |

---

## 4. 감사게이트 기본값 (변경 금지)

```
FINAL_ALLOWED = false
output_allowed = false
STATUS = CANDIDATE / AUDIT_REQUIRED
```

---

## 5. 고객별 JSON 기반 출력 구조

```json
{
  "customer_id": "UUID",
  "audit_status": "CANDIDATE",
  "v1_output": { "insurance_items": [], "source": "원본.pdf" },
  "v2_output": { "gap_items": [], "risk_level": "HIGH", "source_verified": true },
  "v3_output": { "proposal_cards": [], "approval_required": true, "final_allowed": false }
}
```

---

## 6. 엔진 개발 우선순위

| 순위 | 엔진 | 상태 |
|---|---|---|
| 1 | source-backed JSON schema | ⏳ 구축 필요 |
| 2 | 18대 건강보장 분류 rules engine | ⏳ 구축 필요 |
| 3 | 10년 누적 청구권 타워 | ⏳ 구축 필요 |
| 4 | V3 해지후보 정렬 엔진 | ⏳ 구축 필요 |
| 5 | ROLE-A/B/C 감사 루프 | ⏳ 구축 필요 |

---

**FINAL_ALLOWED=false | output_allowed=false | STATUS=CANDIDATE/AUDIT_REQUIRED**