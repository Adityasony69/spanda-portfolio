/*==============================================
  SPANDA — main.js v2
  Full interactivity: sliding panel, particles,
  portfolio filter, form, counters, etc.
================================================*/

/* ─── PORTFOLIO DATA (7 projects) ────────────── */
const projects = [
  {
    id: 1,
    category: "product",
    name: "Product Skincare Ad",
    desc: "A cinematic 12-second AI-generated product commercial for a luxury skincare serum brand. Every particle, light ray and product reveal crafted entirely in AI.",
    thumb: "",
    video: "assets/videos/skincare.mp4#t=0.5",
    duration: "12 sec",
    workflow: [
      { title: "Brand Brief Analysis", desc: "Deep-dive into brand values, target audience (25–40F), and competitor visual language. Built a mood board of luxury references (La Mer, Chanel, SK-II)." },
      { title: "Scene Architecture", desc: "Mapped 5 key scenes: product hero shot → skin texture close-up → ingredient reveal → transformation sequence → lifestyle finish. Timed to 60s with beat drops." },
      { title: "AI Environment Generation", desc: "Used Midjourney v6 to generate dark void environments with golden particle fields. Iterated 30+ seeds to find the perfect atmospheric backdrop." },
      { title: "Product Integration", desc: "Composited actual product renders into AI scenes using After Effects. Applied AI-upscaling via Topaz Video AI for 4K output consistency." },
      { title: "Color & Light Design", desc: "Custom LUT applied in DaVinci Resolve. Skin tones warmed, product highlights boosted, shadow regions deepened for luxury contrast." },
      { title: "Sound & Music", desc: "Licensed orchestral track layered with ElevenLabs sound effects. Mixed to -14 LUFS for broadcast standard delivery." }
    ],
    prompts: [
      { label: "Hero Product Shot", text: "luxury skincare serum bottle, floating in dark void, golden particle dust swirling, dramatic side lighting, soft bokeh, cinematic, 8K, ultra photorealistic, dark navy background, product photography" },
      { label: "Particle Environment", text: "abstract dark void, microscopic golden particles floating, soft atmospheric glow, macro photography, depth of field, luxury brand aesthetic, no people" },
      { label: "Skin Texture Close-up", text: "flawless female skin, golden hour glow, micro-texture detail, macro shot, hydration glow, cinematic lighting, Vogue editorial quality, 4K" }
    ],
    tools: ["Midjourney v6", "Runway Gen-3", "After Effects", "DaVinci Resolve", "Topaz Video AI", "ElevenLabs", "Luma Dream Machine"],
    character: {
      used: false,
      note: "This project uses product-only visuals — no recurring character. Brand consistency maintained through color palette locking (#C9A96E gold family) and consistent particle style across all scenes."
    }
  },
  {
    id: 2,
    category: "ugc",
    name: "UGC Video",
    desc: "An authentic-feeling 24-second UGC-style testimonial video for a D2C nutrition brand. AI-crafted to feel real, shot on phone, unfiltered — built to convert on Meta and TikTok.",
    thumb: "",
    video: "assets/videos/ugc.mp4#t=0.5",
    duration: "24 sec",
    workflow: [
      { title: "Platform Research", desc: "Studied top-performing UGC ads in the nutrition niche on Meta Ad Library. Identified key hooks: personal story, result reveal, 'I wish I knew this sooner' format." },
      { title: "Character Creation", desc: "Generated 3 distinct AI personas using Midjourney + face consistency tools. Each persona locked for use across multiple videos (same face, different settings)." },
      { title: "Handheld AI Video", desc: "Used Runway Gen-3 with motion prompts for handheld camera shake and natural movement. Applied film grain and compression artifacts for authentic 'phone camera' feel." },
      { title: "Hook Testing", desc: "Produced 3 different opening hooks for A/B testing. Used AI voiceover (ElevenLabs) to match each character persona's voice and accent." },
      { title: "Caption & Text Overlays", desc: "Added dynamic captions and product callouts in Premiere Pro. Optimized for silent autoplay (89% of Meta views are muted first 3 seconds)." },
      { title: "Platform Formatting", desc: "Delivered 9:16 for TikTok/Reels, 1:1 for Instagram feed, 4:5 for Meta Feed — all in one production run." }
    ],
    prompts: [
      { label: "UGC Character (Persona 1)", text: "young woman, 28 years old, gym fit, casual home setting, holding protein shake, phone selfie perspective, natural morning light, candid expression, real skin texture" },
      { label: "Handheld Camera Motion", text: "Add natural handheld camera motion: slight shake, zoom drift, slight rotation — match authentic phone recording style" },
      { label: "Background (Kitchen)", text: "home kitchen, morning light, slightly messy countertop, authentic lived-in space, warm tones, no studio lighting" }
    ],
    tools: ["Midjourney v6", "Runway Gen-3 Alpha", "ElevenLabs", "CapCut", "Premiere Pro", "Meta Ad Library"],
    character: {
      used: true,
      note: "Character stability achieved via Midjourney 'seed locking' — same seed number + --cref (character reference) flag applied across all frames. Face consistency maintained at 85%+ across 6 different videos using the same character. Voice consistency handled via ElevenLabs voice clone with identical settings per persona."
    }
  },
  {
    id: 3,
    category: "model",
    name: "AI Models",
    desc: "A 10-second AI model campaign showcase for a fashion brand — replacing traditional photoshoots with photorealistic AI models in curated environments. Saved $10,000 in production costs.",
    thumb: "",
    video: "assets/videos/model.mp4#t=0.5",
    duration: "10 sec",
    workflow: [
      { title: "Model Design Brief", desc: "Defined 2 AI models: Model A (South Asian female, 24, editorial look) and Model B (South Asian male, 28, athleisure). Created detailed character sheets." },
      { title: "Character Base Generation", desc: "Used Midjourney v6 with --cref and seed locking to establish consistent faces. 50+ iterations per model to get photorealistic, distinct features that hold across poses." },
      { title: "Scene & Wardrobe Placement", desc: "Generated models wearing actual brand products (digitally composited via Photoshop generative fill) in AI-generated lifestyle environments." },
      { title: "Motion & Animation", desc: "Used Runway Gen-3 to animate still model images — walking, turning, product interaction. Applied smooth interpolation for natural movement." },
      { title: "Post-Production Polish", desc: "Color graded for editorial magazine look. Applied AI face detail enhancement (Magnific AI) for ultra-HD close-up shots." },
      { title: "Multi-Platform Delivery", desc: "Delivered: Instagram carousel (square), Reels (9:16), website hero (16:9), print-ready stills (A3, 300dpi)." }
    ],
    prompts: [
      { label: "Model Base (Female)", text: "South Asian female model, 24 years old, defined cheekbones, editorial eyes, natural makeup, confident expression, fashion photography, Vogue quality, photorealistic, --cref [ref] --cw 80" },
      { label: "Motion Prompt (Walking)", text: "Model walking confidently on rooftop, slow motion, cinematic camera pan, fashion week aesthetic, golden hour, designer outfit, photorealistic video" },
      { label: "Magnific AI Enhancement", text: "Ultra-HD face enhancement, preserve skin pores, enhance eye detail, maintain expression authenticity, 4x upscale" }
    ],
    tools: ["Midjourney v6.1", "Runway Gen-3", "Magnific AI", "Photoshop (Gen Fill)", "DaVinci Resolve", "Topaz Gigapixel"],
    character: {
      used: true,
      note: "Our proprietary character stability system: 1) Base character generated with 50+ seed iterations → seed locked. 2) --cref flag used with 80% character weight for all variations. 3) Positive prompt anchors: specific facial features always mentioned. 4) Negative prompts: 'different person, changed face, inconsistent features'. 5) Manual curation pass — only frames with 90%+ face match used. Result: consistent AI model identity across 40+ scenes."
    }
  },
  {
    id: 4,
    category: "fashion",
    name: "Fashion Brand Film",
    desc: "A 12-second brand film for a sustainable fashion label — sweeping AI environments from lush forests to ocean coastlines, paired with editorial model footage.",
    thumb: "",
    video: "assets/videos/fashon.mp4#t=0.5",
    duration: "12 sec",
    workflow: [
      { title: "Narrative Script", desc: "Wrote 90-second story script: 'From Earth, To Earth.' 3-act structure: Nature origins → Human connection → Brand reveal. Each scene matched to emotional beat of the music." },
      { title: "Environment World-Building", desc: "Generated 6 distinct AI environments: Himalayan forest, Kerala coastline, Rajasthan desert dunes, urban garden, rainy monsoon street, sunrise mountain top." },
      { title: "Model Integration", desc: "AI models placed into environments using consistent character references. Motion generated via Runway for walk-through sequences and fabric flow animations." },
      { title: "Fabric Physics", desc: "Used Kling AI for fabric flow simulation — generating realistic movement of flowing silk and organic cotton in wind and water environments." },
      { title: "Color Journey", desc: "Each environment had a distinct color palette. DaVinci graded a 'color journey' across the film: earth tones → ocean blues → golden sunset. Unified by a warm organic grade." },
      { title: "Original Composition", desc: "Suno AI generated a custom orchestral score with folk fusion elements, then ElevenLabs added ambient sound design layer (wind, water, fabric)." }
    ],
    prompts: [
      { label: "Forest Environment", text: "ancient forest, morning mist, dappled light through bamboo, organic textures, cinematic wide shot, emerald green palette, environmental photography quality" },
      { label: "Fabric Flow", text: "flowing silk saree in ocean breeze, slow motion, fabric texture ultra-detailed, teal and white, against coastal cliff backdrop, high fashion editorial" },
      { label: "Character + Environment", text: "South Asian female model in sustainable linen outfit, standing in Himalayan meadow, natural wind movement, sunrise golden hour, Vogue editorial, cinematic, --cref [char-ref] --cw 75" }
    ],
    tools: ["Midjourney v6", "Kling AI", "Runway Gen-3", "Suno AI", "ElevenLabs", "DaVinci Resolve", "After Effects"],
    character: {
      used: true,
      note: "Fashion films require consistent model appearance across wildly different lighting environments. Solution: generated all character base images under neutral studio lighting first (locked seed + cref), then composited into environment scenes. Lighting adjustment done in post via Runway's 'relighting' feature. Face stability maintained at 88% across all 6 environment types."
    }
  },
  {
    id: 5,
    category: "jewellery",
    name: "Jewellery Commercial",
    desc: "Ultra-luxury 15-second AI jewellery commercial — diamonds, pearls and gold in cinematic macro environments. Designed to compete with Tanishq and CaratLane production quality at 90% lower cost.",
    thumb: "",
    video: "assets/videos/jwellery.mp4#t=0.5",
    duration: "15 sec",
    workflow: [
      { title: "Reference Collection", desc: "Studied Cartier, Tiffany, Tanishq global campaigns. Identified: macro lens shots, dark velvet surfaces, prismatic light refractions, and white glove reveals as key elements." },
      { title: "Product Isolation Shooting", desc: "Client provided high-res product photos. Removed backgrounds in Photoshop, retouched metal and stone surfaces. Created 360° product turntable stills." },
      { title: "Environment Generation", desc: "AI-generated deep navy velvet environments, marble surfaces, and abstract liquid gold backgrounds. Used Midjourney for all backdrop generation." },
      { title: "Diamond Sparkle Simulation", desc: "Used After Effects with optical flares plugin + AI-generated sparkle elements. Composited onto diamond facets for realistic prismatic light refraction." },
      { title: "Camera Reveal Sequence", desc: "Runway Gen-3 used to generate slow orbit camera moves around products. Combined with manually keyframed camera moves in After Effects for hero shots." },
      { title: "Sound & Voiceover", desc: "ElevenLabs voiceover in a deep, warm tone. Orchestral string swell soundtrack from Suno AI. Mixed with ambient sound (velvet, glass, silence)." }
    ],
    prompts: [
      { label: "Jewellery Hero Shot", text: "diamond necklace on dark navy velvet, macro photography, prismatic light refractions, extreme product detail, luxury commercial, 8K, tack sharp, soft bokeh background, Cartier campaign quality" },
      { label: "Gold Pour Environment", text: "liquid gold surface, abstract flowing movement, dark backdrop, rich warm tones, luxury brand background, abstract macro, cinematic" },
      { label: "Light Refraction", text: "diamond sparkle, prismatic rainbow light rays, dark background, extreme macro, facet detail, Tiffany blue glow, photorealistic light physics" }
    ],
    tools: ["Midjourney v6.1", "After Effects + Optical Flares", "Runway Gen-3", "Photoshop", "DaVinci Resolve", "ElevenLabs", "Suno AI"],
    character: {
      used: false,
      note: "Jewellery commercials focus on the product, not a model. Where hands appear for product reveals, we used AI-generated hands with perfect nail/skin consistency. Consistent 'white glove' hands generated using Midjourney with locked seed + 'elegant female hands, white glove, luxury reveal, consistent lighting' anchor prompts."
    }
  },
  {
    id: 6,
    category: "movie",
    name: "That will Never Work movie trailer",
    desc: "A gripping 1-minute 44-second AI-generated movie trailer for an indie sci-fi thriller. Epic action sequences, dramatic score, and cinematic pacing — entirely AI produced.",
    thumb: "",
    video: "assets/videos/movie trailer.mp4#t=0.5",
    duration: "1 min 44 sec",
    workflow: [
      { title: "Script & Story Bible", desc: "Wrote a complete story bible: Eclipse — a sci-fi thriller about a solar scientist who discovers Earth's last sunrise. 3-act trailer structure: setup, rising stakes, climax hook." },
      { title: "Shot List Production", desc: "Created 28-shot list with exact duration per shot, camera movement, mood and dialogue. Mapped against music beats for maximum impact." },
      { title: "Scene Generation (Bulk)", desc: "Generated all 28 scenes in Midjourney (establishing shots) and Runway Gen-3 (motion shots). Maintained consistent visual grammar across all scenes (lens choice, color palette)." },
      { title: "Character Consistency", desc: "Lead character (male protagonist) maintained through 18 scenes with our character stability system. Secondary characters generated with lower consistency requirements." },
      { title: "Cinematic Assembly", desc: "All shots assembled in Premiere Pro with precise cut timing (avg 2.8s/shot for action sequences, 5s+ for dramatic beats). Applied match cuts and J/L cuts for rhythm." },
      { title: "Score & Sound Design", desc: "Custom cinematic score via Suno AI (Hans Zimmer influenced). Added practical sound design layer: explosions, whooshes, heartbeats, silence moments. Mixed at -9 LUFS for theatrical impact." }
    ],
    prompts: [
      { label: "Epic Establishing Shot", text: "aerial view Earth from orbit, solar flare approaching, dramatic scale, IMAX quality, blue and orange, ultra-wide angle, Christopher Nolan cinematic style, 4K" },
      { label: "Hero Character", text: "male scientist protagonist, mid-30s, intense expression, dramatic side lighting, dystopian lab environment, cinematic film grain, shallow depth of field, --cref [char] --cw 85" },
      { label: "Action Sequence", text: "explosive building collapse in slow motion, debris particles, orange fire and blue smoke, IMAX film quality, 120fps feel, dramatic low angle, Hollywood blockbuster" }
    ],
    tools: ["Midjourney v6.1", "Runway Gen-3", "Suno AI", "ElevenLabs", "Premiere Pro", "After Effects", "DaVinci Resolve", "Topaz Video AI"],
    character: {
      used: true,
      note: "Movie trailers demand the highest level of character stability — audiences must believe this is a real film with a real lead. Our method: 1) Character designed across 100+ Midjourney iterations. 2) Seed + cref + detailed physical description always in prompt. 3) All shots lit from consistent left-side key light direction. 4) Similar focal length used (50mm equivalent) across all character shots. 5) Expression range limited to 3 core emotions for consistency. Achieved 91% face match rate across all 18 character shots."
    }
  },
  {
    id: 7,
    category: "tech",
    name: "Tech Education Series",
    desc: "A consistent-character AI educational series intro running 13 seconds — same host persona across all 12 episodes, holographic screen environments, and professional production value.",
    thumb: "",
    video: "assets/videos/tech.mp4#t=0.5",
    duration: "13 sec",
    workflow: [
      { title: "Series Bible & Character Design", desc: "Created complete series bible: TechPulse — AI & Tech explained visually. Host character 'Aryan' — confident tech educator, 30s, minimalist wardrobe. Designed for maximum consistency across 12 episodes." },
      { title: "Character Stability System", desc: "Built a proprietary prompt template with 12 locked parameters for Aryan: face structure, eye color, jawline, skin tone, hair style, posture, wardrobe color, expression range, lighting setup, focal length, background consistency." },
      { title: "Set Design (Holographic Studio)", desc: "Designed a consistent 'holographic studio' environment — dark background, floating data screens, teal and blue glow. This set is used across all 12 episodes with minor prop variations." },
      { title: "Bulk Clip Generation", desc: "Generated 15–20 clips per episode using Runway Gen-3. Each clip 3–6 seconds. Aryan prompt template applied to every single generation to maintain character consistency." },
      { title: "Educational Animation", desc: "Topic-specific animated explanations generated using Midjourney for concepts, then animated in After Effects. Code snippets displayed on AI-generated holographic screens." },
      { title: "Voice & Editing", desc: "Aryan's voice cloned via ElevenLabs — consistent across all 12 episodes. Episodes assembled in Premiere Pro with auto-captions, lower thirds and chapter markers for YouTube SEO." }
    ],
    prompts: [
      { label: "Character 'Aryan' — Base Prompt", text: "Male tech educator named Aryan, 32 years old, sharp jawline, dark brown eyes, clean-cut black hair, confident smile, wearing navy blue minimal tshirt, professional but approachable, photorealistic, --seed 847291" },
      { label: "Holographic Studio Set", text: "futuristic dark studio, floating holographic screens with code, teal and blue neon glow, dark grey floor, cinematic lighting, tech educational setting, consistent set design, no clutter" },
      { label: "Teaching Gesture", text: "Aryan explaining concept, hand gesture pointing to floating holographic screen, dynamic pose, engaged expression, same studio background, --cref [aryan-ref] --cw 90 --seed 847291" }
    ],
    tools: ["Midjourney v6.1 (--cref)", "Runway Gen-3", "ElevenLabs (Voice Clone)", "Premiere Pro", "After Effects", "Whisper AI (Captions)", "DaVinci Resolve"],
    character: {
      used: true,
      note: "Character Stability is THE core challenge for episodic AI content. Our TechPulse system: \n\n1. SEED LOCKING — Same Midjourney seed (847291) used for all Aryan generations\n2. CREF SYSTEM — Character reference image passed to every generation (--cref aryan.jpg --cw 90)\n3. PROMPT TEMPLATE — 200-character 'character anchor' prepended to every prompt\n4. VOICE CLONE — ElevenLabs voice model trained on 2 min of reference audio, reused all 12 episodes\n5. WARDROBE BIBLE — Only 3 outfit colors (navy, black, grey) to avoid costume inconsistency\n6. LIGHTING LOCK — All scenes use identical 3-point studio lighting parameters\n\nResult: Aryan appears 95% consistent across 120+ clips in 12 episodes."
    }
  }
];

