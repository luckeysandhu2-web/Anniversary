const relationshipStartDate = "2025-07-28T00:00:00";

const SURPRISE_PASSWORD = "thedribblescafe07082025";

const galleryPhotos = [
  { src: "Love.jpg", caption: "Add a caption here", date: "16th November 2025" },
  { src: "Love1.jpg", caption: "Add a caption here", date: "15th January 2026" },
  { src: "Love2.jpg", caption: "Add a caption here", date: "1st November 2025" },
  { src: "Love3.jpg", caption: "Add a caption here", date: "1st November 2025" },
  { src: "Love4.jpg", caption: "Add a caption here", date: "1st November 2025" },
  { src: "Love5.jpg", caption: "Add a caption here", date: "1st November 2025" },
  { src: "Love6.jpg", caption: "Add a caption here", date: "16th November 2025" },
  { src: "Love7.jpeg", caption: "Add a caption here", date: "15th January 2026" },
  { src: "Love8.jpeg", caption: "Add a caption here", date: "21st May 2026" },
  { src: "Love9.jpeg", caption: "Add a caption here", date: "21st May 2026" },
  { src: "Love10.jpg", caption: "Add a caption here", date: "21st March 2026" },
];

const videoMemories = [
  { title: "Our First Dance", date: "16th November 2025", src: "Dance1.mp4", poster: "Dance2.png" },
  { title: "Mastii", date: "28th February 2026", src: "Uss1.mp4", poster: "Love11.jpeg" },
  { title: "My eyes always love watching you", src: "Uss2.mp4", poster: "Love12.png" },
  { title: "My beautiful princess", src: "Uss3.mp4", poster: "Love13.jpg" },
];

const reasons = [
  "Your smile","Your laugh","Your kindness","Your patience","The way you care",
  "Your hugs","Your voice","Your eyes","Your strength","Your honesty",
  "How you care about me","Your humor","Your ambition","Your softness","Your confidence",
  "How you forgive","Your curiosity","Your warmth","Your stubbornness","Your loyalty",
  "How you live your life freely","Your morning voice","Sometime your bad jokes","Sometime your good jokes","How you say my name",
  "Your hands","Your nature","How you hum without noticing","Your competitiveness","Your softness with kids",
  "How you fight for us","Your taste in music","How you prioritize me","Your bravery","Your gentle scolding",
  "How a hug with you feels like home","How you eat","How i crave for you","How you love me without conditions","How you make me smile on ordinary days",
  "The way how you handle things","How you dream big","Your loyalty to friends","How you love your family","Your protectiveness",
  "How safe I feel with you","Your playful teasing","How you never give up on us","Your calm in chaos","Your chaos in calm",
  "How you say things I need to hear","How you hold my hand","Your walk","Your style","How you dress up for no reason",
  "Your messy hair in the morning","How you get excited about small things","Your big dreams for us","How you play with your hairs","How you notice when I'm off",
  "Your voice notes","How you check in on me","Your honesty even when it's hard","How you never make me feel small","Your patience with my overthinking",
  "How you love without conditions","Your childlike wonder","How seriously you take us","Watching you when you fall asleep","Your laugh when you're truly happy",
  "How you say 'we' instead of 'you' or 'me'","Your trust in me","The way you be childish","Your resilience","How you never stopped choosing me",
  "The way you say goodnight","Your lovely texts","How you remember our special days","When you call my name in anger","How you choose me on the days you are not okayy",
  "Your quiet strength","How you carry stress without complaining","Your generosity","How you give without expecting","Your loyalty when it's inconvenient",
  "How you make me a better person","Your patience teaching me things","Your small gestures","Your support on my worst days","How proud you are of me",
  "Your intelligence","How you challenge me","Your softness underneath toughness","How you control yourself","When you talk about us",
  "How you remember how I like things","Your sense of home","How our silence is comfortable","How you make future plans with certainty","Every single ordinary day with you",
];

