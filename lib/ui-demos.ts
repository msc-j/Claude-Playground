export interface UIDemo {
  label: string
  keywords: string[]
  html: string
}

export const UI_DEMOS: UIDemo[] = [
  {
    label: 'Neon Countdown Timer',
    keywords: ['timer', 'countdown', 'clock', 'time'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#020208;font-family:'Orbitron',monospace;overflow:hidden}
.bg{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 60%,#0d0d2e,#020208)}
.grid{position:fixed;inset:0;background-image:linear-gradient(rgba(76,201,240,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(76,201,240,.04) 1px,transparent 1px);background-size:40px 40px}
.wrap{position:relative;text-align:center}
h1{color:#4cc9f0;font-size:13px;letter-spacing:.4em;text-transform:uppercase;margin-bottom:32px;opacity:.7}
.digits{display:flex;gap:8px;align-items:center}
.unit{display:flex;flex-direction:column;align-items:center;gap:8px}
.digit{width:120px;height:130px;background:rgba(76,201,240,.06);border:1px solid rgba(76,201,240,.25);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:80px;font-weight:900;color:#fff;text-shadow:0 0 20px #4cc9f0,0 0 60px #4cc9f040;position:relative;overflow:hidden;transition:all .15s}
.digit::before{content:'';position:absolute;top:0;left:0;right:0;height:50%;background:rgba(255,255,255,.03);border-radius:12px 12px 0 0}
.digit.flash{box-shadow:0 0 30px #f72585,inset 0 0 20px rgba(247,37,133,.2);border-color:#f72585;color:#f72585;text-shadow:0 0 20px #f72585}
.lbl{font-size:10px;letter-spacing:.25em;color:rgba(76,201,240,.5)}
.sep{font-size:72px;font-weight:900;color:rgba(76,201,240,.4);margin-bottom:24px;animation:blink 1s step-end infinite}
@keyframes blink{50%{opacity:0}}
.btn{margin-top:36px;display:flex;gap:12px;justify-content:center}
button{padding:12px 28px;border:1px solid rgba(76,201,240,.4);background:rgba(76,201,240,.08);color:#4cc9f0;font-family:'Orbitron',monospace;font-size:11px;letter-spacing:.2em;border-radius:8px;cursor:pointer;transition:all .2s}
button:hover{background:rgba(76,201,240,.18);box-shadow:0 0 20px rgba(76,201,240,.2)}
button.stop{border-color:rgba(247,37,133,.4);color:#f72585;background:rgba(247,37,133,.06)}
button.stop:hover{background:rgba(247,37,133,.15)}
.progress{width:380px;height:3px;background:rgba(76,201,240,.1);border-radius:2px;margin:28px auto 0;overflow:hidden}
.bar{height:100%;background:linear-gradient(90deg,#4cc9f0,#f72585);border-radius:2px;transition:width .9s linear}
</style></head><body>
<div class="bg"></div><div class="grid"></div>
<div class="wrap">
  <h1>Mission Countdown</h1>
  <div class="digits">
    <div class="unit"><div class="digit" id="h">00</div><div class="lbl">HRS</div></div>
    <div class="sep">:</div>
    <div class="unit"><div class="digit" id="m">05</div><div class="lbl">MIN</div></div>
    <div class="sep">:</div>
    <div class="unit"><div class="digit" id="s">00</div><div class="lbl">SEC</div></div>
  </div>
  <div class="progress"><div class="bar" id="bar" style="width:100%"></div></div>
  <div class="btn">
    <button onclick="startStop()" id="btn">▶ START</button>
    <button class="stop" onclick="reset()">↺ RESET</button>
  </div>
</div>
<script>
let total=300,remaining=300,interval=null,running=false;
function pad(n){return String(n).padStart(2,'0')}
function render(){
  let h=Math.floor(remaining/3600),m=Math.floor((remaining%3600)/60),s=remaining%60;
  document.getElementById('h').textContent=pad(h);
  document.getElementById('m').textContent=pad(m);
  document.getElementById('s').textContent=pad(s);
  document.getElementById('bar').style.width=(remaining/total*100)+'%';
}
function flash(){
  document.querySelectorAll('.digit').forEach(d=>{d.classList.add('flash');setTimeout(()=>d.classList.remove('flash'),150)});
}
function startStop(){
  if(running){clearInterval(interval);running=false;document.getElementById('btn').textContent='▶ START';}
  else{
    if(remaining<=0)return;
    running=true;document.getElementById('btn').textContent='⏸ PAUSE';
    interval=setInterval(()=>{remaining--;render();flash();if(remaining<=0){clearInterval(interval);running=false;document.getElementById('btn').textContent='▶ START';}},1000);
  }
}
function reset(){clearInterval(interval);running=false;remaining=total;render();document.getElementById('btn').textContent='▶ START';}
render();
</script></body></html>`,
  },
  {
    label: 'Music Player Card',
    keywords: ['music', 'player', 'song', 'audio', 'vinyl', 'spotify'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a0533,#0a1628,#001a2e);font-family:'Nunito',sans-serif}
.card{width:340px;background:rgba(255,255,255,.06);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.1);border-radius:28px;padding:28px;box-shadow:0 32px 80px rgba(0,0,0,.5)}
.vinyl-wrap{display:flex;justify-content:center;margin-bottom:24px;position:relative}
.vinyl{width:160px;height:160px;border-radius:50%;background:conic-gradient(#1a1a1a 0deg,#2a2a2a 30deg,#111 60deg,#222 90deg,#1a1a1a 120deg,#2a2a2a 150deg,#111 180deg,#222 210deg,#1a1a1a 240deg,#2a2a2a 270deg,#111 300deg,#222 330deg,#1a1a1a 360deg);box-shadow:0 0 40px rgba(247,37,133,.3),0 8px 32px rgba(0,0,0,.6);position:relative;transition:animation .3s}
.vinyl.playing{animation:spin 3s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.vinyl::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;border-radius:50%;background:radial-gradient(circle,#f72585,#7209b7);box-shadow:0 0 16px #f72585}
.vinyl::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:100px;border-radius:50%;border:1px solid rgba(255,255,255,.06)}
.meta{text-align:center;margin-bottom:20px}
.song{font-size:20px;font-weight:800;color:#fff;margin-bottom:4px}
.artist{font-size:13px;color:rgba(255,255,255,.45);font-weight:600;letter-spacing:.05em}
.prog-wrap{margin-bottom:18px}
.prog{height:4px;background:rgba(255,255,255,.1);border-radius:2px;cursor:pointer;position:relative;overflow:hidden}
.prog-fill{height:100%;width:38%;background:linear-gradient(90deg,#f72585,#7209b7);border-radius:2px;transition:width .3s}
.times{display:flex;justify-content:space-between;margin-top:6px;font-size:11px;color:rgba(255,255,255,.3)}
.controls{display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:22px}
.btn{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.4);font-size:18px;transition:all .2s;padding:8px}
.btn:hover{color:#fff;transform:scale(1.1)}
.play{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#f72585,#7209b7);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;color:#fff;box-shadow:0 4px 24px rgba(247,37,133,.4);transition:all .2s}
.play:hover{transform:scale(1.05);box-shadow:0 6px 32px rgba(247,37,133,.5)}
.vol{display:flex;align-items:center;gap:10px}
.vol-icon{font-size:14px;color:rgba(255,255,255,.3)}
.vol-bar{flex:1;height:3px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden}
.vol-fill{height:100%;width:70%;background:rgba(255,255,255,.3);border-radius:2px}
</style></head><body>
<div class="card">
  <div class="vinyl-wrap"><div class="vinyl" id="vinyl"></div></div>
  <div class="meta">
    <div class="song">Neon Frequencies</div>
    <div class="artist">AXIOM feat. Luna Sky</div>
  </div>
  <div class="prog-wrap">
    <div class="prog"><div class="prog-fill" id="prog"></div></div>
    <div class="times"><span id="cur">1:22</span><span>3:47</span></div>
  </div>
  <div class="controls">
    <button class="btn" onclick="prev()">⏮</button>
    <button class="btn">🔀</button>
    <button class="play" id="playBtn" onclick="togglePlay()">▶</button>
    <button class="btn">🔁</button>
    <button class="btn" onclick="next()">⏭</button>
  </div>
  <div class="vol">
    <span class="vol-icon">🔉</span>
    <div class="vol-bar"><div class="vol-fill"></div></div>
    <span class="vol-icon">🔊</span>
  </div>
</div>
<script>
let playing=false,progress=38,interval=null;
const songs=[['Neon Frequencies','AXIOM feat. Luna Sky'],['Electric Dreams','Synthwave Collective'],['Midnight Protocol','DJ Chrono'],['Parallel Lines','The Void'],['Signal Lost','Echo Chamber']];
let si=0;
function togglePlay(){
  playing=!playing;
  document.getElementById('playBtn').textContent=playing?'⏸':'▶';
  document.getElementById('vinyl').className='vinyl'+(playing?' playing':'');
  if(playing){interval=setInterval(tick,300);}else clearInterval(interval);
}
function tick(){progress+=0.4;if(progress>100){progress=0;next();}document.getElementById('prog').style.width=progress+'%';let s=Math.floor(progress/100*227);document.getElementById('cur').textContent=Math.floor(s/60)+':'+(s%60<10?'0':'')+s%60;}
function next(){si=(si+1)%songs.length;load();}function prev(){si=(si-1+songs.length)%songs.length;load();}
function load(){progress=0;document.querySelector('.song').textContent=songs[si][0];document.querySelector('.artist').textContent=songs[si][1];document.getElementById('prog').style.width='0%';}
</script></body></html>`,
  },
  {
    label: 'Weather Widget',
    keywords: ['weather', 'temperature', 'forecast', 'cloud', 'rain', 'sun'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#0f2027,#203a43,#2c5364);font-family:'Plus Jakarta Sans',sans-serif}
.card{width:360px;background:rgba(255,255,255,.08);backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,.12);border-radius:32px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.4)}
.top{padding:32px 28px 24px;background:linear-gradient(135deg,rgba(76,201,240,.15),rgba(114,9,183,.1))}
.location{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.city{font-size:22px;font-weight:700;color:#fff}
.time{font-size:13px;color:rgba(255,255,255,.45)}
.country{font-size:13px;color:rgba(255,255,255,.4);margin-bottom:28px}
.main{display:flex;align-items:center;justify-content:space-between}
.temp-big{font-size:88px;font-weight:300;color:#fff;line-height:1}
.temp-big sup{font-size:36px;vertical-align:super;opacity:.6}
.weather-icon{font-size:72px;filter:drop-shadow(0 4px 20px rgba(76,201,240,.3));animation:float 4s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.desc{font-size:15px;color:rgba(255,255,255,.55);margin-top:8px;font-weight:600;letter-spacing:.03em}
.feels{font-size:12px;color:rgba(255,255,255,.3);margin-top:2px}
.bottom{padding:20px 28px 28px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px}
.stat{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:14px 12px;text-align:center}
.stat-icon{font-size:20px;margin-bottom:6px}
.stat-val{font-size:16px;font-weight:700;color:#fff;margin-bottom:2px}
.stat-lbl{font-size:10px;color:rgba(255,255,255,.35);letter-spacing:.08em;text-transform:uppercase}
.forecast{display:flex;justify-content:space-between;gap:8px}
.day{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:12px 6px;text-align:center}
.day-name{font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
.day-icon{font-size:22px;margin-bottom:8px}
.day-hi{font-size:14px;font-weight:700;color:#fff}
.day-lo{font-size:11px;color:rgba(255,255,255,.3);margin-top:2px}
</style></head><body>
<div class="card">
  <div class="top">
    <div class="location"><span class="city">Tokyo</span><span class="time" id="t"></span></div>
    <div class="country">Japan · Partly Cloudy</div>
    <div class="main">
      <div><div class="temp-big">24<sup>°</sup></div><div class="desc">Partly Cloudy</div><div class="feels">Feels like 26°C</div></div>
      <div class="weather-icon">⛅</div>
    </div>
  </div>
  <div class="bottom">
    <div class="stats">
      <div class="stat"><div class="stat-icon">💧</div><div class="stat-val">68%</div><div class="stat-lbl">Humidity</div></div>
      <div class="stat"><div class="stat-icon">💨</div><div class="stat-val">14km/h</div><div class="stat-lbl">Wind</div></div>
      <div class="stat"><div class="stat-icon">👁</div><div class="stat-val">10km</div><div class="stat-lbl">Visibility</div></div>
    </div>
    <div class="forecast">
      <div class="day"><div class="day-name">Mon</div><div class="day-icon">🌤</div><div class="day-hi">26°</div><div class="day-lo">19°</div></div>
      <div class="day"><div class="day-name">Tue</div><div class="day-icon">🌧</div><div class="day-hi">21°</div><div class="day-lo">16°</div></div>
      <div class="day"><div class="day-name">Wed</div><div class="day-icon">⛈</div><div class="day-hi">18°</div><div class="day-lo">14°</div></div>
      <div class="day"><div class="day-name">Thu</div><div class="day-icon">🌈</div><div class="day-hi">23°</div><div class="day-lo">17°</div></div>
      <div class="day"><div class="day-name">Fri</div><div class="day-icon">☀️</div><div class="day-hi">28°</div><div class="day-lo">21°</div></div>
    </div>
  </div>
</div>
<script>function tick(){let d=new Date();document.getElementById('t').textContent=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});}tick();setInterval(tick,1000);</script>
</body></html>`,
  },
  {
    label: 'Arcade Leaderboard',
    keywords: ['leaderboard', 'arcade', 'score', 'game', 'ranking', 'retro'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323:wght@400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;font-family:'Press Start 2P',monospace;overflow:hidden}
.scanlines{position:fixed;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);pointer-events:none;z-index:10}
.glow{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(0,255,100,.04),transparent 70%);pointer-events:none}
.board{width:440px;border:3px solid #0f0;box-shadow:0 0 40px rgba(0,255,100,.4),inset 0 0 20px rgba(0,255,100,.05);padding:28px 24px;position:relative}
.corner{position:absolute;width:10px;height:10px;border-color:#0f0;border-style:solid}
.corner.tl{top:-3px;left:-3px;border-width:3px 0 0 3px}
.corner.tr{top:-3px;right:-3px;border-width:3px 3px 0 0}
.corner.bl{bottom:-3px;left:-3px;border-width:0 0 3px 3px}
.corner.br{bottom:-3px;right:-3px;border-width:0 3px 3px 0}
.title{text-align:center;margin-bottom:24px}
.t1{color:#ff0;font-size:8px;letter-spacing:.1em;animation:blink 1s step-end infinite}
.t2{color:#0f0;font-size:13px;margin-top:8px;text-shadow:0 0 10px #0f0}
@keyframes blink{50%{opacity:0}}
.row{display:flex;align-items:center;gap:0;margin-bottom:10px;padding:10px 12px;position:relative}
.row.gold{background:rgba(255,215,0,.07);border:1px solid rgba(255,215,0,.25)}
.row.silver{background:rgba(192,192,192,.05);border:1px solid rgba(192,192,192,.15)}
.row.bronze{background:rgba(205,127,50,.05);border:1px solid rgba(205,127,50,.15)}
.row.plain{border:1px solid rgba(0,255,100,.1)}
.rank{width:28px;font-size:9px;color:rgba(0,255,100,.5)}
.rank.r1{color:#ffd700;text-shadow:0 0 8px #ffd700}
.rank.r2{color:#c0c0c0}
.rank.r3{color:#cd7f32}
.avatar{width:28px;height:28px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:16px;margin-right:10px;border:1px solid rgba(0,255,100,.2)}
.name{flex:1;font-size:9px;color:#0f0;text-shadow:0 0 6px rgba(0,255,100,.4)}
.score{font-family:'VT323',monospace;font-size:22px;color:#ff0;text-shadow:0 0 8px rgba(255,255,0,.5);letter-spacing:.05em}
.divider{border:none;border-top:1px solid rgba(0,255,100,.15);margin:14px 0}
.footer{text-align:center;font-size:7px;color:rgba(0,255,100,.35);letter-spacing:.15em;animation:blink 1.5s step-end infinite}
</style></head><body>
<div class="scanlines"></div><div class="glow"></div>
<div class="board">
  <div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div>
  <div class="title"><div class="t1">✦ HIGH SCORES ✦</div><div class="t2">GALAXY BLASTER</div></div>
  <div class="row gold"><span class="rank r1">1ST</span><div class="avatar">🐉</div><span class="name">DRAGONFLY</span><span class="score">9,847,200</span></div>
  <div class="row silver"><span class="rank r2">2ND</span><div class="avatar">👾</div><span class="name">XENO_K</span><span class="score">8,120,500</span></div>
  <div class="row bronze"><span class="rank r3">3RD</span><div class="avatar">🚀</div><span class="name">ASTRO_P</span><span class="score">7,334,100</span></div>
  <hr class="divider">
  <div class="row plain"><span class="rank">4TH</span><div class="avatar">🤖</div><span class="name">MEGABYTE</span><span class="score">5,901,750</span></div>
  <div class="row plain"><span class="rank">5TH</span><div class="avatar">🦊</div><span class="name">FOXFIRE</span><span class="score">4,450,300</span></div>
  <div class="row plain"><span class="rank">6TH</span><div class="avatar">💀</div><span class="name">ECTO</span><span class="score">3,812,000</span></div>
  <div class="row plain"><span class="rank">7TH</span><div class="avatar">⚡</div><span class="name">VOLT_99</span><span class="score">2,200,150</span></div>
  <hr class="divider">
  <div class="footer">INSERT COIN — PRESS START</div>
</div>
</body></html>`,
  },
  {
    label: 'Glassmorphism Dashboard',
    keywords: ['dashboard', 'analytics', 'stats', 'glass', 'data', 'chart'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif;background:linear-gradient(135deg,#667eea 0%,#764ba2 30%,#f093fb 70%,#f5576c 100%);padding:20px}
.dash{width:520px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:rgba(255,255,255,.15);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:20px;box-shadow:0 8px 32px rgba(0,0,0,.15)}
.card.wide{grid-column:1/-1}
.card-label{font-size:11px;font-weight:500;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
.card-val{font-size:36px;font-weight:700;color:#fff;line-height:1}
.card-sub{font-size:12px;color:rgba(255,255,255,.5);margin-top:4px}
.badge{display:inline-block;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600;margin-top:6px}
.up{background:rgba(74,222,128,.2);color:#4ade80}
.down{background:rgba(248,113,113,.2);color:#f87171}
.bar-wrap{display:flex;flex-direction:column;gap:8px;margin-top:4px}
.bar-row{display:flex;flex-direction:column;gap:4px}
.bar-info{display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.6)}
.bar-bg{height:6px;background:rgba(255,255,255,.15);border-radius:3px;overflow:hidden}
.bar-fill{height:100%;border-radius:3px;transition:width 1s ease}
.donut-wrap{display:flex;align-items:center;gap:16px}
svg.donut{transform:rotate(-90deg)}
.donut-legend{display:flex;flex-direction:column;gap:6px}
.leg-row{display:flex;align-items:center;gap:6px;font-size:11px;color:rgba(255,255,255,.7)}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.sparkline{margin-top:8px}
.spark-bars{display:flex;align-items:flex-end;gap:3px;height:40px}
.spark-bar{flex:1;border-radius:3px 3px 0 0;opacity:.8;min-width:0;transition:opacity .2s}
.spark-bar:hover{opacity:1}
</style></head><body>
<div class="dash">
  <div class="card">
    <div class="card-label">Monthly Revenue</div>
    <div class="card-val">$84.2K</div>
    <div class="card-sub">vs $71.1K last month</div>
    <span class="badge up">↑ 18.4%</span>
  </div>
  <div class="card">
    <div class="card-label">Active Users</div>
    <div class="card-val">12,847</div>
    <div class="card-sub">+2,341 this week</div>
    <span class="badge up">↑ 22.3%</span>
  </div>
  <div class="card wide">
    <div class="card-label">Revenue by Channel</div>
    <div class="bar-wrap">
      <div class="bar-row"><div class="bar-info"><span>Direct Sales</span><span>$41.2K</span></div><div class="bar-bg"><div class="bar-fill" style="width:78%;background:linear-gradient(90deg,#fff,rgba(255,255,255,.6))"></div></div></div>
      <div class="bar-row"><div class="bar-info"><span>Subscriptions</span><span>$28.7K</span></div><div class="bar-bg"><div class="bar-fill" style="width:54%;background:linear-gradient(90deg,#f093fb,rgba(240,147,251,.6))"></div></div></div>
      <div class="bar-row"><div class="bar-info"><span>Partnerships</span><span>$14.3K</span></div><div class="bar-bg"><div class="bar-fill" style="width:27%;background:linear-gradient(90deg,#f5576c,rgba(245,87,108,.6))"></div></div></div>
    </div>
  </div>
  <div class="card">
    <div class="card-label">Traffic Sources</div>
    <div class="donut-wrap">
      <svg class="donut" width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="12"/>
        <circle cx="40" cy="40" r="28" fill="none" stroke="#fff" stroke-width="12" stroke-dasharray="70 106" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="28" fill="none" stroke="#f093fb" stroke-width="12" stroke-dasharray="40 136" stroke-dashoffset="-70" stroke-linecap="round"/>
        <circle cx="40" cy="40" r="28" fill="none" stroke="#f5576c" stroke-width="12" stroke-dasharray="26 150" stroke-dashoffset="-110" stroke-linecap="round"/>
      </svg>
      <div class="donut-legend">
        <div class="leg-row"><div class="dot" style="background:#fff"></div>Organic 40%</div>
        <div class="leg-row"><div class="dot" style="background:#f093fb"></div>Social 23%</div>
        <div class="leg-row"><div class="dot" style="background:#f5576c"></div>Referral 15%</div>
        <div class="leg-row"><div class="dot" style="background:rgba(255,255,255,.3)"></div>Other 22%</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-label">Daily Signups</div>
    <div class="card-val" style="font-size:28px">438</div>
    <div class="sparkline">
      <div class="spark-bars" id="bars"></div>
    </div>
  </div>
</div>
<script>
const vals=[180,220,195,280,310,260,340,290,380,420,360,438];
const max=Math.max(...vals);
const c=['rgba(255,255,255,.3)','rgba(255,255,255,.4)','rgba(255,255,255,.35)','rgba(240,147,251,.5)','rgba(240,147,251,.6)','rgba(240,147,251,.5)','rgba(245,87,108,.6)','rgba(245,87,108,.5)','rgba(245,87,108,.7)','rgba(255,255,255,.6)','rgba(255,255,255,.7)','#fff'];
document.getElementById('bars').innerHTML=vals.map((v,i)=>'<div class="spark-bar" style="height:'+(v/max*100)+'%;background:'+c[i]+'" title="'+v+'"></div>').join('');
</script></body></html>`,
  },
  {
    label: 'Kanban Board',
    keywords: ['kanban', 'board', 'task', 'todo', 'project', 'card'],
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0c0c14;font-family:'Syne',sans-serif;padding:20px}
.board{display:flex;gap:16px;max-width:900px;width:100%}
.col{flex:1;min-width:0}
.col-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding:0 4px}
.col-title{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.col-count{font-size:11px;padding:2px 8px;border-radius:20px;font-weight:700}
.col.todo .col-title{color:#e8e8ff}
.col.todo .col-count{background:rgba(232,232,255,.1);color:rgba(232,232,255,.5)}
.col.prog .col-title{color:#4cc9f0}
.col.prog .col-count{background:rgba(76,201,240,.15);color:#4cc9f0}
.col.rev .col-title{color:#f72585}
.col.rev .col-count{background:rgba(247,37,133,.15);color:#f72585}
.col.done .col-title{color:#b5ff39}
.col.done .col-count{background:rgba(181,255,57,.1);color:#b5ff39}
.cards{display:flex;flex-direction:column;gap:10px}
.card{background:#161628;border:1px solid #1e1e3f;border-radius:12px;padding:14px;cursor:pointer;transition:all .2s;position:relative}
.card:hover{transform:translateY(-2px);border-color:rgba(76,201,240,.25);box-shadow:0 8px 24px rgba(0,0,0,.3)}
.card-tag{display:inline-block;font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:2px 7px;border-radius:4px;margin-bottom:8px}
.tag-design{background:rgba(247,37,133,.15);color:#f72585}
.tag-dev{background:rgba(76,201,240,.15);color:#4cc9f0}
.tag-research{background:rgba(181,255,57,.1);color:#b5ff39}
.tag-qa{background:rgba(114,9,183,.2);color:#b388ff}
.card-title{font-size:13px;font-weight:600;color:#e8e8ff;line-height:1.4;margin-bottom:10px}
.card-foot{display:flex;align-items:center;justify-content:space-between}
.avatars{display:flex}
.av{width:22px;height:22px;border-radius:50%;border:2px solid #161628;font-size:12px;display:flex;align-items:center;justify-content:center;margin-left:-6px;background:#1e1e3f}
.av:first-child{margin-left:0}
.prio{font-size:10px;display:flex;align-items:center;gap:3px}
.prio.high{color:#f72585}.prio.med{color:#f59e0b}.prio.low{color:#6b7280}
.bar-col{margin-top:8px}
.prog-bar{height:3px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden}
.prog-fill{height:100%;background:linear-gradient(90deg,#4cc9f0,#b5ff39);border-radius:2px}
.add-btn{width:100%;padding:10px;border:1px dashed rgba(255,255,255,.1);background:none;color:rgba(255,255,255,.2);font-family:'Syne',sans-serif;font-size:12px;border-radius:10px;cursor:pointer;transition:all .2s;margin-top:4px}
.add-btn:hover{border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.4)}
</style></head><body>
<div class="board">
  <div class="col todo">
    <div class="col-head"><span class="col-title">Backlog</span><span class="col-count">4</span></div>
    <div class="cards">
      <div class="card"><div><span class="card-tag tag-research">Research</span></div><div class="card-title">Competitive analysis for Q2 redesign</div><div class="card-foot"><div class="avatars"><div class="av">🧑</div></div><span class="prio high">⬆ High</span></div></div>
      <div class="card"><div><span class="card-tag tag-dev">Dev</span></div><div class="card-title">Set up CI/CD pipeline for mobile</div><div class="card-foot"><div class="avatars"><div class="av">👩</div><div class="av">🧔</div></div><span class="prio med">→ Med</span></div></div>
      <div class="card"><div><span class="card-tag tag-design">Design</span></div><div class="card-title">Onboarding flow wireframes v2</div><div class="card-foot"><div class="avatars"><div class="av">🧑</div></div><span class="prio low">↓ Low</span></div></div>
    </div>
    <button class="add-btn">+ Add card</button>
  </div>
  <div class="col prog">
    <div class="col-head"><span class="col-title">In Progress</span><span class="col-count">3</span></div>
    <div class="cards">
      <div class="card"><div><span class="card-tag tag-dev">Dev</span></div><div class="card-title">API rate limiting & caching layer</div><div class="bar-col"><div class="prog-bar"><div class="prog-fill" style="width:65%"></div></div></div><div class="card-foot" style="margin-top:8px"><div class="avatars"><div class="av">🧔</div><div class="av">👩</div></div><span class="prio high">⬆ High</span></div></div>
      <div class="card"><div><span class="card-tag tag-design">Design</span></div><div class="card-title">Dark mode component library update</div><div class="bar-col"><div class="prog-bar"><div class="prog-fill" style="width:40%"></div></div></div><div class="card-foot" style="margin-top:8px"><div class="avatars"><div class="av">🧑</div></div><span class="prio med">→ Med</span></div></div>
    </div>
    <button class="add-btn">+ Add card</button>
  </div>
  <div class="col rev">
    <div class="col-head"><span class="col-title">Review</span><span class="col-count">2</span></div>
    <div class="cards">
      <div class="card"><div><span class="card-tag tag-qa">QA</span></div><div class="card-title">Payment flow regression testing</div><div class="card-foot"><div class="avatars"><div class="av">👩</div><div class="av">🧑</div></div><span class="prio high">⬆ High</span></div></div>
      <div class="card"><div><span class="card-tag tag-design">Design</span></div><div class="card-title">Landing page hero section refresh</div><div class="card-foot"><div class="avatars"><div class="av">🧑</div></div><span class="prio med">→ Med</span></div></div>
    </div>
    <button class="add-btn">+ Add card</button>
  </div>
  <div class="col done">
    <div class="col-head"><span class="col-title">Done</span><span class="col-count">5</span></div>
    <div class="cards">
      <div class="card" style="opacity:.6"><div><span class="card-tag tag-dev">Dev</span></div><div class="card-title">Auth system migration to OAuth 2.0</div><div class="card-foot"><div class="avatars"><div class="av">🧔</div></div><span class="prio low" style="color:#b5ff39">✓ Done</span></div></div>
      <div class="card" style="opacity:.6"><div><span class="card-tag tag-design">Design</span></div><div class="card-title">Brand refresh — new color system</div><div class="card-foot"><div class="avatars"><div class="av">🧑</div><div class="av">👩</div></div><span class="prio low" style="color:#b5ff39">✓ Done</span></div></div>
    </div>
    <button class="add-btn">+ Add card</button>
  </div>
</div>
</body></html>`,
  },
]

export function findDemo(prompt: string): UIDemo {
  const lower = prompt.toLowerCase()
  for (const demo of UI_DEMOS) {
    if (demo.keywords.some((k) => lower.includes(k))) return demo
  }
  // Default to cycling based on prompt length
  return UI_DEMOS[prompt.length % UI_DEMOS.length]
}
