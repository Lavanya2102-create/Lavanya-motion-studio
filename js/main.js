/**
 * Main Application Logic & Interactivity
 * Lavanya Mittal — 3D Motion Portfolio & Animated Gateway Door
 */

import {
  personalInfo,
  stats,
  motionReel,
  projectCategories,
  projects,
  skillsGrouped,
  timeline,
  graphicWorks,
  copywritingPieces,
  certifications
} from "./data.js";

import { sound } from "./audio.js";
import { voiceAgent } from "./voice-agent.js";
import { initThreeScene } from "./three-scene.js";

let scrollRevealObserver = null;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize 3D Three.js Cosmos
  initThreeScene("canvas3d-container");

  // 2. Initialize 3D Vault Entrance Portal Door
  setupVaultDoorEntrance();

  // 3. Initialize AI Voice Agent
  voiceAgent.init();

  // 4. Initialize Custom Cursor
  setupCustomCursor();

  // 5. Audio Mute Toggle Button
  setupAudioControl();

  // 6. Live Dual Timezone Clocks (India & Arizona)
  setupDualClocks();

  // 7. Render Metric Stats
  renderMetrics();

  // 8. Setup Motion Reel Cinema
  setupMotionReel();

  // 9. Render & Setup Projects
  renderProjectFilters();
  renderProjects("All");

  // 10. Render Creative Studio (19 Graphics & 9 Copywriting Works with Images)
  setupCreativeStudio();

  // 11. Render Skills Matrix with Animated Progress
  renderSkillsMatrix();

  // 12. Render Timeline
  renderTimeline();

  // 13. Render & Setup Certifications Vault
  setupCertificationsVault();

  // 14. Setup Contact Form & Copy Email
  setupContactFeatures();

  // 15. Setup 3D Tilt on Hero Avatar
  setupHeroAvatar3DTilt();

  // 16. Smooth Scroll & Active Nav Tracking + Scroll Progress + Scroll Reveal
  setupScrollTracking();
  setupScrollRevealObserver();
  setupScrollProgressLine();
  setupKineticScrollSystem();

  // 17. Portal Door Mouse Parallax (entrance page)
  setupPortalParticleFloat();

  document.body.classList.add("experience-ready");
});

/* ==========================================================================
   3D CYBER VAULT ENTRANCE DOOR & VOICE AGENT TRIGGER
   ========================================================================== */