const placesData = [
  { pin: "📍", name: "Where We Met", desc: "We met outside Allen, the place where we both chased our dreams, yet somehow remained strangers throughout that journey. It was only when that chapter of our lives was coming to an end that fate finally decided it was our time. Our first meeting happened just as everything else was ending, and in that single moment, an entirely new story began. I still remember the feeling I had when I saw you—it was simple, beautiful, and unlike anything I had ever experienced. Looking back now, I realize that destiny was only waiting for the perfect moment to bring us together. That meeting, became the beginning of the most beautiful chapter of my life, a memory I'll cherish forever." },
  { pin: "☕", name: "Our Favorite Café", desc: "We may not have explored countless cafés together, and maybe we still haven't found one that we can truly call *our favorite*. But if there's one place that will always hold a special corner of my heart, it's the café where we had our very first date.I still remember every little detail of that day—the butterflies in my stomach, the nervous smiles, the excitement of finally being with you, and the happiness that filled every moment we shared. And then came our first kiss... a moment so magical that time itself seemed to pause. It wasn't just a kiss; it was the beginning of a love story I'll cherish forever.No matter how many cafés we visit in the future, none of them will ever replace that first one, because it gave me memories so beautiful that I could never erase them from my heart." },
  { pin: "🌆", name: "Her City", desc: "Rajpura... a city that became special simply because it is home to the love of my life. I've visited your city only once, and even then, it wasn't for sightseeing—it was just to catch a glimpse of you on your birthday. I couldn't hold your hand, I couldn't hug you, and I couldn't even meet you properly. Yet, seeing you from afar filled my heart with a happiness I'll never be able to put into words. That single moment made the entire journey worth it. One day, after we're married, I don't want to visit Rajpura as a guest. I want to walk through every street with you by my side, discover every little corner together, laugh over silly conversations, and create memories in the city that first held you before it held us. So tell me, my love... when that day comes, will you be my guide? Will you show me the Rajpura you grew up in, while I spend my whole life discovering the beautiful soul who calls it home? Because no matter how beautiful the city is, to me, its most beautiful place will always be wherever you are." },
  { pin: "✨", name: "Dream Destination", desc: "There are countless places we dream of exploring together. We imagine spending our honeymoon in the magical streets of Paris, watching sunsets in Bali, getting lost beneath Japan's beautiful cherry blossoms, and creating memories in every corner of the world. But if there's one place that holds our hearts even before we've been there, it's Edinburgh. One day, we'll stand together in Edinburgh, not as two people chasing a dream, but as two souls who made it there together. And I know that no matter how breathtaking the city is, the most beautiful sight I'll ever see will always be you walking beside me. Because every destination becomes my favorite when you're the one I get to share it with." },
];

const dreams = [
  { icon: "✈️", title: "Future Trips", desc: "Paris, Edinburgh, Japan, Leh Ladakh,Disney World and many more." },
  { icon: "🏡", title: "Future Home", desc: "Home isn't a place I dream of; it's the life I dream of building with you." },
  { icon: "💍", title: "Marriage", desc: "One day, I'll stand beside you, not as your boyfriend, but as your husband, and that will be the happiest day of my life." },
  { icon: "📈", title: "Career Goals", desc: "I want to build a successful career, not just for my dreams, but for the beautiful life we’ll create together." },
  { icon: "👨‍👩‍👧", title: "Family Dreams", desc: "I dream of a family where love is endless, smiles are constant, and every day begins and ends with us." },
];

const bucketItems = [
  { label: "Travel whole world together ", done: false },
  { label: "Our first date", done: false},
  { label: "Drink together", done: false},
  { label: "Watch the Northern Lights", done: false },
  { label: "Go camping under real stars", done: false },
  { label: "Take a spontaneous road trip", done: false },
  { label: "Dance together", done: false},
  { label: "Cook a whole meal together, start to finish", done: false },
  { label: "Dance in the rain", done: false },
  { label: "Build a home together", done: false },
  { label: "Visit the mountains", done: false },
  { label: "Watch the sunrise together", done: false },
  { label: "Get married", done: false },
  { label: "Our honeymoon", done: false},
];