/* ─── DOM ─────────────────────────────────────── */
const nav        = document.getElementById("mn");
const hambBtn    = document.getElementById("hambBtn");
const mobNav     = document.getElementById("mobNav");
const mobClose   = document.getElementById("mobClose");
const workGrid   = document.getElementById("workGrid");
const slidePanel = document.getElementById("slidePanel");
const spOverlay  = document.getElementById("spOverlay");
const spDrawer   = document.getElementById("spDrawer");
const spClose    = document.getElementById("spClose");
const spVideo    = document.getElementById("spVideo");
const spThumb    = document.getElementById("spThumb");
const spThumbImg = document.getElementById("spThumbImg");
const spPlayBtn  = document.getElementById("spPlayBtn");
const spTitle    = document.getElementById("spTitle");
const spDesc     = document.getElementById("spDesc");
const spCat      = document.getElementById("spCat");
const spDur      = document.getElementById("spDur");
const spNext     = document.getElementById("spNext");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitBtn  = document.getElementById("submitBtn");
const scrollTop  = document.getElementById("scrollTop");

let currentProjectId = null;
let currentFilter = "all";

/* ─── PARTICLES ───────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  function rand(a, b) { return Math.random() * (b - a) + a; }
  function makeP() { return { x: rand(0, W), y: rand(0, H), r: rand(0.4, 1.6), vx: rand(-0.15, 0.15), vy: rand(-0.35, -0.08), alpha: rand(0.2, 0.65) }; }

  function init() { resize(); particles = Array.from({ length: 80 }, makeP); }
  function draw() {
    if (window.innerWidth <= 767) {
      requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,169,110,${p.alpha})`; ctx.fill();
      p.x += p.vx; p.y += p.vy; p.alpha -= 0.0006;
      if (p.alpha <= 0 || p.y < -10) Object.assign(p, makeP(), { y: H + 5, alpha: rand(0.2, 0.65) });
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  init(); draw();
})();

/* ─── NAV SCROLL ──────────────────────────────── */
window.addEventListener("scroll", () => {
  nav.classList.toggle("sc", window.scrollY > 60);
  scrollTop.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });

/* ─── MOBILE NAV ──────────────────────────────── */
hambBtn.addEventListener("click", () => mobNav.classList.add("open"));
mobClose.addEventListener("click", () => mobNav.classList.remove("open"));
mobNav.addEventListener("click", e => { if (e.target === mobNav) mobNav.classList.remove("open"); });
window.closeMobNav = () => mobNav.classList.remove("open");

/* ─── SCROLL TO TOP ───────────────────────────── */
scrollTop && scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ─── PORTFOLIO GRID ──────────────────────────── */
const catLabel = { product:"Product Ad", ugc:"UGC", model:"AI Models", fashion:"Fashion Film", jewellery:"Jewellery", movie:"Movie Trailer", tech:"Tech Series" };

function buildCard(p, idx) {
  const div = document.createElement("div");
  div.className = `pc rv${idx > 0 ? ` d${Math.min(idx % 5 + 1, 5)}` : ""}`;
  div.dataset.category = p.category;
  div.dataset.id = p.id;
  div.setAttribute("tabindex", "0");
  div.setAttribute("role", "button");
  div.setAttribute("aria-label", `View ${p.name}`);

  div.innerHTML = `
    <div class="pt">
      <div class="ptb">
        <video src="${p.video}" class="svc-vid" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()" preload="metadata"></video>
      </div>
      <div class="pov">
        <div class="pcirc">
          <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
        </div>
      </div>
    </div>
    <div class="pi">
      <div class="pcat">${catLabel[p.category] || p.category}</div>
      <div class="pname">${p.name}</div>
      <div class="pdesc">${p.desc.slice(0, 80)}…</div>
    </div>
  `;

  div.addEventListener("click", () => openSlidePanel(p.id));
  div.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSlidePanel(p.id); } });
  return div;
}