function setupVaultDoorEntrance() {
  const portal = document.getElementById("gateway-portal");
  const lockBtn = document.getElementById("vault-unlock-trigger");
  const skipBtn = document.getElementById("portal-skip-btn");
  const doorLeft = document.querySelector(".portal-door-left");
  const doorRight = document.querySelector(".portal-door-right");
  if (!portal) return;

  let opened = portal.dataset.opened === "true";
  let mouseParallaxActive = true;

  // Kinetic Mouse Parallax on Blast Doors & Lock Core
  window.addEventListener("mousemove", (e) => {
    if (!mouseParallaxActive || portal.classList.contains("portal-opening")) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    if (doorLeft && doorRight) {
      doorLeft.style.transform = `perspective(1600px) rotateY(${x * -3.5}deg) rotateX(${y * 1.5}deg)`;
      doorRight.style.transform = `perspective(1600px) rotateY(${x * 3.5}deg) rotateX(${y * 1.5}deg)`;
    }
    if (lockBtn) {
      lockBtn.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`;
    }
  }, { passive: true });

  const openDoor = () => {
    if (opened || portal.dataset.opened === "true") return;
    opened = true;
    portal.dataset.opened = "true";
    mouseParallaxActive = false;

    // Reset inline transforms so CSS opening animations execute cleanly
    if (doorLeft) doorLeft.style.transform = "";
    if (doorRight) doorRight.style.transform = "";
    if (lockBtn) lockBtn.style.transform = "";

    // Play gentle ethereal portal unlock audio
    sound.playPortalOpen();

    // A direct user gesture primes the welcome recording before the cinematic delay.
    // This keeps the greeting reliable in browsers with strict autoplay policies.
    voiceAgent.prime();

    // Trigger door opening CSS animations
    portal.classList.add("portal-opening");
    document.body.classList.add("portal-opened");

    // After door swings open, hide portal and activate Voice Agent
    setTimeout(() => {
      portal.classList.add("portal-hidden");
      
      // Voice Agent greets the visitor with natural female voice
      setTimeout(() => {
        voiceAgent.speakIntro();
      }, 350);
    }, 1500);
  };

  // Replaces the lightweight local-file fallback once the full experience has loaded.
  window.__openPortfolio = openDoor;

  if (lockBtn) {
    lockBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openDoor();
    });
    lockBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDoor();
      }
    });
  }

  // Also allow clicking or tapping anywhere on the portal door
  portal.addEventListener("click", openDoor);

  if (skipBtn) {
    skipBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      openDoor();
    });
  }

  window.addEventListener("keydown", (event) => {
    if (!opened && (event.key === "Enter" || event.key === "Escape")) {
      openDoor();
    }
  });
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function setupCustomCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  }, { passive: true });

  const renderCursor = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  // Expand ring on interactive elements
  const addHoverTriggers = () => {
    const targets = document.querySelectorAll("a, button, input, textarea, .tilt-card, .graphic-item-card, .copy-card, .portal-vault-core");
    targets.forEach(el => {
      el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-active");
        sound.playHover();
      });
      el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-active");
      });
      el.addEventListener("click", () => {
        sound.playClick();
      });
    });
  };
  addHoverTriggers();

  // Mutation observer to attach hover sounds to dynamically rendered items
  const observer = new MutationObserver(() => addHoverTriggers());
  observer.observe(document.body, { childList: true, subtree: true });
}

/* ==========================================================================
   AUDIO CONTROLLER
   ========================================================================== */
function setupAudioControl() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (!audioBtn) return;

  const updateBtnState = () => {
    const muted = sound.isMuted();
    audioBtn.innerHTML = muted 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`;
    audioBtn.setAttribute("title", muted ? "Unmute Soft UI Audio" : "Mute Soft UI Audio");
  };

  updateBtnState();

  audioBtn.addEventListener("click", () => {
    sound.toggleMute();
    updateBtnState();
    if (!sound.isMuted()) {
      sound.playSuccess();
    }
  });
}

/* ==========================================================================
   DUAL TIMEZONE HUD CLOCK
   ========================================================================== */
function setupDualClocks() {
  const indiaEl = document.getElementById("hud-clock-india");
  const asuEl = document.getElementById("hud-clock-asu");
  if (!indiaEl || !asuEl) return;

  const tick = () => {
    const now = new Date();
    // India IST
    const indiaTime = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    // Arizona MST (America/Phoenix)
    const asuTime = now.toLocaleTimeString("en-US", {
      timeZone: "America/Phoenix",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    indiaEl.textContent = `PUNJAB [IST] ${indiaTime}`;
    asuEl.textContent = `TEMPE [MST] ${asuTime}`;
  };

  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   HERO AVATAR 3D TILT EFFECT
   ========================================================================== */
function setupHeroAvatar3DTilt() {
  const card = document.querySelector(".hero-visual-card");
  const box = document.querySelector(".avatar-3d-box");
  if (!card || !box) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    box.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}

/* ==========================================================================
   METRICS BANNER
   ========================================================================== */
function renderMetrics() {
  const container = document.getElementById("metrics-container");
  if (!container) return;

  container.innerHTML = stats.map(stat => `
    <div class="metric-item">
      <div class="metric-value gradient-text-mint">${stat.value}</div>
      <div class="metric-label font-mono">${stat.label}</div>
    </div>
  `).join("");
}

/* ==========================================================================
   MOTION REEL CINEMA SHOWCASE
   ========================================================================== */
function setupMotionReel() {
  const video = document.getElementById("cinema-video-player");
  const playOverlay = document.getElementById("cinema-play-overlay");
  if (!video || !playOverlay) return;

  playOverlay.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playOverlay.style.opacity = "0";
      playOverlay.style.pointerEvents = "none";
    } else {
      video.pause();
      playOverlay.style.opacity = "1";
      playOverlay.style.pointerEvents = "auto";
    }
  });

  video.addEventListener("ended", () => {
    playOverlay.style.opacity = "1";
    playOverlay.style.pointerEvents = "auto";
  });
}

/* ==========================================================================
   PROJECTS RENDERING & FILTERING
   ========================================================================== */
function renderProjectFilters() {
  const filterContainer = document.getElementById("project-filters");
  if (!filterContainer) return;

  filterContainer.innerHTML = projectCategories.map((cat, idx) => `
    <button class="filter-tab-btn ${idx === 0 ? "active" : ""}" data-category="${cat}">
      ${cat}
    </button>
  `).join("");

  filterContainer.querySelectorAll(".filter-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterContainer.querySelectorAll(".filter-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderProjects(cat);
      sound.playClick();
    });
  });
}