const songs = [
  { title: "Humsafar", reason: "Whenever i hear this song with you on meet or calls, i always feel your presence with me.", cover: "Song1.jpg", audio: "Humsafar.mp3" },
  { title: "Leja", reason: "This is one of your favorite songs, while listening to this song i always get a pure feeling for us for our future.", cover: "Song2.jpeg", audio: "Leja.mp3" },
  { title: "Tu Thodi der", reason: "Every time I listen to this song, all I want is to spend more time with you. Even if we've already been together a long time, it still never feels like enough—I just want to be with you a little longer.", cover: "Song3.jpg", audio: "Tu Thodi Der.mp3" },
];

const surprisePhotos = [
  "assets/photos/surprise-01.jpg",
  "assets/photos/surprise-02.jpg",
  "assets/photos/surprise-03.jpg",
  "assets/photos/surprise-04.jpg",
];



document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initSparkleCanvas();
  initNavbar();
  initThemeToggle();
  initMusicToggle();
  initCounter();
  initScrollReveal();``
  renderGallery();
  initLightbox();
  renderVideos();
  initVideoModal();
  initLetter();
  renderReasons();
  renderPlaces();
  renderDreams();
  renderBucketList();
  renderSongs();
  initGiftBox();
  initGuestBook();
  initEndingStars();
});

function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 700);
  });
  // fallback in case 'load' already fired
  setTimeout(() => loader.classList.add("hidden"), 2500);
}

function initSparkleCanvas() {
  const canvas = document.getElementById("sparkle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.documentElement.scrollHeight;
  }
  resize();
  window.addEventListener("resize", () => { resize(); buildParticles(); });

  function buildParticles() {
    const count = Math.min(60, Math.floor((w * h) / 60000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      speed: Math.random() * 0.3 + 0.05,
      drift: Math.random() * 0.6 - 0.3,
      phase: Math.random() * Math.PI * 2,
    }));
  }
  buildParticles();

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function tick(t) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--gold-bright") || "#E4C255";
    particles.forEach((p) => {
      const twinkle = 0.5 + 0.5 * Math.sin(t / 900 + p.phase);
      ctx.globalAlpha = 0.15 + twinkle * 0.35;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (!prefersReduced) {
        p.y -= p.speed;
        p.x += p.drift * 0.05;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- Navbar ---------- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("main .section, .hero");
  const navLinkMap = {};
  document.querySelectorAll(".nav-link").forEach((l) => {
    navLinkMap[l.getAttribute("href").slice(1)] = l;
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
          const link = navLinkMap[entry.target.id];
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  const stored = null; // not using localStorage — see note below
  // Note: we intentionally avoid localStorage here so this preview always
  // renders consistently. Once hosted on your own site, feel free to persist
  // the theme choice with localStorage.setItem('theme', ...).
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  });
}

/* ---------- Music toggle ---------- */
function initMusicToggle() {
  const btn = document.getElementById("musicToggle");
  const audio = document.getElementById("bgMusic");
  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add("playing");
      btn.setAttribute("aria-pressed", "true");
    } else {
      audio.pause();
      btn.classList.remove("playing");
      btn.setAttribute("aria-pressed", "false");
    }
  });
}

/* ---------- Hero live counter ---------- */
function initCounter() {
  const start = new Date(relationshipStartDate).getTime();
  const els = {
    days: document.getElementById("cDays"),
    hours: document.getElementById("cHours"),
    minutes: document.getElementById("cMinutes"),
    seconds: document.getElementById("cSeconds"),
  };
  function tick() {
    const diff = Math.max(0, Date.now() - start);
    const s = Math.floor(diff / 1000);
    els.days.textContent = String(Math.floor(s / 86400)).padStart(3, "0");
    els.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
    els.minutes.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    els.seconds.textContent = String(s % 60).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ---------- Scroll reveal (Intersection Observer) ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => observer.observe(t));
}
// Re-run for elements injected after initial load (gallery, reasons, etc.)
function observeNewReveals(selector) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(selector).forEach((t) => observer.observe(t));
}

