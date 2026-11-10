/**
 * Three.js 3D Kinetic Galaxy & Holographic Kinetic Core
 * Engineered for Lavanya Mittal's 3D Motion Portfolio
 */

export function initThreeScene(containerId = "canvas3d-container") {
  const container = document.getElementById(containerId);
  if (!container || typeof THREE === "undefined") {
    console.warn("Three.js not loaded or container not found.");
    return;
  }

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth <= 768;

  // Scene & Camera
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060810, 0.028);

  const camera = new THREE.PerspectiveCamera(
    55,
    container.clientWidth / container.clientHeight,
    0.1,
    150
  );
  camera.position.set(0, 0, 15);

  // WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: !isMobile,
    powerPreference: "high-performance"
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Group for root transforms
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // ==========================================
  // 1. PARTICLE COSMOS (NEBULA)
  // ==========================================
  const particleCount = isMobile ? 1200 : 2800;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const originalPositions = new Float32Array(particleCount * 3);

  const colorMint = new THREE.Color("#2dd4bf");
  const colorViolet = new THREE.Color("#a855f7");
  const colorCyan = new THREE.Color("#38bdf8");
  const colorDim = new THREE.Color("#334155");

  for (let i = 0; i < particleCount; i++) {
    // Spherical distribution with logarithmic radial falloff
    const radius = 5.5 + Math.pow(Math.random(), 1.5) * 16;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    originalPositions[i * 3] = x;
    originalPositions[i * 3 + 1] = y;
    originalPositions[i * 3 + 2] = z;

    const rand = Math.random();
    let pickedColor;
    if (rand < 0.40) pickedColor = colorMint;
    else if (rand < 0.75) pickedColor = colorViolet;
    else if (rand < 0.90) pickedColor = colorCyan;
    else pickedColor = colorDim;

    colors[i * 3] = pickedColor.r;
    colors[i * 3 + 1] = pickedColor.g;
    colors[i * 3 + 2] = pickedColor.b;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const particleMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.05 : 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  worldGroup.add(particleSystem);

  // ==========================================
  // 2. KINETIC HOLOGRAPHIC CORE ARTIFACT
  // ==========================================
  const coreGroup = new THREE.Group();
  coreGroup.position.set(0, 0.4, 0);
  worldGroup.add(coreGroup);

  // Outer Wireframe Icosahedron
  const icoGeometry = new THREE.IcosahedronGeometry(3.2, 1);
  const icoMaterial = new THREE.MeshBasicMaterial({
    color: 0x2dd4bf,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
  coreGroup.add(icoMesh);

  // Inner Pulsing Octahedron
  const octGeometry = new THREE.OctahedronGeometry(2.1, 0);
  const octMaterial = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const octMesh = new THREE.Mesh(octGeometry, octMaterial);
  coreGroup.add(octMesh);

  // Inner Glowing Core Sphere
  const innerSphereGeo = new THREE.SphereGeometry(1.2, 24, 24);
  const innerSphereMat = new THREE.MeshBasicMaterial({
    color: 0x2dd4bf,
    transparent: true,
    opacity: 0.08
  });
  const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
  coreGroup.add(innerSphere);

  // Orbital Ring 1 (Cyan/Mint)
  const ring1Geo = new THREE.TorusGeometry(4.8, 0.018, 12, 160);
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: 0x2dd4bf,
    transparent: true,
    opacity: 0.45
  });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 2.3;
  coreGroup.add(ring1);

  // Orbital Ring 2 (Violet)
  const ring2Geo = new THREE.TorusGeometry(5.8, 0.015, 12, 160);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.35
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = Math.PI / 1.7;
  ring2.rotation.y = Math.PI / 4;
  coreGroup.add(ring2);

  // Ambient Light
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);

  // Point Light at Core
  const pointLight = new THREE.PointLight(0x2dd4bf, 3, 20);
  pointLight.position.set(0, 0, 0);
  coreGroup.add(pointLight);

  // ==========================================
  // 3. MOUSE INTERACTION & SCROLL DYNAMICS
  // ==========================================
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let scrollProgress = 0;

  const onMouseMove = (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener("mousemove", onMouseMove, { passive: true });

  const onScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Handle Resize
  const onResize = () => {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener("resize", onResize);

  // ==========================================
  // 4. ANIMATION LOOP
  // ==========================================
  const clock = new THREE.Clock();
  let animationFrameId;

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Smooth mouse lerping
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    if (!isReducedMotion) {
      // Rotate kinetic geometries
      icoMesh.rotation.y = elapsed * 0.12;
      icoMesh.rotation.x = elapsed * 0.06;

      octMesh.rotation.y = -elapsed * 0.18;
      octMesh.rotation.z = elapsed * 0.09;

      ring1.rotation.z = elapsed * 0.07;
      ring2.rotation.z = -elapsed * 0.05;

      // Pulse core breathing
      const pulse = 1 + Math.sin(elapsed * 1.5) * 0.08;
      innerSphere.scale.set(pulse, pulse, pulse);
      pointLight.intensity = 2.5 + Math.sin(elapsed * 2) * 1.2;

      // Particle system gentle orbit & reaction to mouse
      particleSystem.rotation.y = elapsed * 0.03 + mouseX * 0.2;
      particleSystem.rotation.x = mouseY * 0.15;

      // Core orientation following mouse subtly
      coreGroup.rotation.y = mouseX * 0.4;
      coreGroup.rotation.x = -mouseY * 0.3;

      // Scroll-driven camera displacement
      const scrollYOffset = scrollProgress * 10;
      camera.position.z = 15 + scrollProgress * 6;
      camera.position.y = -scrollYOffset * 0.5 - mouseY * 0.8;
      camera.position.x = Math.sin(scrollProgress * Math.PI) * 2 + mouseX * 1.2;
      camera.lookAt(0, -scrollYOffset * 0.3, 0);
    }

    renderer.render(scene, camera);
  };

  animate();

  // Cleanup handler
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    if (renderer.domElement && container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    renderer.dispose();
  };
}