function renderProjects(category) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = category === "All" 
    ? projects 
    : projects.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="tilt-card" data-project-id="${p.id}">
      <div class="card-media-wrapper">
        <span class="card-category-badge">${p.category}</span>
        <img src="${p.image}" alt="${p.title}" class="card-media-img" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.short}</p>
        <div class="card-tech-pills">
          ${p.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
        <div class="card-actions">
          <button class="text-btn view-case-study-btn" data-id="${p.id}">
            <span>Case Study</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <div class="card-icon-links">
            ${p.codeUrl ? `
              <a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Code on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.21.08 1.85 1.22 1.85 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.3-5.47-5.79 0-1.28.47-2.33 1.23-3.15-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.28-1.52 3.29-1.2 3.29-1.2.65 1.66.24 2.88.12 3.18.77.82 1.23 1.87 1.23 3.15 0 4.5-2.81 5.49-5.49 5.78.43.36.81 1.08.81 2.18 0 1.58-.01 2.85-.01 3.24 0 .32.21.7.83.58C20.57 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>
              </a>` : ""}
            ${p.viewUrl ? `
              <a href="${p.viewUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Open Live Deployment">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Attach 3D Gyroscopic tilt to cards
  setupCardTilts();
  decorateMotionElements(grid);
  observeScrollReveals(grid);

  // Attach case study modal click triggers
  grid.querySelectorAll(".view-case-study-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-id");
      openProjectModal(pid);
    });
  });
}

/* 3D Gyroscopic Card Tilt */
function setupCardTilts() {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotX = ((y - midY) / midY) * -8;
      const rotY = ((x - midX) / midX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

/* ==========================================================================
   PROJECT MODAL POPUP
   ========================================================================== */
function openProjectModal(projectId) {
  const p = projects.find(item => item.id === projectId);
  if (!p) return;

  const overlay = document.getElementById("general-modal-overlay");
  const content = document.getElementById("modal-content-slot");
  if (!overlay || !content) return;

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="card-category-badge" style="position: static; margin-bottom: 0.8rem; display: inline-block;">${p.category}</span>
      <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 700; color: #fff; margin-bottom: 0.8rem;">${p.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6;">${p.description}</p>
    </div>

    <div style="margin-bottom: 1.8rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--glass-border);">
      <img src="${p.image}" alt="${p.title}" style="width: 100%; max-height: 380px; object-fit: cover;">
    </div>

    <div style="margin-bottom: 1.8rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--mint); text-transform: uppercase; margin-bottom: 0.8rem;">Key Architecture & Highlights</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${p.features.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: #cbd5e1; font-size: 0.92rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" stroke-width="2" style="flex-shrink:0; margin-top:2px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${f}</span>
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--violet); text-transform: uppercase; margin-bottom: 0.8rem;">Technologies Employed</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${p.tech.map(t => `<span class="tech-pill" style="font-size: 0.82rem; padding: 0.35rem 0.8rem;">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${p.viewUrl ? `<a href="${p.viewUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">Launch Live Project</a>` : ""}
      ${p.codeUrl ? `<a href="${p.codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">View Source Code</a>` : ""}
    </div>
  `;

  overlay.classList.add("active");
  sound.playModal();
}

/* ==========================================================================
   CREATIVE STUDIO SHOWCASE (ALL 19 GRAPHICS & 9 COPYWRITING WORKS)
   ========================================================================== */
function setupCreativeStudio() {
  const segBtns = document.querySelectorAll(".seg-btn");
  const graphicsView = document.getElementById("creative-graphics-view");
  const copyView = document.getElementById("creative-copy-view");

  // Render Full 19 Graphic Design Posters
  if (graphicsView) {
    graphicsView.innerHTML = graphicWorks.map(g => `
      <div class="graphic-item-card" data-img="${g.image}" data-title="${g.title}" data-desc="${g.description}">
        <img src="${g.image}" alt="${g.title}" class="graphic-thumb" loading="lazy">
        <div class="graphic-overlay">
          <span class="graphic-badge">${g.tag}</span>
          <h4 class="graphic-title">${g.title}</h4>
        </div>
      </div>
    `).join("");

    graphicsView.querySelectorAll(".graphic-item-card").forEach(card => {
      card.addEventListener("click", () => {
        const img = card.getAttribute("data-img");
        const title = card.getAttribute("data-title");
        const desc = card.getAttribute("data-desc");
        openGraphicLightbox(img, title, desc);
      });
    });
  }

  // Render Full 9 Copywriting Pieces WITH Actual Screenshot Images
  if (copyView) {
    copyView.innerHTML = copywritingPieces.map(c => `
      <div class="copy-card" data-img="${c.image}" data-title="${c.title}" data-desc="${c.description}" data-context="${c.context}">
        <div class="copy-thumb-wrapper">
          <img src="${c.image}" alt="${c.title}" class="copy-thumb-img" loading="lazy">
        </div>
        <div class="copy-card-content">
          <span class="card-category-badge" style="position: static; align-self: flex-start;">${c.category}</span>
          <div class="copy-hook">"${c.hook}"</div>
          <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: #fff;">${c.title}</h4>
          <div style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--cyan);">${c.context}</div>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.55;">${c.description}</p>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--mint); display: flex; align-items: center; gap: 0.4rem; border-top: 1px solid var(--glass-border); padding-top: 0.8rem; margin-top: auto;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>${c.metrics}</span>
          </div>
        </div>
      </div>
    `).join("");

    // Clicking copy card opens full image + expanded context
    copyView.querySelectorAll(".copy-card").forEach(card => {
      card.addEventListener("click", () => {
        const img = card.getAttribute("data-img");
        const title = card.getAttribute("data-title");
        const desc = card.getAttribute("data-desc");
        const ctx = card.getAttribute("data-context");
        openGraphicLightbox(img, title, `${ctx} — ${desc}`);
      });
    });
  }

  // Segmented control toggle
  segBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      segBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");

      if (target === "graphics") {
        graphicsView.style.display = "grid";
        copyView.style.display = "none";
      } else {
        graphicsView.style.display = "none";
        copyView.style.display = "grid";
      }
      sound.playClick();
    });
  });
}

function openGraphicLightbox(imgUrl, title, desc) {
  const overlay = document.getElementById("general-modal-overlay");
  const content = document.getElementById("modal-content-slot");
  if (!overlay || !content) return;

  content.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.2rem;">
      <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem;">${title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">${desc}</p>
    </div>
    <div style="display: flex; justify-content: center; max-height: 65vh; overflow: hidden; border-radius: var(--radius-md); border: 1px solid var(--glass-border); background: #000;">
      <img src="${imgUrl}" alt="${title}" style="max-height: 65vh; max-width: 100%; object-fit: contain;">
    </div>
  `;

  overlay.classList.add("active");
  sound.playModal();
}

