export const DESIGN_DEMOS: Record<string, string> = {
  synthwave: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0d0015;font-family:'Rajdhani',sans-serif;overflow:hidden}
.bg{position:fixed;inset:0;background:linear-gradient(180deg,#0d0015 0%,#1a0033 50%,#2d0050 100%)}
.sun{position:fixed;bottom:30%;left:50%;transform:translateX(-50%);width:260px;height:130px;border-radius:130px 130px 0 0;background:linear-gradient(180deg,#ff6b35,#ff006e);box-shadow:0 0 60px #ff006e,0 0 120px rgba(255,0,110,.4);overflow:hidden}
.sun-lines{position:absolute;bottom:0;left:0;right:0;display:flex;flex-direction:column;gap:12px;padding:10px 0}
.sun-line{height:6px;background:rgba(13,0,21,.9)}
.grid-floor{position:fixed;bottom:0;left:0;right:0;height:50%;perspective:400px;transform-origin:bottom}
.grid-inner{position:absolute;inset:0;background-image:linear-gradient(rgba(255,0,200,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,0,200,.3) 1px,transparent 1px);background-size:50px 50px;transform:rotateX(70deg);transform-origin:bottom}
.card{position:relative;z-index:10;width:340px;background:rgba(20,0,40,.85);border:2px solid #ff006e;border-radius:4px;padding:28px;box-shadow:0 0 30px rgba(255,0,110,.3),0 0 60px rgba(255,0,110,.1),inset 0 0 20px rgba(255,0,110,.05)}
.card::before{content:'';position:absolute;inset:-1px;border:1px solid rgba(0,255,255,.2);border-radius:4px;pointer-events:none}
.badge{display:inline-block;padding:3px 10px;border:1px solid #0ff;color:#0ff;font-family:'Audiowide',monospace;font-size:9px;letter-spacing:.2em;margin-bottom:16px;text-shadow:0 0 8px #0ff;box-shadow:0 0 8px rgba(0,255,255,.2)}
.visual{height:120px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative;overflow:hidden}
.headphones{font-size:72px;filter:drop-shadow(0 0 20px #ff006e) drop-shadow(0 0 40px rgba(255,0,110,.4));animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}
.scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,0,110,.04) 3px,rgba(255,0,110,.04) 4px);pointer-events:none}
.name{font-family:'Audiowide',monospace;font-size:18px;color:#ff006e;text-shadow:0 0 12px #ff006e;letter-spacing:.05em;margin-bottom:4px}
.tagline{font-size:14px;color:rgba(0,255,255,.6);margin-bottom:20px;letter-spacing:.08em}
.row{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.price{font-family:'Audiowide',monospace;font-size:32px;color:#fff;text-shadow:0 0 12px rgba(255,255,255,.5)}
.stars{font-size:14px;color:#ff006e;letter-spacing:1px}
.reviews{font-size:11px;color:rgba(255,255,255,.35);font-family:'Audiowide',monospace;letter-spacing:.1em}
.btn{width:100%;padding:14px;background:linear-gradient(90deg,#ff006e,#7b00ff);border:none;color:#fff;font-family:'Audiowide',monospace;font-size:12px;letter-spacing:.2em;cursor:pointer;border-radius:2px;text-transform:uppercase;box-shadow:0 4px 20px rgba(255,0,110,.4);transition:all .2s;margin-top:4px}
.btn:hover{box-shadow:0 4px 30px rgba(255,0,110,.6);transform:translateY(-1px)}
</style></head><body>
<div class="bg"></div>
<div class="sun"><div class="sun-lines"><div class="sun-line"></div><div class="sun-line"></div><div class="sun-line"></div><div class="sun-line" style="height:9px"></div><div class="sun-line" style="height:12px"></div></div></div>
<div class="grid-floor"><div class="grid-inner"></div></div>
<div class="card">
  <div class="badge">BESTSELLER</div>
  <div class="visual"><div class="headphones">🎧</div><div class="scanline"></div></div>
  <div class="name">COSMIC X</div>
  <div class="tagline">Hear everything. Feel nothing else.</div>
  <div class="row">
    <div class="price">$299</div>
    <div style="text-align:right"><div class="stars">★★★★★</div><div class="reviews">2,847 REVIEWS</div></div>
  </div>
  <button class="btn">ADD TO CART ›</button>
</div>
</body></html>`,

  bauhaus: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f0e8;font-family:'IBM Plex Sans',sans-serif}
.card{width:360px;background:#fff;border:3px solid #000;position:relative;overflow:hidden}
.stripe{position:absolute;top:0;left:0;right:0;height:8px;background:repeating-linear-gradient(90deg,#e63900,#e63900 40px,#000 40px,#000 80px,#ffe135 80px,#ffe135 120px,#003087 120px,#003087 160px)}
.top-block{background:#000;padding:32px 28px 24px;margin-top:8px;position:relative}
.badge-row{display:flex;gap:6px;margin-bottom:18px}
.badge{display:inline-block;padding:4px 10px;font-family:'Black Han Sans',sans-serif;font-size:11px;letter-spacing:.1em}
.badge.red{background:#e63900;color:#fff}
.badge.yellow{background:#ffe135;color:#000}
.visual{display:flex;align-items:center;justify-content:center;height:100px;position:relative}
.circle-big{width:90px;height:90px;border-radius:50%;background:#e63900;display:flex;align-items:center;justify-content:center;font-size:48px;position:relative;z-index:2}
.circle-sm{width:40px;height:40px;border-radius:50%;background:#ffe135;position:absolute;right:60px;top:10px}
.rect{width:70px;height:70px;background:#003087;position:absolute;left:50px;bottom:0;transform:rotate(12deg)}
.product-name{font-family:'Black Han Sans',sans-serif;font-size:28px;color:#fff;letter-spacing:.05em;margin-top:20px;line-height:1}
.product-sub{font-size:12px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.2em;margin-top:4px}
.bottom{padding:24px 28px}
.grid-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
.data-block{border:2px solid #000;padding:12px}
.data-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#888;margin-bottom:4px}
.data-val{font-family:'Black Han Sans',sans-serif;font-size:24px;color:#000}
.data-sub{font-size:10px;color:#888;margin-top:2px}
.tagline{border-left:4px solid #e63900;padding-left:12px;font-size:13px;color:#333;margin-bottom:20px;font-style:italic}
.btn{width:100%;padding:16px;background:#000;border:none;color:#fff;font-family:'Black Han Sans',sans-serif;font-size:14px;letter-spacing:.2em;cursor:pointer;text-transform:uppercase;transition:all .15s}
.btn:hover{background:#e63900}
</style></head><body>
<div class="card">
  <div class="stripe"></div>
  <div class="top-block">
    <div class="badge-row"><span class="badge red">BESTSELLER</span><span class="badge yellow">NEW</span></div>
    <div class="visual">
      <div class="rect"></div>
      <div class="circle-sm"></div>
      <div class="circle-big">🎧</div>
    </div>
    <div class="product-name">COSMIC<br>HEADPHONES X</div>
    <div class="product-sub">Premium Audio Experience</div>
  </div>
  <div class="bottom">
    <div class="grid-row">
      <div class="data-block"><div class="data-label">Price</div><div class="data-val">$299</div></div>
      <div class="data-block"><div class="data-label">Rating</div><div class="data-val">4.8★</div><div class="data-sub">2,847 reviews</div></div>
    </div>
    <div class="tagline">"Hear everything. Feel nothing else."</div>
    <button class="btn">Add to Cart →</button>
  </div>
</div>
</body></html>`,

  cottagecore: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f9f3e8;font-family:'Crimson Pro',serif}
.card{width:340px;background:#fffef9;border:1px solid #d4b896;border-radius:4px;padding:32px;box-shadow:0 4px 24px rgba(139,90,43,.1);position:relative}
.floral-top{text-align:center;font-size:22px;letter-spacing:4px;margin-bottom:16px;color:#a0744a}
.badge{display:block;text-align:center;font-family:'Playfair Display',serif;font-style:italic;font-size:12px;color:#a0744a;letter-spacing:.1em;border-top:1px solid #d4b896;border-bottom:1px solid #d4b896;padding:6px;margin-bottom:24px}
.visual{display:flex;justify-content:center;margin-bottom:24px;position:relative}
.wreath{position:relative;width:140px;height:140px;display:flex;align-items:center;justify-content:center}
.wreath::before{content:'🌿🌸🌼🌿🌸🌼🌿🌸';position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:16px;letter-spacing:2px;filter:opacity(.8)}
.headphone-icon{font-size:60px;filter:sepia(.3) drop-shadow(0 4px 8px rgba(139,90,43,.2))}
.divider{text-align:center;font-size:14px;color:#d4b896;letter-spacing:8px;margin-bottom:20px}
.name{font-family:'Playfair Display',serif;font-size:22px;color:#5c3d1e;text-align:center;margin-bottom:6px}
.tagline{font-family:'Playfair Display',serif;font-style:italic;font-size:14px;color:#a0744a;text-align:center;margin-bottom:22px}
.details{background:#fdf5e8;border:1px solid #e8d5b7;border-radius:2px;padding:16px;margin-bottom:20px}
.detail-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px dashed #e8d5b7}
.detail-row:last-child{border-bottom:none;padding-bottom:0}
.detail-label{font-size:12px;color:#a0744a;letter-spacing:.08em;font-style:italic}
.detail-val{font-size:14px;font-weight:600;color:#5c3d1e}
.stars{color:#c9956b;letter-spacing:2px}
.btn{width:100%;padding:14px;background:#a0744a;border:1px solid #8a6038;color:#fff;font-family:'Playfair Display',serif;font-size:14px;letter-spacing:.1em;cursor:pointer;border-radius:2px;transition:all .2s}
.btn:hover{background:#8a6038}
.floral-bottom{text-align:center;font-size:16px;letter-spacing:6px;margin-top:20px;color:#c9a882}
</style></head><body>
<div class="card">
  <div class="floral-top">❧ ✾ ❧</div>
  <div class="badge">✦ Bestseller ✦</div>
  <div class="visual">
    <div class="wreath">
      <div class="headphone-icon">🎧</div>
    </div>
  </div>
  <div class="divider">~ ~ ~</div>
  <div class="name">Cosmic Headphones X</div>
  <div class="tagline">"Hear everything. Feel nothing else."</div>
  <div class="details">
    <div class="detail-row"><span class="detail-label">Price</span><span class="detail-val">$299</span></div>
    <div class="detail-row"><span class="detail-label">Rating</span><span class="detail-val"><span class="stars">★★★★★</span> 4.8</span></div>
    <div class="detail-row"><span class="detail-label">Reviews</span><span class="detail-val">2,847 happy souls</span></div>
  </div>
  <button class="btn">Add to Basket ◦ $299</button>
  <div class="floral-bottom">✿ ❀ ✿</div>
</div>
</body></html>`,

  cyberpunk: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;font-family:'Share Tech Mono',monospace;overflow:hidden}
.noise{position:fixed;inset:0;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");pointer-events:none;z-index:0}
.card{position:relative;z-index:1;width:360px;background:#050505;border:1px solid rgba(255,230,0,.5);padding:0;clip-path:polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px));box-shadow:0 0 30px rgba(255,230,0,.2),inset 0 0 20px rgba(255,0,80,.03)}
.top-bar{background:linear-gradient(90deg,rgba(255,230,0,.15),transparent);padding:10px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,230,0,.2)}
.sys-id{font-size:10px;color:rgba(255,230,0,.6);letter-spacing:.2em}
.status{display:flex;gap:4px}
.dot{width:6px;height:6px;border-radius:50%}
.body{padding:24px 20px}
.glitch{font-family:'Bebas Neue',sans-serif;font-size:44px;color:#ffe600;text-shadow:2px 0 #ff0050,-2px 0 #00fff0;letter-spacing:.05em;line-height:1;animation:glitch 3s infinite}
@keyframes glitch{0%,95%,100%{text-shadow:2px 0 #ff0050,-2px 0 #00fff0}96%{text-shadow:-4px 0 #ff0050,4px 0 #00fff0;transform:translateX(2px)}98%{text-shadow:4px 0 #ff0050,-4px 0 #00fff0;transform:translateX(-2px)}}
.sub{font-size:11px;color:rgba(255,230,0,.4);letter-spacing:.25em;text-transform:uppercase;margin-bottom:20px}
.visual-wrap{height:110px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,230,0,.1);margin-bottom:20px;position:relative;overflow:hidden;background:radial-gradient(circle at 50%,rgba(255,0,80,.08),transparent)}
.visual-wrap::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,230,0,.02) 2px,rgba(255,230,0,.02) 4px)}
.headset{font-size:60px;filter:drop-shadow(0 0 16px #ffe600) drop-shadow(0 0 40px rgba(255,230,0,.4));animation:hflicker 5s infinite}
@keyframes hflicker{0%,99%{opacity:1}100%{opacity:.8}}
.corner-tag{position:absolute;top:6px;right:6px;font-size:9px;color:#00fff0;letter-spacing:.1em}
.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,230,0,.1);border:1px solid rgba(255,230,0,.1);margin-bottom:16px}
.data-cell{background:#050505;padding:12px;position:relative}
.data-cell::before{content:attr(data-label);display:block;font-size:8px;color:rgba(255,230,0,.35);letter-spacing:.2em;text-transform:uppercase;margin-bottom:4px}
.data-val{font-size:20px;color:#ffe600;font-family:'Bebas Neue',sans-serif;letter-spacing:.05em}
.tagline{font-size:11px;color:rgba(255,0,80,.6);letter-spacing:.1em;border-left:2px solid #ff0050;padding-left:10px;margin-bottom:16px}
.btn{width:100%;padding:14px;background:transparent;border:1px solid #ffe600;color:#ffe600;font-family:'Share Tech Mono',monospace;font-size:12px;letter-spacing:.3em;cursor:pointer;text-transform:uppercase;transition:all .2s;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))}
.btn:hover{background:rgba(255,230,0,.1);box-shadow:0 0 20px rgba(255,230,0,.2)}
</style></head><body>
<div class="noise"></div>
<div class="card">
  <div class="top-bar"><span class="sys-id">SYS//PROD-7749</span><div class="status"><div class="dot" style="background:#ff0050"></div><div class="dot" style="background:#ffe600"></div><div class="dot" style="background:#00fff0"></div></div></div>
  <div class="body">
    <div class="glitch">COSMIC X</div>
    <div class="sub">Headphones — Mk.IV</div>
    <div class="visual-wrap"><div class="headset">🎧</div><div class="corner-tag">UNIT_LIVE</div></div>
    <div class="data-grid">
      <div class="data-cell" data-label="Price"><div class="data-val">$299</div></div>
      <div class="data-cell" data-label="Rating"><div class="data-val">4.8★</div></div>
      <div class="data-cell" data-label="Units Sold" style="grid-column:1/-1"><div class="data-val">2,847 Reviews</div></div>
    </div>
    <div class="tagline">HEAR EVERYTHING. FEEL NOTHING ELSE.</div>
    <button class="btn">[ ACQUIRE UNIT ]</button>
  </div>
</div>
</body></html>`,

  memphis: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Righteous&family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#fff5c2;font-family:'DM Sans',sans-serif;overflow:hidden;position:relative}
.shapes{position:fixed;inset:0;pointer-events:none}
.s{position:absolute}
.card{position:relative;z-index:1;width:350px;background:#fff;border:4px solid #000;padding:0;box-shadow:8px 8px 0 #000;border-radius:6px;overflow:hidden}
.header{background:#ff3366;padding:20px 20px 16px;border-bottom:4px solid #000;position:relative}
.header::after{content:'';position:absolute;bottom:0;left:0;right:0;height:4px;background:repeating-linear-gradient(90deg,#000,#000 8px,transparent 8px,transparent 16px)}
.badge-wrap{display:flex;gap:6px;margin-bottom:12px}
.badge{padding:4px 10px;border:2px solid #000;font-family:'Righteous',cursive;font-size:10px;letter-spacing:.1em;background:#ffe135}
.name{font-family:'Righteous',cursive;font-size:26px;color:#fff;text-shadow:3px 3px 0 #000;line-height:1}
.visual-area{background:#e8f4ff;border-bottom:4px solid #000;padding:20px;display:flex;align-items:center;justify-content:center;position:relative;height:130px;overflow:hidden}
.blob{position:absolute;border-radius:50%;border:3px solid #000}
.headphone-big{font-size:72px;position:relative;z-index:1;filter:drop-shadow(3px 3px 0 rgba(0,0,0,.4))}
.body{padding:20px}
.zigzag{height:12px;background:repeating-linear-gradient(90deg,#ff3366,#ff3366 14px,#ffe135 14px,#ffe135 28px,#00c9a7 28px,#00c9a7 42px,#5b6af0 42px,#5b6af0 56px);margin-bottom:16px;border-radius:2px}
.price-row{display:flex;align-items:baseline;gap:12px;margin-bottom:12px}
.price{font-family:'Righteous',cursive;font-size:42px;color:#000;line-height:1}
.price-badge{background:#ffe135;border:2px solid #000;padding:4px 8px;font-size:11px;font-weight:700;border-radius:4px;box-shadow:2px 2px 0 #000}
.tagline{font-size:13px;font-style:italic;color:#333;border-left:4px solid #ff3366;padding-left:10px;margin-bottom:16px}
.stars-row{display:flex;align-items:center;gap:8px;margin-bottom:16px}
.stars{font-size:18px;letter-spacing:2px}
.review-count{font-size:12px;color:#666;font-weight:700}
.btn{width:100%;padding:16px;background:#5b6af0;border:3px solid #000;color:#fff;font-family:'Righteous',cursive;font-size:15px;letter-spacing:.1em;cursor:pointer;box-shadow:4px 4px 0 #000;transition:all .15s;border-radius:4px}
.btn:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #000}
.btn:active{transform:translate(2px,2px);box-shadow:2px 2px 0 #000}
</style></head><body>
<div class="shapes">
  <div class="s" style="top:5%;left:3%;width:40px;height:40px;background:#ff3366;border:3px solid #000;transform:rotate(22deg)"></div>
  <div class="s" style="top:15%;right:5%;width:30px;height:30px;border-radius:50%;background:#ffe135;border:3px solid #000"></div>
  <div class="s" style="top:40%;left:1%;width:0;height:0;border-left:22px solid transparent;border-right:22px solid transparent;border-bottom:38px solid #00c9a7"></div>
  <div class="s" style="bottom:20%;right:3%;width:50px;height:50px;border-radius:50%;background:#5b6af0;border:3px solid #000"></div>
  <div class="s" style="bottom:8%;left:8%;width:35px;height:12px;background:#000;transform:rotate(-30deg)"></div>
  <div class="s" style="top:60%;right:7%;width:20px;height:20px;background:#ff3366;border:2px solid #000;border-radius:50%"></div>
</div>
<div class="card">
  <div class="header">
    <div class="badge-wrap"><span class="badge">⭐ BESTSELLER</span></div>
    <div class="name">COSMIC<br>HEADPHONES X</div>
  </div>
  <div class="visual-area">
    <div class="blob" style="width:80px;height:80px;background:#ffe135;top:15px;left:20px"></div>
    <div class="blob" style="width:50px;height:50px;background:#ff3366;bottom:10px;right:25px"></div>
    <div class="headphone-big">🎧</div>
  </div>
  <div class="body">
    <div class="zigzag"></div>
    <div class="price-row">
      <div class="price">$299</div>
      <div class="price-badge">FREE SHIPPING!</div>
    </div>
    <div class="tagline">"Hear everything. Feel nothing else."</div>
    <div class="stars-row">
      <span class="stars">★★★★★</span>
      <span class="review-count">4.8 · 2,847 reviews</span>
    </div>
    <button class="btn">ADD TO CART →</button>
  </div>
</div>
</body></html>`,

  brutalist: `<!DOCTYPE html><html><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Anton&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f0ece0;font-family:'Space Mono',monospace}
.card{width:380px;border:5px solid #000;background:#f0ece0;position:relative}
.top-stripe{background:#000;padding:10px 20px;display:flex;justify-content:space-between;align-items:center}
.sys{font-size:10px;color:#fff;letter-spacing:.2em}
.badge-raw{background:#fff;color:#000;font-size:10px;font-weight:700;padding:3px 8px;letter-spacing:.1em}
.visual-block{background:#fff;border-bottom:5px solid #000;padding:24px;position:relative;overflow:hidden}
.cross{position:absolute;top:10px;right:10px;font-size:40px;line-height:1;opacity:.08;font-family:'Anton',sans-serif;color:#000}
.big-emoji{font-size:96px;display:block;text-align:center;filter:grayscale(1) contrast(1.3)}
.title-block{background:#000;padding:16px 20px}
.title{font-family:'Anton',sans-serif;font-size:36px;color:#fff;letter-spacing:.03em;line-height:1}
.body{padding:0}
.data-row{display:flex;border-bottom:3px solid #000}
.data-row:last-of-type{border-bottom:none}
.data-cell{flex:1;padding:14px 16px;border-right:3px solid #000}
.data-cell:last-child{border-right:none}
.cell-label{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#555;margin-bottom:4px}
.cell-val{font-family:'Anton',sans-serif;font-size:22px;color:#000}
.tagline-block{background:#f5f5f5;border-top:3px solid #000;border-bottom:3px solid #000;padding:14px 20px}
.tagline{font-size:12px;color:#333;line-height:1.5;letter-spacing:.03em}
.btn{display:block;width:100%;padding:18px 20px;background:#000;border:none;color:#fff;font-family:'Anton',sans-serif;font-size:20px;letter-spacing:.15em;text-align:center;cursor:pointer;transition:background .15s;position:relative;overflow:hidden}
.btn::after{content:'→';position:absolute;right:20px;top:50%;transform:translateY(-50%);transition:right .2s}
.btn:hover{background:#222}
.btn:hover::after{right:14px}
</style></head><body>
<div class="card">
  <div class="top-stripe"><span class="sys">PRODUCT_ID: CMX-7749</span><span class="badge-raw">BESTSELLER</span></div>
  <div class="visual-block"><div class="cross">╳</div><span class="big-emoji">🎧</span></div>
  <div class="title-block"><div class="title">COSMIC<br>HEADPHONES X</div></div>
  <div class="body">
    <div class="data-row">
      <div class="data-cell"><div class="cell-label">Price</div><div class="cell-val">$299</div></div>
      <div class="data-cell"><div class="cell-label">Rating</div><div class="cell-val">4.8 / 5</div></div>
    </div>
    <div class="data-row">
      <div class="data-cell" style="flex:1;border-right:none"><div class="cell-label">Customer Reviews</div><div class="cell-val">2,847</div></div>
    </div>
  </div>
  <div class="tagline-block"><div class="tagline">HEAR EVERYTHING.<br>FEEL NOTHING ELSE.</div></div>
  <button class="btn">ADD TO CART</button>
</div>
</body></html>`,
}