function renderGrid(filter) {
  workGrid.innerHTML = "";
  const list = filter === "all" ? projects : projects.filter(p => p.category === filter);
  list.forEach((p, i) => workGrid.appendChild(buildCard(p, i)));
  setTimeout(() => { workGrid.querySelectorAll(".rv").forEach(el => { if (isInView(el)) el.classList.add("vis"); }); observeAll(); }, 60);
}

document.querySelectorAll(".fbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".fbtn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGrid(currentFilter);
  });
});

/* ─── SLIDE PANEL ─────────────────────────────── */
function openSlidePanel(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  currentProjectId = id;

  // Fill basic info
  spCat.textContent = catLabel[p.category] || p.category;
  spDur.textContent = p.duration;
  spTitle.textContent = p.name;
  spDesc.textContent = p.desc;

  // Video / Thumb (Skip thumb, show video directly)
  spThumb.style.display = "none";
  spVideo.style.display = "block";
  spVideo.src = p.video;
  spVideo.play().catch(e => console.log("Autoplay prevented:", e));

  // Workflow
  document.getElementById("workflowSteps").innerHTML = p.workflow.map((s, i) =>
    `<div class="wf-step"><div class="wf-num">${String(i+1).padStart(2,"0")}</div><div class="wf-info"><div class="wf-title">${s.title}</div><div class="wf-desc">${s.desc}</div></div></div>`
  ).join("");

  // Prompts
  document.getElementById("promptBlocks").innerHTML = p.prompts.map(pr =>
    `<div class="prompt-block"><div class="prompt-label">${pr.label}</div><div class="prompt-text">${pr.text}</div></div>`
  ).join("");

  // Tools
  document.getElementById("toolsGrid").innerHTML = p.tools.map(t => `<div class="tool-chip">${t}</div>`).join("");

  // Character
  const c = p.character;
  document.getElementById("charInfo").innerHTML = `
    <div class="char-block">
      <h4>${c.used ? "Character Stability Applied" : "Product-Only Project"}</h4>
      <p style="white-space:pre-line">${c.note}</p>
    </div>
  `;

  // Reset tabs
  document.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
  document.querySelector('.sp-tab[data-tab="workflow"]').classList.add("active");
  document.querySelectorAll(".sp-tab-content").forEach(c => c.classList.add("hidden"));
  document.getElementById("spWorkflow").classList.remove("hidden");

  // Open panel
  slidePanel.classList.add("open");
  document.body.style.overflow = "hidden";
  spDrawer.scrollTop = 0;
}