/* ==========================================================================
   SKILLS MATRIX (BASE44 SCREENSHOT — 9 NUMBERED CARDS WITH PILL BADGES)
   ========================================================================== */
function renderSkillsMatrix() {
  const container = document.getElementById("skills-grid-container");
  if (!container) return;

  container.innerHTML = skillsGrouped.map((cat, idx) => `
    <div class="skill-card-base44 ${cat.accent === "violet" ? "accent-violet" : ""} reveal-on-scroll delay-${(idx % 9) + 1}">
      <div class="skill-card-glow-corner"></div>
      <div class="skill-card-number">${cat.number}</div>
      <div class="skill-card-title">${cat.group}</div>
      <div class="skill-pills-wrap">
        ${cat.items.map(skill => `<span class="skill-pill-badge">${skill}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   SCROLL REVEAL OBSERVER (INTERSECTION-BASED STAGGERED REVEAL)
   ========================================================================== */
function setupScrollRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-on-scroll, .scroll-entry").forEach(el => el.classList.add("revealed"));
    return;
  }

  scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        scrollRevealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  decorateMotionElements(document);
  observeScrollReveals(document);
}

function decorateMotionElements(root = document) {
  const motionTargets = root.querySelectorAll(
    ".tilt-card, .graphic-item-card, .copy-card, .skill-card-base44, .timeline-node, .cert-card"
  );

  motionTargets.forEach((element, index) => {
    element.classList.add("scroll-entry");
    element.style.setProperty("--motion-index", String(index % 6));
  });
}

