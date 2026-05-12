const app=document.querySelector('#app');
const colors=['#ffc400','#126b22','#12a7d6','#9b229e','#43a82b','#f2be00','#8b4a18','#123c78'];
const DATA={
  disease:'cancer',
  customer:[
    {code:'01',name:'일반암 진단금',amount:6000},
    {code:'04',name:'유사암 진단금',amount:1000},
    {code:'05',name:'암 주요치료비',amount:0},
    {code:'06',name:'비급여 암 주요치료비',amount:0},
    {code:'07',name:'암 수술비',amount:300},
    {code:'08',name:'항암 방사선/약물',amount:500}
  ],
  standard:[
    {code:'01',name:'일반암 진단금',amount:100000},
    {code:'06',name:'비급여 암 주요치료비',amount:60000},
    {code:'05',name:'암 주요치료비(수술·약물·방사선)',amount:18000},
    {code:'05-1',name:'유사암 주요치료비',amount:18000},
    {code:'03',name:'5회지급 암진단금(일반·재발·전이)',amount:10000},
    {code:'02',name:'암 호르몬약물치료',amount:5000},
    {code:'04',name:'중입자 방사선',amount:1000},
    {code:'07',name:'암 종합자실',amount:3000}
  ],
  iron:[
    {code:'06-S',name:'흥국 리셋월릿 II',amount:100000},
    {code:'06',name:'비급여 암 주요치료비',amount:90000},
    {code:'01',name:'일반암 진단금',amount:100000},
    {code:'05',name:'암 주요치료비',amount:60000},
    {code:'03',name:'전이·재발 진단금',amount:30000},
    {code:'04',name:'유사암 진단금',amount:10000}
  ]
};
let mode='standard', step=999;
const fmt=n=>n>=10000?`${Math.round(n/10000)}억`:`${n.toLocaleString()}만`;
const sum=a=>a.reduce((s,x)=>s+x.amount,0);
function sort(a){return [...a].sort((x,y)=>y.amount-x.amount)}
function activeBase(){return mode==='iron'?DATA.iron:DATA.standard}
function status(c,b){const m=b.find(x=>x.code===c.code)||b.find(x=>x.name===c.name);const need=m?m.amount:0;const gap=need-c.amount;return {need,gap,state:gap>0?'부족':gap===0?'충족':'초과'}}
function render(){const base=activeBase();app.innerHTML=`<main class="v2"><header class="v2top"><div><b>JABANG AI FP CENTER</b><h1>암 관련 전체 담보금액 비교 타워</h1><p>고객 가입내역 암 전체 담보와 ${mode==='iron'?'철벽방어':'표준방어'} 암 전체 담보를 누적 세로 타워로 비교합니다.</p></div><div class="topbtns"><button onclick="setDisease('cancer')">암타워</button><button onclick="setDisease('brain')">뇌타워</button><button onclick="setDisease('heart')">심장타워</button><button onclick="setMode('standard')" class="${mode==='standard'?'on':''}">표준방어</button><button onclick="setMode('iron')" class="${mode==='iron'?'on':''}">철벽방어</button></div></header><section class="compare">${tower('고객 가입내역',DATA.customer,'customer')}${tower(mode==='iron'?'철벽방어':'표준방어',base,'base')}</section><section class="controls"><button onclick="prev()">Prev</button><button onclick="next()">Next</button><button onclick="reset()">Reset</button><button onclick="auto()">전체 보기</button><span>담보명은 타워 밖 아래 범례창에만 표시됩니다.</span></section>${legend(DATA.customer,base)}${gapTable(DATA.customer,base)}</main>`}
function tower(title,items,kind){let list=sort(items).filter(x=>x.amount>0);let built=list.slice(0,Math.min(step,list.length));let total=sum(list)||1;return `<article class="towerCard ${kind}"><div class="cardHead"><span>10년 기준 암 관련 전체 담보</span><h2>${title}</h2><strong>${fmt(sum(list))}</strong></div><div class="towerCanvas"><div class="stack">${built.map((x,i)=>seg(x,total,i)).join('')||'<div class="empty">Next를 누르면 큰 금액부터 쌓입니다.</div>'}</div></div></article>`}
function seg(x,total,i){let h=Math.max(28,(x.amount/total)*520);return `<div class="seg" style="height:${h}px;background:${colors[i%colors.length]}"><span>${fmt(x.amount)}</span></div>`}
function legend(customer,base){let c=sort(customer).filter(x=>x.amount>0),b=sort(base).filter(x=>x.amount>0);return `<section class="legendWrap"><div class="legend"><h3>고객 가입내역 담보명칭</h3>${c.map((x,i)=>row(x,i)).join('')}</div><div class="legend"><h3>${mode==='iron'?'철벽방어':'표준방어'} 담보명칭</h3>${b.map((x,i)=>row(x,i)).join('')}</div></section>`}
function row(x,i){return `<div class="lg"><i style="background:${colors[i%colors.length]}"></i><b>${x.code}</b><span>${x.name}</span><em>${fmt(x.amount)}</em></div>`}
function gapTable(c,b){let names=[...new Set([...c.map(x=>x.name),...b.map(x=>x.name)])];let rows=names.map(n=>{let cc=c.find(x=>x.name===n)||{amount:0,code:''};let bb=b.find(x=>x.name===n)||{amount:0,code:''};let gap=bb.amount-cc.amount;return `<tr><td>${bb.code||cc.code}</td><td>${n}</td><td>${fmt(cc.amount)}</td><td>${fmt(bb.amount)}</td><td class="${gap>0?'bad':'ok'}">${gap>0?fmt(gap)+' 부족':gap<0?fmt(-gap)+' 초과':'충족'}</td></tr>`}).join('');return `<section class="neon-card"><h2>고객 가입내역 vs ${mode==='iron'?'철벽방어':'표준방어'} 비교표</h2><table><thead><tr><th>코드</th><th>담보</th><th>고객</th><th>기준</th><th>판정</th></tr></thead><tbody>${rows}</tbody></table></section>`}
function setMode(v){mode=v;step=999;render()}function setDisease(v){alert(v==='cancer'?'암타워 구동':'뇌/심장 엑셀 세팅값 연결 대기');}function next(){step++;render()}function prev(){step=Math.max(0,step-1);render()}function reset(){step=0;render()}function auto(){step=999;render()}
Object.assign(window,{setMode,setDisease,next,prev,reset,auto});render();