window.openSlidePanelById = openSlidePanel;

function closeSlidePanel() {
  slidePanel.classList.remove("open");
  document.body.style.overflow = "";
  spVideo.pause && spVideo.pause();
  spVideo.src = "";
  currentProjectId = null;
}

spClose.addEventListener("click", closeSlidePanel);
spOverlay.addEventListener("click", closeSlidePanel);
document.addEventListener("keydown", e => { if (e.key === "Escape" && slidePanel.classList.contains("open")) closeSlidePanel(); });

// Play video when thumb clicked
spPlayBtn.addEventListener("click", () => {
  const p = projects.find(x => x.id === currentProjectId);
  if (!p) return;
  spThumb.style.display = "none";
  spVideo.style.display = "block";
  spVideo.src = p.video;
  spVideo.play().catch(() => {});
});

// Next project
spNext.addEventListener("click", () => {
  const filtered = currentFilter === "all" ? projects : projects.filter(p => p.category === currentFilter);
  const idx = filtered.findIndex(p => p.id === currentProjectId);
  const next = filtered[(idx + 1) % filtered.length];
  if (next) openSlidePanel(next.id);
});

// Tabs
document.querySelectorAll(".sp-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".sp-tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    const tab = btn.dataset.tab;
    document.querySelectorAll(".sp-tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById("sp" + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.remove("hidden");
  });
});

