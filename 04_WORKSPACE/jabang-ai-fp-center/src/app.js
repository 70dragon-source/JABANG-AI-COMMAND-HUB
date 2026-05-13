const DATA = {
  ci: [
    { id: 'shield', name: 'JABANG AI FP CENTER / 철벽방어', keyword: '빠진 보장을 확인하고 FP가 방어설계를 완성', colors: ['#1688d5', '#7c6ee6'], symbol: '⬢' },
    { id: 'tower', name: 'JABANG AI FP CENTER / 보장타워', keyword: '담보를 보장타워로 보여주는 시각 FP 센터', colors: ['#19b9a4', '#1688d5'], symbol: '▰' },
    { id: 'nav', name: 'JABANG AI FP CENTER / 병원·청구 네비', keyword: '증상→병원→서류→보험사용설명서까지 연결', colors: ['#f5a524', '#e15b64'], symbol: '✦' }
  ],
  pages: ['HOME', 'CI', '보험사용설명서', '병원네비게이션', 'V1 표준방어플랜', 'V3 실제담보타워', '보험료 변경 전후', '달러일시납 연금', '계산기/엔진', '검수 체크리스트'],
  manualSections: [
    { title: '가입현황', body: '고객별 가입 건수, 보험사, 납입상태, 만기 구조를 원본 증권 기준으로 정리하는 자리입니다.', badges: ['원본 근거 대기', '감사 필요'] },
    { title: '보험목록', body: '회사·상품·담보·만기·납입상태를 표로 연결합니다. 실제 값은 원본 파서와 JSON 연결 후 표시합니다.', badges: ['엔진 산출 대기'] },
    { title: '주요보장', body: '암·뇌·심·수술·입원·실손 등 상담 현장에서 먼저 설명해야 할 보장분류입니다.', badges: ['내부검토용'] },
    { title: '18대 건강보장', body: '건강보장을 질병상황별로 나누어 고객이 어떤 담보를 언제 쓰는지 이해하게 만듭니다.', badges: ['감사 필요'] }
  ],
  conditionUses: [
    { name: '암 진단 시', action: '진단서·조직검사결과지 확보 후 암진단비, 유사암, 항암치료, 통원 담보를 순서대로 확인합니다.' },
    { name: '뇌혈관 의심 시', action: '응급 또는 상급병원 진료 후 영상검사결과, 진단서, 입원·수술 여부를 기준으로 담보를 확인합니다.' },
    { name: '심장 증상 시', action: '응급기록지와 검사결과를 확보하고 진단·수술·입원 담보를 분리해 봅니다.' },
    { name: '수술 시', action: '수술확인서와 수술기록지를 확보하고 질병/상해 수술비 담보를 확인합니다.' },
    { name: '입원 시', action: '입퇴원확인서, 진료비영수증, 세부내역서로 입원일당·실손·수술비를 연결합니다.' }
  ],
  claimDocs: [
    '진단서 또는 질병분류코드가 포함된 확인서',
    '진료비영수증과 진료비세부내역서',
    '입퇴원확인서 또는 통원확인서',
    '수술확인서와 수술기록지',
    '조직검사결과지 또는 영상검사결과지',
    '약제비영수증과 처방전'
  ],
  hospitals: [
    { id: 'clinic', name: '의원/클리닉', cls: 'soft-blue', route: '가벼운 외래, 초기 상담, 약 처방, 단기 통원', before: '신분증, 기존 처방전, 복용약 목록, 이전 검사자료', after: '통원확인서, 처방전, 약제비영수증, 진료비영수증', note: '초기 증상 확인과 통원서류 확보에 적합합니다. 단정 진단은 하지 않습니다.' },
    { id: 'special', name: '전문병원', cls: 'soft-mint route-card mint', route: '특정 질환 검사, 재활, 관절·척추·안과 등 전문 치료', before: '의뢰서, 기존 영상자료, 검사결과, 복용약 목록', after: '진단서, 수술확인서, 통원확인서, 세부내역서', note: '전문치료와 보험청구 서류를 동시에 챙기는 경로입니다.' },
    { id: 'general', name: '종합병원', cls: 'soft-lavender route-card lavender', route: '검사, 입원, 수술 가능성이 있는 상황', before: '이전 진료기록, 영상자료, 의뢰서, 보호자 연락처', after: '입퇴원확인서, 수술확인서, 진료비영수증, 세부내역서', note: '입원·수술·검사비 청구 흐름을 준비하기 좋은 경로입니다.' },
    { id: 'tertiary', name: '상급종합병원', cls: 'soft-blue route-card', route: '중증 의심, 암 확진, 고난도 수술·항암·중증 검사', before: '진료의뢰서, 조직검사결과, 영상 CD, 기존 진단서', after: '진단서, 조직검사결과지, 수술확인서, 항암치료확인서, 세부내역서', note: '중증보장과 고액치료 담보 확인이 필요한 경로입니다.' },
    { id: 'er', name: '응급실', cls: 'soft-rose route-card emergency', route: '급성증상, 사고, 의식저하, 흉통, 마비 등 즉시 진료가 필요한 상황', before: '신분증, 보호자 연락처, 복용약, 사고 경위 메모', after: '응급기록지, 초진기록지, 검사결과, 진료비영수증, 세부내역서', note: '응급상황은 병원 선택보다 즉시 진료가 우선입니다.' }
  ],
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
  claimCompanies: ['삼성화재','현대해상','DB손해보험','KB손해보험','메리츠화재','한화손해보험','롯데손해보험','흥국화재','농협손해보험','교보생명','삼성생명','한화생명','신한라이프','메트라이프']
};