function observeScrollReveals(root = document) {
  if (!scrollRevealObserver) return;
  root.querySelectorAll(".reveal-on-scroll, .scroll-entry").forEach(element => {
    if (element.dataset.motionObserved === "true") return;
    element.dataset.motionObserved = "true";
    scrollRevealObserver.observe(element);
  });
}

/* ==========================================================================
   TOP SCROLL PROGRESS LINE (THIN GRADIENT BAR ACROSS TOP)
   ========================================================================== */
function setupScrollProgressLine() {
  const progressBar = document.getElementById("scroll-progress-line");
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

/* ==========================================================================
   PORTAL ENTRANCE — FLOATING PARTICLE AMBIENCE
   ========================================================================== */
function setupPortalParticleFloat() {
  const portal = document.getElementById("gateway-portal");
  if (!portal || portal.classList.contains("portal-hidden")) return;

  const particleContainer = document.createElement("div");
  particleContainer.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:3;overflow:hidden;";
  portal.appendChild(particleContainer);

  for (let i = 0; i < 30; i++) {
    const dot = document.createElement("span");
    const size = Math.random() * 3 + 1;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = 6 + Math.random() * 10;
    const delay = Math.random() * 5;
    const color = Math.random() > 0.5 ? "rgba(45,212,191,0.4)" : "rgba(168,85,247,0.35)";
    dot.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${startX}%;top:${startY}%;border-radius:50%;background:${color};box-shadow:0 0 ${size*3}px ${color};opacity:0;animation:portalFloat ${duration}s ${delay}s ease-in-out infinite;`;
    particleContainer.appendChild(dot);
  }

  if (!document.getElementById("portal-float-keyframes")) {
    const style = document.createElement("style");
    style.id = "portal-float-keyframes";
    style.textContent = `
      @keyframes portalFloat {
        0% { opacity:0; transform:translateY(0) translateX(0) scale(0.5); }
        20% { opacity:0.8; }
        50% { transform:translateY(-45px) translateX(20px) scale(1); }
        80% { opacity:0.5; }
        100% { opacity:0; transform:translateY(-80px) translateX(-15px) scale(0.3); }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ==========================================================================
   TIMELINE (EDUCATION & EXPERIENCE)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById("timeline-nodes-container");
  if (!container) return;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-node ${item.type === "education" ? "" : "violet-node"}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header-row">
          <div>
            <h3 class="timeline-title">${item.title}</h3>
            <div class="timeline-org">${item.org} &bull; <span style="color: var(--text-dim);">${item.location}</span></div>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-desc">${item.detail}</p>
        <div style="margin-top: 0.8rem;">
          <span class="tech-pill" style="color: ${item.type === "education" ? "var(--mint)" : "var(--violet)"}; border-color: rgba(255, 255, 255, 0.1);">
            ${item.badge}
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   CERTIFICATIONS VAULT
   ========================================================================== */
function setupCertificationsVault() {
  const searchInput = document.getElementById("cert-search-input");
  const grid = document.getElementById("certifications-grid");
  if (!grid) return;

  const renderCerts = (query = "") => {
    const q = query.toLowerCase().trim();
    const filtered = certifications.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.issuer.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );

    grid.innerHTML = filtered.map(c => `
      <div class="cert-card">
        <div>
          <span class="card-category-badge" style="position: static; display: inline-block; margin-bottom: 0.5rem; font-size: 0.68rem; padding: 0.2rem 0.5rem;">${c.category}</span>
          <h4 class="cert-name">${c.name}</h4>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
        <div>
          ${c.url ? `
            <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="cert-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>View Credential (PDF)</span>
            </a>
          ` : `
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); display: inline-flex; align-items: center; gap: 0.3rem;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Verified Coursework
            </span>
          `}
        </div>
      </div>
    `).join("");

    decorateMotionElements(grid);
    observeScrollReveals(grid);
  };

  renderCerts();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderCerts(e.target.value);
    });
  }
}

