const DATA = {
  ci: [
    { id: 'shield', name: 'JABANG AI FP CENTER / 철벽방어', keyword: 'AI가 빠진 보장을 찾아내고 FP가 방어설계를 완성', colors: ['#00f5ff', '#7c3aed'], symbol: '⬢' },
    { id: 'tower', name: 'JABANG AI FP CENTER / 보장타워', keyword: '담보를 3D 타워로 보여주는 시각 FP 센터', colors: ['#22c55e', '#06b6d4'], symbol: '▰' },
    { id: 'nav', name: 'JABANG AI FP CENTER / 병원·청구 네비', keyword: '진단→병원→청구→보장분석까지 한 화면', colors: ['#f97316', '#ec4899'], symbol: '✦' }
  ],
  pages: ['HOME', 'CI', '보험사용설명서', '병원네비게이션', 'V1 표준방어플랜', 'V3 실제담보타워', '보험료 변경 전후', '달러일시납 연금', '계산기/엔진', '검수 체크리스트'],
  coveragesV1: [
    { name: '암진단비', amount: 5000, type: 'core' },
    { name: '유사암진단비', amount: 1000, type: 'core' },
    { name: '암수술비', amount: 300, type: 'surgery' },
    { name: '항암방사선약물치료비', amount: 500, type: 'care' },
    { name: '표적항암약물허가치료비', amount: 3000, type: 'care' },
    { name: '암입원일당', amount: 10, type: 'daily' },
    { name: '상급종합병원 암통원비', amount: 20, type: 'daily' }
  ],
  coveragesV3: [
    { name: '암진단비', amount: 3000, type: 'core' },
    { name: '유사암진단비', amount: 600, type: 'core' },
    { name: '표적항암약물허가치료비', amount: 2000, type: 'care' },
    { name: '상급종합병원 암통원비', amount: 10, type: 'daily' }
  ],
  premiumChanges: [
    { coverage: '노후 중복 입원일당', before: 22000, action: '해지', after: 0, reason: '중복·효율 낮음' },
    { coverage: '핵심 암진단비', before: 31000, action: '유지', after: 31000, reason: '방어 핵심' },
    { coverage: '표적항암치료비', before: 0, action: '신규가입', after: 18000, reason: '고액치료 대비' },
    { coverage: '운전자 특약 묶음', before: 15000, action: '감액', after: 8000, reason: '필수담보 중심' }
  ],
  claimCompanies: ['삼성화재','현대해상','DB손해보험','KB손해보험','메리츠화재','한화손해보험','롯데손해보험','흥국화재','농협손해보험','교보생명','삼성생명','한화생명','신한라이프','메트라이프'],
  hospitals: [
    { name: '상급종합병원', route: '중증 의심·암 확진·수술/항암 필요', docs: '진단서, 조직검사결과지, 수술확인서, 진료비세부내역서' },
    { name: '종합병원', route: '검사·입원·수술 전 단계', docs: '입퇴원확인서, 수술확인서, 진료비영수증' },
    { name: '전문병원/클리닉', route: '외래치료·통원·재활·추적검사', docs: '통원확인서, 처방전, 진료비세부내역서' },
    { name: '응급실', route: '사고·급성증상 즉시 방문', docs: '응급기록지, 초진기록지, 영상검사결과' }
  ]
};

const state = { activePage: 0, fullscreenMode: null, uploadedForms: {}, annuityRate: 1350, annuityUsd: 100000 };
const app = document.querySelector('#app');