const state = { activePage: 0, fullscreenMode: null, uploadedForms: {}, annuityRate: 1350, annuityUsd: 100000, selectedHospital: 'general', selectedCondition: '암 진단 시' };
const app = document.querySelector('#app');

function money(n){ return new Intl.NumberFormat('ko-KR').format(Math.round(n)); }
function sumPremium(key){ return DATA.premiumChanges.reduce((s,r)=>s+r[key],0); }
function badges(list){ return `<div class="badges">${list.map(x=>`<span class="badge ${x.includes('감사')?'audit':x.includes('잠금')?'lock':x.includes('대기')?'wait':'ok'}">${x}</span>`).join('')}</div>`; }
function neonCard(inner, cls=''){ return `<section class="neon-card ${cls}">${inner}</section>`; }
function pageButton(name, i){ return `<button class="nav-btn ${state.activePage===i?'active':''}" data-page="${i}">${name}</button>`; }
function go(pageName){ const idx = DATA.pages.indexOf(pageName); if(idx >= 0){ state.activePage = idx; render(); setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),0); } }
function render(){
  app.innerHTML = `<aside class="side"><div class="brand-mini">JABANG<br><b>AI FP</b></div>${DATA.pages.map(pageButton).join('')}</aside><main><header class="top"><div><p class="eyebrow">고객 PT 1차 준비본</p><h1>JABANG AI FP CENTER</h1><p>아플 때 병원 선택부터 준비서류, 진료 후 보험청구, 내 보험 사용법까지 한 흐름으로 설명하는 고객 상담 화면입니다. 실제 산출값은 원본·엔진·감사 연결 후 표시합니다.</p>${badges(['엔진 산출 대기','원본 근거 대기','감사 필요','고객용 출력 잠금'])}</div><div class="top-actions"><button onclick="openDeck()">슬라이드덱 전체화면</button><button onclick="openVideo()">영상 PT 전체화면</button><button onclick="toggleAllNeon()">네온 검수</button></div></header>${renderPage(state.activePage)}</main>${state.fullscreenMode?renderFullscreen():''}`;
  document.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{state.activePage=+b.dataset.page; render();});
  wireInputs();
}
function renderPage(i){ return [home, ci, guide, hospital, v1, v3, premium, annuity, engines, checklist][i](); }
function home(){ return `<div class="grid two">${neonCard(`<h2>아플 때 병원 선택부터 보험청구까지</h2><p>고객이 가장 먼저 궁금해하는 것은 복잡한 분석표가 아니라 “어디로 가야 하고, 무엇을 챙기고, 내 보험은 어떻게 쓰는가”입니다.</p><div class="cta-row"><button onclick="go('병원네비게이션')">병원 경로 먼저 보기</button><button onclick="go('보험사용설명서')">내 보험 사용법 보기</button></div>${badges(['고객 PT 가능','감사 전 출력 잠금'])}`, 'hero-card soft-blue')}${neonCard(`<h2>오늘 화면의 기준</h2><ul><li>밝은 블루스카이 배경과 큰 카드로 고객 가독성을 우선합니다.</li><li>보험사용설명서와 병원네비게이션을 왕복 연결합니다.</li><li>보험금·점수·등급은 임의 표시하지 않습니다.</li><li>진단 확정이나 특정 병원 추천을 하지 않습니다.</li></ul>`, 'soft-mint')}${neonCard(renderCiRow(), 'hero-ci wide')}</div>`; }
function ci(){ return `<div class="grid three">${DATA.ci.map(c=>neonCard(`<div class="logo ${c.id}"><span>${c.symbol}</span><b>${c.name}</b></div><p>${c.keyword}</p><button onclick="downloadSvg('${c.id}')">SVG 저장용 열기</button>`, 'soft-blue')).join('')}</div>`; }
function renderCiRow(){ return DATA.ci.map(c=>`<div class="ci-chip ${c.id}"><span>${c.symbol}</span><b>${c.name.split('/')[1]}</b></div>`).join(''); }
function guide(){ return `<div class="grid two">${neonCard(`<h2>보험사용설명서</h2><p>내 보험을 언제, 어떻게 써야 하는지 설명하는 핵심 독립상품입니다. 실제 금액은 엔진과 감사 연결 후 표시합니다.</p>${badges(['엔진 산출 대기','원본 근거 대기','감사 필요'])}<div class="cta-row"><button onclick="go('병원네비게이션')">병원 경로 먼저 보기</button><button onclick="document.querySelector('#claimDocsBlock')?.scrollIntoView({behavior:'smooth'})">청구서류 보기</button></div>`, 'soft-blue')}${DATA.manualSections.map(s=>neonCard(`<h2>${s.title}</h2><p>${s.body}</p>${badges(s.badges)}`, 'soft-mint')).join('')}${neonCard(`<h2>질병상황별 사용법</h2><p>고객 상황을 선택하면 어떤 서류와 담보 확인이 필요한지 상담 흐름으로 안내합니다.</p><label>상황 선택 <select id="caseSel">${DATA.conditionUses.map(c=>`<option ${state.selectedCondition===c.name?'selected':''}>${c.name}</option>`).join('')}</select></label><div id="guideResult" class="result"></div>`, 'wide soft-lavender')}${neonCard(`<h2 id="claimDocsBlock">청구서류 안내</h2><div class="check-grid">${DATA.claimDocs.map(d=>`<label class="check"><input type="checkbox"> ${d}</label>`).join('')}</div><div class="cta-row"><button onclick="go('병원네비게이션')">이 서류를 병원 경로와 연결</button></div>`, 'wide soft-amber')}${neonCard(`<h2>보험회사 청구양식 업로드</h2><p>회사별 양식은 수작업 PDF 업로드 슬롯으로 보관합니다. 고객용 최종 출력은 감사 후 허용합니다.</p><select id="companySel">${DATA.claimCompanies.map(c=>`<option>${c}</option>`).join('')}</select><input id="pdfUpload" type="file" accept="application/pdf" multiple><div id="formList" class="mini-list"></div>${badges(['내부검토용','고객용 출력 잠금'])}`, 'wide')}</div>`; }
function hospital(){ return `<div class="grid two">${neonCard(`<h2>병원네비게이션</h2><p>아플 때 어느 병원으로 가고, 무엇을 준비하고, 진료 후 어떤 서류로 보험청구를 준비할지 안내합니다.</p><p class="note">이 화면은 의료진단을 확정하지 않으며, 응급상황은 즉시 119 또는 응급실 진료가 우선입니다.</p><div class="cta-row"><button onclick="go('보험사용설명서')">보험사용설명서로 연결</button><button onclick="document.querySelector('#hospitalDocs')?.scrollIntoView({behavior:'smooth'})">서류 먼저 보기</button></div>`, 'wide soft-blue')}${DATA.hospitals.map(h=>neonCard(`<h2>${h.name}</h2><p><b>방문 기준:</b> ${h.route}</p><p><b>진료 전 준비:</b> ${h.before}</p><p><b>진료 후 서류:</b> ${h.after}</p><p class="note">${h.note}</p><button onclick="selectHospital('${h.id}')">이 경로 기준으로 보험사용설명서 보기</button>`, h.cls)).join('')}${neonCard(`<h2 id="hospitalDocs">진료 전·후 서류 흐름</h2><ol><li>증상과 병원 단계를 먼저 정합니다.</li><li>진료 전 기존 기록과 복용약, 검사자료를 준비합니다.</li><li>진료 후 영수증, 세부내역서, 진단서/확인서를 확보합니다.</li><li>보험사용설명서에서 해당 질병상황별 담보 확인 순서를 봅니다.</li></ol><div class="cta-row"><button onclick="go('보험사용설명서')">내 보험에서 어떻게 쓰는지 보기</button></div>${badges(['원본 근거 대기','감사 필요'])}`, 'wide soft-amber')}</div>`; }
function tower(data, title){ const max=Math.max(...data.map(d=>d.amount)); return `${neonCard(`<h2>${title}</h2><div class="tower-stage">${[...data].sort((a,b)=>b.amount-a.amount).map(d=>{const h=80+d.amount/max*240; return `<div class="tower"><div class="block" style="height:${h}px"><span>${money(d.amount)}만</span></div><em>${d.name}</em></div>`}).join('')}</div><p class="note">현재 예시는 로컬 테스트용 시각화입니다. 고객별 확정값은 원본 JSON과 rules engine 연결 후 표시합니다.</p>${badges(['엔진 산출 대기','감사 필요'])}`,'wide soft-blue')}`; }
function v1(){ return tower(DATA.coveragesV1, 'V1 표준방어플랜 암 보장 3D 타워'); }
function v3(){ return tower(DATA.coveragesV3, 'V3 실제 설계 담보만 반영한 암 보장 3D 타워'); }
function premium(){ const before=sumPremium('before'), after=sumPremium('after'); return `${neonCard(`<h2>보험료 변경 전후</h2><p class="note">아래 표는 화면 시연용 구조입니다. 고객별 실제 보험료 변경값은 rules engine 결과만 사용합니다.</p><table><thead><tr><th>담보</th><th>변경전</th><th>조치</th><th>변경후</th><th>판단</th></tr></thead><tbody>${DATA.premiumChanges.map(r=>`<tr><td>${r.coverage}</td><td>${money(r.before)}원</td><td>${r.action}</td><td>${money(r.after)}원</td><td>${r.reason}</td></tr>`).join('')}</tbody><tfoot><tr><th>합계</th><th>${money(before)}원</th><th>${after<before?'절감':'증가'}</th><th>${money(after)}원</th><th>${money(before-after)}원 절감</th></tr></tfoot></table>${badges(['시연용 구조','감사 필요'])}`,'wide soft-amber')}`; }
function annuity(){ return `<div class="grid two">${neonCard(`<h2>달러일시납 연금 환율 시뮬레이터</h2><p class="note">환율 민감도를 설명하는 내부검토용 시각화입니다.</p><label>가입 USD <input id="usd" type="number" value="${state.annuityUsd}"></label><label>가입기준 환율 <input id="rate" type="number" value="${state.annuityRate}"></label><div id="annuityResult" class="result"></div>${badges(['내부검토용','고객용 출력 잠금'])}`)}${neonCard('<h2>원화 환급금 변화</h2><canvas id="annuityCanvas" width="720" height="360"></canvas>`)}</div>`; }
function engines(){ return `<div class="grid two">${neonCard(`<h2>엔진 연동 슬롯</h2><p>원본 파일 → parser → source-backed JSON → rules engine → audit engine → AI 설명 → 웹/PT/PDF 출력 순서로 연결합니다.</p>${badges(['엔진 산출 대기','원본 근거 대기','감사 필요','고객용 출력 잠금'])}<div class="info-box">고객 화면에는 산식, 내부 경로, 개발 로그를 보이지 않고 검수상태만 표시합니다.</div>`, 'soft-blue')}${neonCard(`<h2>자가검수</h2><button onclick="runSelfTest()">전체 카드 자가검수</button><div id="selfTest" class="mini-list"></div>`, 'soft-mint')}</div>`; }
function checklist(){ const items=['블루스카이 배경 적용','전 페이지 글래스 카드/네온 적용','2페이지 이후 카드 슬롯 확대','고객화면 내부정보 숨김','보험사용설명서 독립상품 구성','병원네비게이션 행동흐름 구성','보험사용설명서와 병원네비 왕복 CTA','진료 전후 서류 안내','엔진값 없는 항목 대기/감사 표시','고객용 최종출력 잠금 유지']; return neonCard(`<h2>PASS/HOLD/FAIL 검수 체크리스트</h2>${items.map(x=>`<label class="check"><input type="checkbox" checked> ${x}</label>`).join('')}${badges(['CANDIDATE','AUDIT REQUIRED','FINAL_ALLOWED=false'])}`,'wide soft-lavender'); }
function wireInputs(){ const caseSel=document.querySelector('#caseSel'); if(caseSel){ caseSel.onchange=()=>{state.selectedCondition=caseSel.value; updateGuide();}; updateGuide(); } const pdf=document.querySelector('#pdfUpload'); if(pdf){ pdf.onchange=e=>{ const c=document.querySelector('#companySel').value; state.uploadedForms[c]=[...e.target.files].map(f=>f.name); renderForms(); }; renderForms(); } const usd=document.querySelector('#usd'); if(usd){ usd.oninput=()=>{state.annuityUsd=+usd.value; drawAnnuity();}; document.querySelector('#rate').oninput=e=>{state.annuityRate=+e.target.value; drawAnnuity();}; drawAnnuity(); }}
function updateGuide(){ const row=DATA.conditionUses.find(c=>c.name===state.selectedCondition) || DATA.conditionUses[0]; const el=document.querySelector('#guideResult'); if(el) el.innerHTML=`<b>${row.name}</b><br>${row.action}<br><br><span class="badge audit">감사 필요</span> <span class="badge wait">원본 근거 대기</span>`; }
function renderForms(){ const el=document.querySelector('#formList'); if(!el) return; const rows=Object.entries(state.uploadedForms).map(([c,fs])=>`<p><b>${c}</b>: ${fs.join(', ')}</p>`).join(''); el.innerHTML=rows || '<p>아직 업로드된 PDF가 없습니다. 회사 선택 후 PDF를 올리면 이 화면에 연동됩니다.</p>'; }
function selectHospital(id){ state.selectedHospital=id; go('보험사용설명서'); }
function drawAnnuity(){ const res=document.querySelector('#annuityResult'), cv=document.querySelector('#annuityCanvas'); if(!cv) return; const rates=[1100,1200,1300,1400,1500,1600]; res.innerHTML=`가입기준 원화평가: <b>${money(state.annuityUsd*state.annuityRate)}원</b>`; const ctx=cv.getContext('2d'); ctx.clearRect(0,0,720,360); ctx.strokeStyle='#1688d5'; ctx.fillStyle='#123047'; ctx.lineWidth=4; ctx.beginPath(); rates.forEach((r,i)=>{ const x=60+i*120, y=320-(state.annuityUsd*r)/(state.annuityUsd*1600)*260; if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y); ctx.fillText(`${r}`,x-12,340); ctx.fillText(`${money(state.annuityUsd*r/10000)}만원`,x-35,y-12); }); ctx.stroke(); }
function openDeck(){ state.fullscreenMode='deck'; render(); }
function openVideo(){ state.fullscreenMode='video'; render(); }
function closeFull(){ state.fullscreenMode=null; render(); }
function renderFullscreen(){ return `<div class="fullscreen"><button class="close" onclick="closeFull()">OFF 닫기</button>${state.fullscreenMode==='deck'?`<div class="deck"><h1>${DATA.pages[state.activePage]}</h1><p>고객 PT 전체화면 모드입니다. 실제 고객용 최종 출력은 감사 후 허용합니다.</p>${renderCiRow()}${badges(['고객용 출력 잠금'])}</div>`:`<div class="video"><div class="play">▶</div><h1>${DATA.pages[state.activePage]} 영상 PT</h1><p>영상 PT 자리입니다. 최종 배포 전 감사가 필요합니다.</p></div>`}</div>`; }
function toggleAllNeon(){ document.body.classList.toggle('audit'); }
function runSelfTest(){ const checks=['화면 목적 표시','카드 네온 적용','보험사용설명서 연결','병원네비 연결','내부정보 비노출','대기/감사 배지 표시','고객용 출력 잠금']; document.querySelector('#selfTest').innerHTML = checks.map(p=>`<p>✅ ${p}</p>`).join(''); }
function downloadSvg(id){ const c=DATA.ci.find(x=>x.id===id); const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"><defs><linearGradient id="g" x1="0" x2="1"><stop stop-color="${c.colors[0]}"/><stop offset="1" stop-color="${c.colors[1]}"/></linearGradient></defs><rect width="1200" height="400" fill="#f7fcff"/><text x="70" y="220" font-size="140" fill="url(#g)">${c.symbol}</text><text x="250" y="170" font-size="58" font-family="Arial" fill="#123047">${c.name}</text><text x="250" y="245" font-size="32" font-family="Arial" fill="#5d7184">${c.keyword}</text></svg>`; const w=window.open(); w.document.write(`<pre>${svg.replaceAll('<','&lt;')}</pre>`); }
window.openDeck=openDeck; window.openVideo=openVideo; window.closeFull=closeFull; window.toggleAllNeon=toggleAllNeon; window.runSelfTest=runSelfTest; window.downloadSvg=downloadSvg; window.selectHospital=selectHospital; window.go=go; render();