/* ==========================================================================
   CONTACT FEATURES & TOAST
   ========================================================================== */
function setupContactFeatures() {
  const copyBtn = document.getElementById("copy-email-btn");
  const form = document.getElementById("portfolio-contact-form");
  const modalClose = document.getElementById("modal-close-btn");
  const modalOverlay = document.getElementById("general-modal-overlay");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(personalInfo.email).then(() => {
        showToast("Email address copied to clipboard!");
        sound.playSuccess();
      });
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const message = document.getElementById("contact-message").value;

      // Construct mailto link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Sender Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      showToast("Thank you! Opening your mail client...");
      sound.playSuccess();
      form.reset();
    });
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById("global-toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ========================================================================
   KINETIC SCROLL ORCHESTRATION
   A single rAF loop drives the ambient depth, section entry rails, and
   intentional navigation behavior without attaching per-card scroll handlers.
   ======================================================================== */
function setupKineticScrollSystem() {
  const root = document.documentElement;
  const stages = document.querySelectorAll(".site-content > section.section-block");
  let lastY = window.scrollY;
  let queued = false;

  const update = () => {
    const currentY = window.scrollY;
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, currentY / maxScroll));
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
    root.style.setProperty("--scroll-glow-y", `${Math.round(progress * 380)}px`);

    if (currentY < 80) {
      document.body.classList.remove("is-scrolling-down", "is-scrolling-up");
    } else if (currentY > lastY) {
      document.body.classList.add("is-scrolling-down");
      document.body.classList.remove("is-scrolling-up");
    } else if (currentY < lastY) {
      document.body.classList.add("is-scrolling-up");
      document.body.classList.remove("is-scrolling-down");
    }

    stages.forEach(stage => {
      const rect = stage.getBoundingClientRect();
      const isInFrame = rect.top < window.innerHeight * 0.78 && rect.bottom > window.innerHeight * 0.22;
      stage.classList.toggle("in-view", isInFrame);
    });

    lastY = currentY;
    queued = false;
  };

  const requestUpdate = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  update();
}

/* ==========================================================================
   SCROLL TRACKING & MOBILE MENU
   ========================================================================== */
function setupScrollTracking() {
  const navLinks = document.querySelectorAll(".nav-link-btn");
  const sections = document.querySelectorAll("section[id]");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  window.addEventListener("scroll", () => {
    let currentId = "home";
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, { passive: true });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.style.display === "flex";
      mobileDrawer.style.display = isOpen ? "none" : "flex";
      sound.playClick();
    });

    mobileDrawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
      });
    });
  }
}