/* ─── CONTACT FORM ────────────────────────────── */
function validateForm() {
  let valid = true;
  const name = document.getElementById("fname");
  const email = document.getElementById("femail");
  const service = document.getElementById("fservice");
  const message = document.getElementById("fmessage");
  [name, email, service, message].forEach(f => f.parentElement.classList.remove("has-error"));

  if (!name.value.trim() || name.value.trim().length < 2) { showErr(name, "errName", "Please enter your name"); valid = false; }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr(email, "errEmail", "Please enter a valid email"); valid = false; }
  if (!service.value) { showErr(service, "errService", "Please select a service"); valid = false; }
  if (!message.value.trim() || message.value.trim().length < 20) { showErr(message, "errMessage", "Please describe your project (min 20 chars)"); valid = false; }
  return valid;
}

function showErr(field, id, msg) {
  field.parentElement.classList.add("has-error");
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

contactForm && contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  if (!validateForm()) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  await new Promise(r => setTimeout(r, 1600));

  // Build WhatsApp message
  const name = document.getElementById("fname").value.trim();
  const email = document.getElementById("femail").value.trim();
  const service = document.getElementById("fservice").value;
  const budget = document.getElementById("fbudget").value;
  const message = document.getElementById("fmessage").value.trim();

  const waMsg = encodeURIComponent(`Hi SPANDA! 🎬\n\n*New Project Brief*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service}${budget ? `\n*Budget:* ${budget}` : ""}\n*Brief:* ${message}`);

  contactForm.querySelectorAll(".form-row,.form-group.full,.form-submit").forEach(el => el.style.display = "none");
  formSuccess.classList.add("show");

  // Auto-open WhatsApp with pre-filled message
  setTimeout(() => { window.open(`https://wa.me/917018651029?text=${waMsg}`, "_blank"); }, 800);
});