/* ---------- Gallery ---------- */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryPhotos
    .map(
      (p, i) => `
    <figure class="gallery-item reveal-up" data-index="${i}">
      <img src="${p.src}" alt="${p.caption}" loading="lazy" onerror="this.closest('.gallery-item').classList.add('img-missing')">
      <span class="img-missing-label">${p.src}</span>
      <div class="gallery-overlay"><span>♥</span></div>
    </figure>`
    )
    .join("");
  grid.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
  });
  observeNewReveals("#galleryGrid .gallery-item");
}

let lightboxIndex = 0;
function initLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => moveLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") moveLightbox(-1);
    if (e.key === "ArrowRight") moveLightbox(1);
  });
}
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
}
function moveLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryPhotos.length) % galleryPhotos.length;
  updateLightbox();
}
function updateLightbox() {
  const p = galleryPhotos[lightboxIndex];
  document.getElementById("lightboxImg").src = p.src;
  document.getElementById("lightboxImg").alt = p.caption;
  document.getElementById("lightboxTitle").textContent = p.caption;
  document.getElementById("lightboxDate").textContent = p.date;
}

/* ---------- Videos ---------- */
function renderVideos() {
  const grid = document.getElementById("videoGrid");
  grid.innerHTML = videoMemories
    .map(
      (v, i) => `
    <article class="video-card reveal-up" data-index="${i}">
      <div class="video-thumb">
        <img src="${v.poster}" alt="${v.title}" loading="lazy" onerror="this.closest('.video-card').classList.add('img-missing')">
        <span class="img-missing-label">${v.poster}</span>
        <div class="video-play"><span>▶</span></div>
      </div>
      <div class="video-info">
        <h3>${v.title}</h3>
        <span>${v.date}</span>
      </div>
    </article>`
    )
    .join("");
  grid.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => openVideoModal(Number(card.dataset.index)));
  });
  observeNewReveals("#videoGrid .video-card");
}

function initVideoModal() {
  document.getElementById("videoModalClose").addEventListener("click", closeVideoModal);
  document.getElementById("videoModal").addEventListener("click", (e) => {
    if (e.target.id === "videoModal") closeVideoModal();
  });
}
function openVideoModal(i) {
  const v = videoMemories[i];
  const player = document.getElementById("videoModalPlayer");
  player.src = v.src;
  player.poster = v.poster;
  document.getElementById("videoModalTitle").textContent = v.title;
  document.getElementById("videoModalDate").textContent = v.date;
  document.getElementById("videoModalDesc").textContent = v.desc;
  document.getElementById("videoModal").classList.add("open");
  document.getElementById("videoModal").setAttribute("aria-hidden", "false");
  player.play().catch(() => {});
}
function closeVideoModal() {
  const player = document.getElementById("videoModalPlayer");
  player.pause();
  player.removeAttribute("src");
  player.load();
  document.getElementById("videoModal").classList.remove("open");
  document.getElementById("videoModal").setAttribute("aria-hidden", "true");
}