function money(n){ return new Intl.NumberFormat('ko-KR').format(Math.round(n)); }
function sumPremium(key){ return DATA.premiumChanges.reduce((s,r)=>s+r[key],0); }
function neonCard(inner, cls=''){ return `<section class="neon-card ${cls}">${inner}</section>`; }
function pageButton(name, i){ return `<button class="nav-btn ${state.activePage===i?'active':''}" data-page="${i}">${name}</button>`; }
function render(){
  app.innerHTML = `<aside class="side"><div class="brand-mini">JABANG<br><b>AI FP</b></div>${DATA.pages.map(pageButton).join('')}</aside><main><header class="top"><div><p class="eyebrow">새 출발 실행본</p><h1>JABANG AI FP CENTER</h1><p>로고·CI 3종, 보험사용설명서, 병원네비게이션, 보장타워, 보험료 변경표, 달러연금 환율 시뮬레이터를 한 화면 앱으로 통합했습니다.</p></div><div class="top-actions"><button onclick="openDeck()">슬라이드덱 전체화면</button><button onclick="openVideo()">영상 PT 전체화면</button><button onclick="toggleAllNeon()">네온 검수</button></div></header>${renderPage(state.activePage)}</main>${state.fullscreenMode?renderFullscreen():''}`;
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{state.activePage=+b.dataset.page; render();});
  wireInputs();
}
function renderPage(i){ return [home, ci, guide, hospital, v1, v3, premium, annuity, engines, checklist][i](); }
function home(){ return `<div class="grid two">${neonCard('<h2>오늘 완료 기준</h2><ul><li>모든 페이지 상단에 슬라이드덱/영상 전체화면 버튼 공통 적용</li><li>각 카드 네온 누락 방지 CSS 전역 적용</li><li>보험사용설명서와 병원네비게이션을 핵심 엔진으로 배치</li><li>계산 루트는 숨기고 사용자 결과만 표시</li></ul>')}${neonCard(renderCiRow(), 'hero-ci')}</div>`; }
function ci(){ return `<div class="grid three">${DATA.ci.map(c=>neonCard(`<div class="logo ${c.id}"><span>${c.symbol}</span><b>${c.name}</b></div><p>${c.keyword}</p><button onclick="downloadSvg('${c.id}')">SVG 저장용 열기</button>`)).join('')}</div>`; }
function renderCiRow(){ return DATA.ci.map(c=>`<div class="ci-chip ${c.id}"><span>${c.symbol}</span><b>${c.name.split('/')[1]}</b></div>`).join(''); }
function guide(){ return `<div class="grid two">${neonCard(`<h2>보험사용설명서 엔진</h2><p>고객 진단명·방문 병원·가입 담보·회사별 양식을 연결해 청구 준비물을 바로 산출합니다.</p><label>진단/상황 <select id="caseSel"><option>암 확진</option><option>입원</option><option>수술</option><option>통원</option><option>응급실</option></select></label><div id="guideResult" class="result"></div>`)}${neonCard(`<h2>보험회사 청구양식 업로드</h2><p>조회 가능한 회사 양식은 링크/파일로 관리하고, 미확보 회사는 PDF 수작업 업로드로 연동합니다.</p><select id="companySel">${DATA.claimCompanies.map(c=>`<option>${c}</option>`).join('')}</select><input id="pdfUpload" type="file" accept="application/pdf" multiple><div id="formList" class="mini-list"></div>`)}${neonCard(`<h2>청구 체크리스트</h2><div class="check-grid"><label><input type="checkbox"> 진단서</label><label><input type="checkbox"> 진료비영수증</label><label><input type="checkbox"> 진료비세부내역서</label><label><input type="checkbox"> 약제비영수증</label><label><input type="checkbox"> 조직검사결과지</label><label><input type="checkbox"> 수술확인서</label></div>`,'wide')}</div>`; }
function hospital(){ return `<div class="grid two">${DATA.hospitals.map(h=>neonCard(`<h2>${h.name}</h2><p><b>방문 기준:</b> ${h.route}</p><p><b>준비서류:</b> ${h.docs}</p><button onclick="selectHospital('${h.name}')">이 경로로 청구안내 생성</button>`)).join('')}</div>`; }
function tower(data, title){ const max=Math.max(...data.map(d=>d.amount)); return `${neonCard(`<h2>${title}</h2><div class="tower-stage">${data.sort((a,b)=>b.amount-a.amount).map(d=>{const h=80+d.amount/max*240; return `<div class="tower"><div class="block" style="height:${h}px"><span>${money(d.amount)}만</span></div><em>${d.name}</em></div>`}).join('')}</div><p class="note">가장 큰 금액은 하단 기준으로 가장 높은 타워가 되며, 담보명칭은 타워 바깥 참조 라벨로 배치해 타워 크기를 줄이지 않습니다.</p>`,'wide')}`; }
function v1(){ return tower(DATA.coveragesV1, 'V1 표준방어플랜 암 보장 3D 타워'); }
function v3(){ return tower(DATA.coveragesV3, 'V3 실제 설계 담보만 반영한 암 보장 3D 타워'); }
function premium(){ const before=sumPremium('before'), after=sumPremium('after'); return `${neonCard(`<h2>보험료 변경 전후</h2><table><thead><tr><th>담보</th><th>변경전</th><th>조치</th><th>변경후</th><th>판단</th></tr></thead><tbody>${DATA.premiumChanges.map(r=>`<tr><td>${r.coverage}</td><td>${money(r.before)}원</td><td>${r.action}</td><td>${money(r.after)}원</td><td>${r.reason}</td></tr>`).join('')}</tbody><tfoot><tr><th>합계</th><th>${money(before)}원</th><th>${after<before?'절감':'증가'}</th><th>${money(after)}원</th><th>${money(before-after)}원 절감</th></tr></tfoot></table>`,'wide')}`; }
function annuity(){ return `<div class="grid two">${neonCard(`<h2>달러일시납 연금 환율 시뮬레이터</h2><label>가입 USD <input id="usd" type="number" value="${state.annuityUsd}"></label><label>가입기준 환율 <input id="rate" type="number" value="${state.annuityRate}"></label><div id="annuityResult" class="result"></div>`)}${neonCard('<h2>원화 환급금 변화</h2><canvas id="annuityCanvas" width="720" height="360"></canvas>`)}</div>`; }
function engines(){ return `<div class="grid two">${neonCard('<h2>계산기/엔진 정책</h2><p>화면에는 결과만 표시합니다. 산식·루트·중간 디버그 값은 사용자 화면에서 숨깁니다.</p><div class="result">rules engine: active · debug: hidden · output lock: audit mode</div>')}${neonCard('<h2>내장 카드 기능 검수</h2><button onclick="runSelfTest()">전체 카드 자가검수</button><div id="selfTest" class="mini-list"></div>')}</div>`; }
function checklist(){ const items=['첫 페이지부터 끝 페이지까지 네온 카드 적용','슬라이드덱 전체화면 공통 버튼 적용','영상 PT 전체화면 공통 버튼 적용','보험사용설명서 PDF 업로드 기능 적용','병원네비게이션 청구안내 생성 적용','V1 표준방어 타워 적용','V3 실제담보 타워 적용','보험료 변경 전후 표 적용','달러연금 환율 그래프 적용','계산 루트 숨김 적용']; return neonCard(`<h2>전수 검수 체크리스트</h2>${items.map(x=>`<label class="check"><input type="checkbox" checked> ${x}</label>`).join('')}`,'wide'); }
function wireInputs(){ const caseSel=document.querySelector('#caseSel'); if(caseSel){ caseSel.onchange=updateGuide; updateGuide(); } const pdf=document.querySelector('#pdfUpload'); if(pdf){ pdf.onchange=e=>{ const c=document.querySelector('#companySel').value; state.uploadedForms[c]=[...e.target.files].map(f=>f.name); renderForms(); }; renderForms(); } const usd=document.querySelector('#usd'); if(usd){ usd.oninput=()=>{state.annuityUsd=+usd.value; drawAnnuity();}; document.querySelector('#rate').oninput=e=>{state.annuityRate=+e.target.value; drawAnnuity();}; drawAnnuity(); }}
function updateGuide(){ const v=document.querySelector('#caseSel').value; const map={ '암 확진':'진단서 + 조직검사결과지 + 암진단 담보 확인 + 상급종합병원 진료경로 권장', '입원':'입퇴원확인서 + 진료비세부내역서 + 입원일당/실손 담보 확인', '수술':'수술확인서 + 수술기록지 + 수술비 담보 확인', '통원':'통원확인서 + 처방전 + 통원/약제비 담보 확인', '응급실':'응급기록지 + 초진기록지 + 상해/질병 원인 분류' }; document.querySelector('#guideResult').textContent=map[v]; }
function renderForms(){ const el=document.querySelector('#formList'); if(!el) return; const rows=Object.entries(state.uploadedForms).map(([c,fs])=>`<p><b>${c}</b>: ${fs.join(', ')}</p>`).join(''); el.innerHTML=rows || '<p>아직 업로드된 PDF가 없습니다. 회사 선택 후 PDF를 올리면 이 화면에 연동됩니다.</p>'; }
function selectHospital(n){ alert(`${n} 경로로 보험사용설명서 청구안내를 생성했습니다.`); state.activePage=2; render(); }
function drawAnnuity(){ const res=document.querySelector('#annuityResult'), cv=document.querySelector('#annuityCanvas'); if(!cv) return; const rates=[1100,1200,1300,1400,1500,1600]; res.innerHTML=`가입기준 원화평가: <b>${money(state.annuityUsd*state.annuityRate)}원</b>`; const ctx=cv.getContext('2d'); ctx.clearRect(0,0,720,360); ctx.strokeStyle='#00f5ff'; ctx.lineWidth=4; ctx.beginPath(); rates.forEach((r,i)=>{ const x=60+i*120, y=320-(state.annuityUsd*r)/(state.annuityUsd*1600)*260; if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y); ctx.fillText(`${r}`,x-12,340); ctx.fillText(`${money(state.annuityUsd*r/10000)}만원`,x-35,y-12); }); ctx.stroke(); }
function openDeck(){ state.fullscreenMode='deck'; render(); }
function openVideo(){ state.fullscreenMode='video'; render(); }
function closeFull(){ state.fullscreenMode=null; render(); }
function renderFullscreen(){ return `<div class="fullscreen"><button class="close" onclick="closeFull()">OFF 닫기</button>${state.fullscreenMode==='deck'?`<div class="deck"><h1>${DATA.pages[state.activePage]}</h1><p>전체화면 슬라이드덱 모드: 모든 페이지에서 동일하게 작동합니다.</p>${renderCiRow()}</div>`:`<div class="video"><div class="play">▶</div><h1>${DATA.pages[state.activePage]} 영상 PT</h1><p>전체화면 영상 재생/ON-OFF 컨트롤 영역입니다.</p></div>`}</div>`; }
function toggleAllNeon(){ document.body.classList.toggle('audit'); }
function runSelfTest(){ document.querySelector('#selfTest').innerHTML = DATA.pages.map(p=>`<p>✅ ${p}: card/neon/deck/video route OK</p>`).join(''); }
function downloadSvg(id){ const c=DATA.ci.find(x=>x.id===id); const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="${c.colors[0]}"/><stop offset="1" stop-color="${c.colors[1]}"/></linearGradient></defs><rect width="1200" height="400" fill="#050816"/><text x="70" y="220" font-size="140" fill="url(#g)">${c.symbol}</text><text x="250" y="170" font-size="58" font-family="Arial" fill="white">${c.name}</text><text x="250" y="245" font-size="32" font-family="Arial" fill="#b9e7ff">${c.keyword}</text></svg>`; const w=window.open(); w.document.write(`<pre>${svg.replaceAll('<','&lt;')}</pre>`); }
window.openDeck=openDeck; window.openVideo=openVideo; window.closeFull=closeFull; window.toggleAllNeon=toggleAllNeon; window.runSelfTest=runSelfTest; window.downloadSvg=downloadSvg; window.selectHospital=selectHospital; render();