/* ─── COUNTER ANIMATION ───────────────────────── */
function animateCount(el, target, dur = 1800) {
  const start = performance.now();
  (function update(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(e * target);
    if (p < 1) requestAnimationFrame(update);
  })(start);
}

/* ─── INTERSECTION OBSERVER ───────────────────── */
function isInView(el) { const r = el.getBoundingClientRect(); return r.top < window.innerHeight * 0.92 && r.bottom > 0; }

function observeAll() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vis");
        // Counter animation
        entry.target.querySelectorAll(".avstat-n").forEach(c => {
          const t = parseInt(c.dataset.target);
          if (t && !c.dataset.counted) { c.dataset.counted = "1"; animateCount(c, t); }
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".rv:not(.vis),.rvl:not(.vis),.rvr:not(.vis)").forEach(el => obs.observe(el));
}

/* ─── PROCESS HOVER ───────────────────────────── */
document.querySelectorAll(".pstep").forEach(s => {
  s.addEventListener("mouseenter", () => { document.querySelectorAll(".pstep").forEach(x => x.classList.remove("act")); s.classList.add("act"); });
});

/* ─── ACTIVE NAV ──────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nlinks a");
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(l => l.classList.toggle("active-nav", l.getAttribute("href") === `#${entry.target.id}`));
  });
}, { threshold: 0.35 }).observe && sections.forEach(s => new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle("active-nav", l.getAttribute("href") === `#${e.target.id}`)); });
}, { threshold: 0.35 }).observe(s));

/* ─── SMOOTH ANCHOR LINKS ─────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const h = a.getAttribute("href");
    if (h === "#") return;
    const t = document.querySelector(h);
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); }
  });
});

/* ─── INIT ─────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("all");
  observeAll();

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".rv:not(.vis),.rvl:not(.vis),.rvr:not(.vis)").forEach(el => { if (isInView(el)) el.classList.add("vis"); });
    document.querySelectorAll(".avstat-n").forEach(c => {
      const t = parseInt(c.dataset.target);
      if (t && !c.dataset.counted && isInView(c)) { c.dataset.counted = "1"; animateCount(c, t); }
    });
  }, { passive: true });

  setTimeout(() => { document.querySelectorAll(".rv,.rvl,.rvr").forEach(el => { if (isInView(el)) el.classList.add("vis"); }); }, 120);
});
