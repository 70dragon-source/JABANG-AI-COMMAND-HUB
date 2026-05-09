# 제3작업실 Antigravity 오답노트
작성일: 2026-05-09

## 실패 원인
1. 이미지 배경 방식 → 촌스러움
2. devicePixelRatio 미적용 → 화질 뭉개짐
3. Start-Process 반복 → 탭 10개 누적
4. 버전 관리 부재

## 게임판 제작법 (Canvas 아이소메트릭)
```
isoToScreen(col, row) = {
  x: offsetX + (col-row) * TW/2
  y: offsetY + (col+row) * TH/2
}
```

## 필수: HiDPI 화질
```js
const DPR = window.devicePixelRatio || 1;
canvas.width = w * DPR; canvas.style.width = w + 'px';
ctx.scale(DPR, DPR);
```

작성: 제3작업실 Antigravity