/* ---------- Letter typewriter ---------- */
function initLetter() {
  const el = document.getElementById("letterText");
  const full = el.dataset.full;
  let typed = false;

  function type() {
    el.classList.remove("done");
    el.textContent = "";
    let i = 0;
    const speed = 18;
    const interval = setInterval(() => {
      el.textContent = full.slice(0, i);
      i++;
      if (i > full.length) {
        clearInterval(interval);
        el.classList.add("done");
      }
    }, speed);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typed) {
        typed = true;
        type();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(el);

  document.getElementById("letterReplay").addEventListener("click", type);
}

/* ---------- Reasons I love you ---------- */
function renderReasons() {
  const grid = document.getElementById("reasonsGrid");
  grid.innerHTML = reasons
    .map(
      (r, i) => `
    <div class="reason-card reveal-up" style="transition-delay:${(i % 20) * 0.02}s">
      <div class="reason-card-inner">
        <div class="reason-face reason-front">${i + 1}</div>
        <div class="reason-face reason-back">${r}</div>
      </div>
    </div>`
    )
    .join("");
  grid.querySelectorAll(".reason-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
  observeNewReveals("#reasonsGrid .reason-card");
}

/* ---------- Places ---------- */
function renderPlaces() {
  const grid = document.getElementById("placesGrid");
  grid.innerHTML = placesData
    .map(
      (p) => `
    <div class="place-card reveal-up">
      <div class="place-pin">${p.pin}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    </div>`
    )
    .join("");
  observeNewReveals("#placesGrid .place-card");
}

/* ---------- Future dreams ---------- */
function renderDreams() {
  const grid = document.getElementById("dreamsGrid");
  grid.innerHTML = dreams
    .map(
      (d) => `
    <div class="dream-card reveal-up">
      <div class="dream-icon">${d.icon}</div>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </div>`
    )
    .join("");
  observeNewReveals("#dreamsGrid .dream-card");
}

/* ---------- Bucket list ---------- */
function renderBucketList() {
  const list = document.getElementById("bucketList");
  list.innerHTML = bucketItems
    .map(
      (item, i) => `
    <li class="bucket-item reveal-up${item.done ? " done" : ""}" data-index="${i}">
      <span class="bucket-check">✓</span>
      <span class="bucket-label">${item.label}</span>
    </li>`
    )
    .join("");
  list.querySelectorAll(".bucket-item").forEach((li) => {
    li.addEventListener("click", () => toggleBucketItem(li));
  });
  observeNewReveals("#bucketList .bucket-item");
}
function toggleBucketItem(li) {
  const i = Number(li.dataset.index);
  bucketItems[i].done = !bucketItems[i].done;
  // PERSISTENCE: to keep checks after reload once hosted, add here:
  // localStorage.setItem('bucketItems', JSON.stringify(bucketItems));
  li.classList.toggle("done", bucketItems[i].done);
  if (bucketItems[i].done) fireConfetti(li);
}
function fireConfetti(originEl) {
  const rect = originEl.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  canvas.className = "confetti-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const colors = ["#7A2233", "#C98C8C", "#C9A227", "#FFF8F2"];
  const pieces = Array.from({ length: 80 }, () => ({
    x: rect.left + rect.width / 2,
    y: rect.top,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * -8 - 4,
    size: Math.random() * 6 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
  }));
  let frame = 0;
  function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.vy += 0.25;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    frame++;
    if (frame < 90) requestAnimationFrame(anim);
    else canvas.remove();
  }
  anim();
}

/* ---------- Songs ---------- */
function renderSongs() {
  const grid = document.getElementById("songsGrid");
  grid.innerHTML = songs
    .map(
      (s) => `
    <div class="song-card reveal-up">
      <div class="song-cover">
        <img src="${s.cover}" alt="${s.title}" loading="lazy" onerror="this.parentElement.classList.add('img-missing')">
      </div>
      <div class="song-body">
        <h3>${s.title}</h3>
        <p class="song-reason">${s.reason}</p>
        <audio controls preload="none">
          <source src="${s.audio}" type="audio/mpeg">
        </audio>
      </div>
    </div>`
    )
    .join("");
  observeNewReveals("#songsGrid .song-card");
}

/* ---------- Surprise: gift box + password + fireworks ---------- */
function initGiftBox() {
  const box = document.getElementById("giftBox");
  const form = document.getElementById("giftForm");
  const errorEl = document.getElementById("giftError");
  let taps = 0;

  box.addEventListener("click", () => {
    taps++;
    box.style.transform = `scale(${1 + taps * 0.04}) rotate(${taps * 2}deg)`;
    if (taps >= 3) unlockSurprise();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("giftPassword").value.trim();
    if (val === SURPRISE_PASSWORD) {
      errorEl.textContent = "";
      unlockSurprise();
    } else {
      errorEl.textContent = "Not quite — try again.";
    }
  });
}

function unlockSurprise() {
  const box = document.getElementById("giftBox");
  const wrap = document.getElementById("giftWrap");
  const content = document.getElementById("surpriseContent");
  if (content.hidden === false) return; // already open
  box.classList.add("opened");
  setTimeout(() => {
    wrap.querySelector(".gift-form").style.display = "none";
    wrap.querySelector(".gift-hint").style.display = "none";
    wrap.querySelector(".gift-note").style.display = "none";
    content.hidden = false;
    renderSurpriseGallery();
    startFireworks();
    typeSecretMessage();
  }, 500);
}

function renderSurpriseGallery() {
  const grid = document.getElementById("surpriseGallery");
  grid.innerHTML = surprisePhotos
    .map(
      (src) => `<img src="${src}" alt="Surprise memory" loading="lazy" onerror="this.style.display='none'">`
    )
    .join("");
}

function typeSecretMessage() {
  const el = document.getElementById("secretMessage");
  const full = el.dataset.full;
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    el.textContent = full.slice(0, i);
    i++;
    if (i > full.length) clearInterval(interval);
  }, 16);
}

function startFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  canvas.width = canvas.offsetWidth || window.innerWidth;
  canvas.height = 320;
  const ctx = canvas.getContext("2d");
  const colors = ["#7A2233", "#C98C8C", "#C9A227", "#E4C255", "#FFF8F2"];
  let particles = [];

  function burst(x, y) {
    const count = 40;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = Math.random() * 3 + 1.5;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  burst(canvas.width * 0.3, canvas.height * 0.5);
  setTimeout(() => burst(canvas.width * 0.7, canvas.height * 0.4), 400);
  setTimeout(() => burst(canvas.width * 0.5, canvas.height * 0.55), 800);

  let frame = 0;
  function anim() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03;
      p.life--;
      ctx.globalAlpha = Math.max(p.life / 60, 0);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    particles = particles.filter((p) => p.life > 0);
    frame++;
    if (frame < 200) requestAnimationFrame(anim);
  }
  anim();
}

/* ---------- Guest book ---------- */
// In-memory only: entries live for this browser tab/session. Once you host
// this file for real, swap addGuestEntry()'s storage for something durable
// (a small backend, Firebase, a form service, etc.) if you want messages
// from other people to actually persist and be visible to everyone.
let guestEntries = [
];

function initGuestBook() {
  renderGuestEntries();
  document.getElementById("guestForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guestName").value.trim();
    const message = document.getElementById("guestMessage").value.trim();
    if (!name || !message) return;
    guestEntries.unshift({ name, message, liked: false, date: "Just now" });
    e.target.reset();
    renderGuestEntries();
  });
}

function renderGuestEntries() {
  const wrap = document.getElementById("guestEntries");
  wrap.innerHTML = guestEntries
    .map(
      (g, i) => `
    <div class="guest-card reveal-up">
      <div class="guest-card-head"><strong>${escapeHtml(g.name)}</strong><span>${g.date}</span></div>
      <p>${escapeHtml(g.message)}</p>
      <button class="guest-heart${g.liked ? " liked" : ""}" data-index="${i}">♥ ${g.liked ? "Liked" : "Like"}</button>
    </div>`
    )
    .join("");
  wrap.querySelectorAll(".guest-heart").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.index);
      guestEntries[i].liked = !guestEntries[i].liked;
      renderGuestEntries();
    });
  });
  observeNewReveals("#guestEntries .guest-card");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Ending starfield ---------- */
function initEndingStars() {
  const canvas = document.getElementById("endingStars");
  const ctx = canvas.getContext("2d");
  let w, h, stars;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  function tick(t) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#FFF8F2";
    stars.forEach((s) => {
      const tw = 0.4 + 0.6 * Math.sin(t / 800 + s.phase);
      ctx.globalAlpha = tw;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
