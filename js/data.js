/**
 * Lavanya Mittal Portfolio Data
 * Extracted and enhanced from https://lavanya-motion-studio.base44.app
 */

export const personalInfo = {
  name: "Lavanya Mittal",
  firstName: "Lavanya",
  role: "Computer Science Student | Web Developer | AI & Motion Technologist",
  tagline: "Building user-focused digital experiences at the intersection of software, AI, and creative media.",
  intro: "Computer Science and Engineering student pursuing an international dual degree from Chitkara University (India) and Arizona State University (USA), passionate about full-stack web development, AI systems, embedded IoT, and cinematic motion design.",
  philosophy: "Computer Science isn't just a field — it's a way to think critically, create meaningfully, and contribute purposefully.",
  photo: "https://media.base44.com/images/public/6ad0ea288b43c5e8fd4883bc/e4b141cfa_WhatsAppImage2026-09-30at141626.jpeg",
  resumeUrl: "https://media.base44.com/files/public/6ad0ea288b43c5e8fd4883bc/8d5432c83_updatedresume.pdf",
  email: "lavanyamittal210207@gmail.com",
  phone: "+91 94162 37888",
  location: "Punjab, India ➔ Arizona, USA",
  status: "Available for Internships & Collaborations",
  socials: [
    { label: "GitHub", href: "https://github.com/Lavanya2102-create", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lavanya-mittal-b5b46b311/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/@LavanyaMittal2102", icon: "youtube" },
    { label: "Email", href: "mailto:lavanyamittal210207@gmail.com", icon: "mail" }
  ],
  bioParagraphs: [
    "I'm a Computer Science and Engineering student pursuing a dual degree from Chitkara University (India) and Arizona State University (USA). I'm passionate about web development, AI, and building user-focused solutions.",
    "I'm currently working as a Web Development Intern, with hands-on experience in responsive design, scalable architectures, and real-world project workflows.",
    "Known for strong communication, adaptability, and a growth-driven mindset, with a background in competitive sports that reflects discipline, resilience, and high-performance teamwork."
  ],
  interests: [
    "Web Development", "Artificial Intelligence", "3D & Motion Design", "Software Engineering", 
    "User Experience", "Graphic Design", "Video Editing", "Machine Learning", 
    "IoT & Embedded Systems", "Cybersecurity", "Data Analytics", "Cloud Computing", 
    "Model UN & Public Speaking", "Hackathons", "Sports & Athletics"
  ],
  goals: "To keep learning, building and pushing boundaries — creating software that is both visually stunning, technically robust, and genuinely useful."
};

export const stats = [
  { value: "30+", label: "Industry Certifications", icon: "award" },
  { value: "Top 30", label: "of 750+ Teams (VibeMentor)", icon: "trophy" },
  { value: "2nd", label: "Position (EnviroQuest 1.0)", icon: "medal" },
  { value: "8+", label: "Deployed Projects", icon: "code" }
];

export const motionReel = {
  id: "graphic-reel",
  title: "Graphic & Motion Piece Reel",
  category: "3D Animation & Motion Design",
  description: "A showcase of dynamic kinetic typography, fluid visual storytelling, visual effects, and high-impact motion pieces crafted by Lavanya.",
  videoUrl: "https://media.base44.com/videos/public/6ad0ea288b43c5e8fd4883bc/8444ac87b_graphic.mp4",
  tags: ["Motion Design", "Visual Effects", "Kinetic Typography", "Video Production", "Creative Direction"]
};

export const projectCategories = [
  "All",
  "AI & Machine Learning",
  "IoT & Embedded Systems",
  "Web Development",
  "Software Engineering"
];

export const projects = [
  {
    id: "vibementor",
    title: "VibeMentor — AI Growth & Creativity Companion",
    category: "AI & Machine Learning",
    short: "An AI-powered platform combining adaptive study assistance, career guidance, wellness support, and creative ideation. Hackathon project selected in Top 30 of 750+ teams.",
    description: "VibeMentor is an intelligent companion designed to empower students and creators. It delivers contextual study planning, real-time mock interviews, resume enhancement, wellness monitoring, and offline-capable AI workflows using localized machine learning models.",
    tech: ["RunAnywhere SDK", "Firebender SDK", "SQLite", "Firebase", "Python", "React"],
    features: [
      "Adaptive study planning tailored to cognitive load and test schedules",
      "Interactive resume enhancement and real-time mock interviews",
      "AI-driven creative content generation and wellness check-ins",
      "Offline-capable AI inference pipelines",
      "Advanced to Round 2 — Top 30 of 750+ participating teams"
    ],
    image: "https://media.base44.com/images/public/6ad0ea288b43c5e8fd4883bc/46c8d790e_image.png",
    viewUrl: null,
    codeUrl: null,
    accent: "violet",
    featured: true
  },
  {
    id: "vayukavachai",
    title: "VayuKavachAI — AI & IoT Environmental Monitoring",
    category: "IoT & Embedded Systems",
    short: "AI- and IoT-based industrial worker safety platform for monitoring micro-environmental hazards, predicting heat-stroke risks, and forecasting toxic gas spikes. 2nd Position at EnviroQuest 1.0.",
    description: "VayuKavachAI combines edge IoT hardware with predictive machine learning algorithms to protect frontline industrial and construction workers. It ingests telemetry from ESP32 microcontrollers and multi-gas sensor arrays to detect toxic atmospheric thresholds and forecast risks before incidents occur.",
    tech: ["ESP32", "DHT22", "MQ135", "React.js", "Tailwind CSS", "Chart.js", "Python", "Scikit-learn", "Prophet", "Firebase Firestore"],
    features: [
      "Led team of 3 across Hack-N-Win 3.0 & EnviroQuest 1.0 competitions",
      "Edge ESP32 telemetry with DHT22 (temp/humidity) and MQ135 (air quality) sensors",
      "Live multi-source meteorological integration via AQICN, OpenWeatherMap & AirNow APIs",
      "Predictive machine learning models forecasting heat-stroke and pollution exposure risks",
      "Real-time safety recommendation engine with automated incident alerting",
      "Secured 2nd Position at EnviroQuest 1.0 (Chitkara University)"
    ],
    image: "https://media.base44.com/images/public/6ad0ea288b43c5e8fd4883bc/45f254d11_image.png",
    viewUrl: null,
    codeUrl: null,
    accent: "mint",
    featured: true
  },
  {
    id: "portfolio",
    title: "Personal Motion & 3D Portfolio Website",
    category: "Web Development",
    short: "An immersive 3D, scroll-driven digital universe showcasing engineering milestones, motion design pieces, and interactive technical achievements.",
    description: "Designed from ground up to merge cutting-edge WebGL graphics with silky 60fps kinetic motion, custom glassmorphism shaders, interactive Three.js particle systems, and responsive layout engineering.",
    tech: ["Three.js", "WebGL", "HTML5/CSS3", "JavaScript ES6+", "Tailwind Architecture"],
    features: [
      "Real-time Three.js particle cosmos with mouse parallax and gyroscopic tilt",
      "Dynamic 3D holographic card shaders with interactive perspective deformation",
      "Ultra-responsive fluid glassmorphic UI with zero layout shifts",
      "Custom Web Audio API synthesizer for futuristic interactive auditory feedback",
      "Comprehensive interactive vaults for certifications, writing samples, and motion media"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/portfolio.jpeg",
    viewUrl: "https://lavanya2102-create.github.io/lavanya-portfolio/",
    codeUrl: "https://github.com/Lavanya2102-create/lavanya-portfolio",
    accent: "violet",
    featured: true
  },
  {
    id: "multi-mode-calculator",
    title: "Multi-Mode Precision Calculator",
    category: "Web Development",
    short: "A modular, full-featured web calculator with seamless switching between Basic Arithmetic, Advanced Scientific, and Binary/Hexadecimal Programmer modes.",
    description: "Engineered with clean object-oriented JavaScript architectures, handling complex order-of-operation parsing, trigonometric functions, memory buffers, and bitwise bit-shift operations.",
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive UI"],
    features: [
      "Standard Basic Mode with memory retention",
      "Scientific Mode supporting trigonometry, logarithms, exponentials, and powers",
      "Programmer Mode featuring binary, octal, decimal, and hexadecimal conversions",
      "Modular state-driven architecture with clean keyboard input support"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/calculator.jpeg",
    viewUrl: "https://lavanya2102-create.github.io/multi-mode-calculator/",
    codeUrl: "https://github.com/Lavanya2102-create/multi-mode-calculator",
    accent: "mint",
    featured: false
  },
  {
    id: "jarvis",
    title: "Jarvis AI Voice Assistant",
    category: "AI & Machine Learning",
    short: "An interactive browser-based artificial intelligence assistant using real-time speech recognition, natural language keyword parsing, and synthesized voice feedback.",
    description: "An intuitive web assistant inspired by sci-fi AI interfaces that listens to vocal requests, interprets navigation commands, performs web searches, announces system status, and converses with natural speech synthesis.",
    tech: ["HTML5", "CSS3", "JavaScript", "WebSpeech API", "SpeechSynthesis"],
    features: [
      "Continuous bidirectional voice recognition and command detection",
      "Dynamic contextual vocal feedback via Web SpeechSynthesis",
      "Automated application launcher and web service search commands",
      "Futuristic HUD visualizer reacting to vocal input"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/jarvis.jpeg",
    viewUrl: "https://jarvis-vitualassistant.netlify.app/",
    codeUrl: null,
    accent: "violet",
    featured: false
  },
  {
    id: "investwise",
    title: "InvestWise — Stock Analysis & Sentiment Suite",
    category: "Software Engineering",
    short: "A desktop analytics application for financial asset visualization, multi-ticker comparison, and algorithmic market sentiment analysis with clean GUI plotting.",
    description: "InvestWise empowers retail investors with real-time stock ticker fetching, moving-average computation, historical trend visualization, and headline sentiment analysis wrapped in a responsive desktop GUI.",
    tech: ["Python", "Pandas", "Matplotlib", "Tkinter", "Financial APIs"],
    features: [
      "Automated stock price data ingestion and time-series normalization",
      "Interactive candlestick and volume chart rendering using Matplotlib",
      "Market sentiment scoring on recent news and corporate filings",
      "Modular desktop GUI engineered with high usability and fast rendering"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/invest.jpeg",
    viewUrl: "https://lavanya2102-create.github.io/lavanya-portfolio/projects/investwise-stock-suite.html",
    codeUrl: null,
    accent: "mint",
    featured: false
  },
  {
    id: "touchless-doorbell",
    title: "Touchless Smart Doorbell",
    category: "IoT & Embedded Systems",
    short: "A hygienic, contact-free smart doorbell system utilizing passive infrared (PIR) motion sensors and an Arduino UNO microcontroller.",
    description: "Created as an ergonomic and sanitary IoT solution, this embedded hardware system triggers acoustic and visual notification alerts when human hand proximity is detected without needing physical mechanical touch.",
    tech: ["Arduino UNO", "PIR Motion Sensor", "Embedded C++", "Piezo Buzzer", "Circuit Design"],
    features: [
      "Non-contact proximity trigger with false-positive filtering algorithm",
      "Calibrated PIR sensor range optimization for entrance ergonomics",
      "Low-latency interrupt handling on Arduino UNO firmware",
      "Acoustic chime cadence and LED notification signals"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/touchless.jpg",
    viewUrl: "https://lavanya2102-create.github.io/lavanya-portfolio/projects/touchless-doorbell.html",
    codeUrl: null,
    accent: "mint",
    featured: false
  },
  {
    id: "cybersecure",
    title: "CyberSecure — Interactive Cybersecurity Portal",
    category: "Web Development",
    short: "An educational cybersecurity awareness platform explaining digital threat vectors, phishing prevention, cryptographic hygiene, and defensive online practices.",
    description: "Designed to demystify complex information security concepts into scannable interactive modules, offering actionable security check-lists and best practices for non-technical users.",
    tech: ["HTML5", "CSS3", "JavaScript", "Information Architecture"],
    features: [
      "Plain-language interactive breakdowns of ransomware, phishing, and social engineering",
      "Actionable password strength and two-factor authentication guides",
      "Responsive cyber-themed UI built with accessibility standards",
      "Interactive quiz for evaluating digital hygiene awareness"
    ],
    image: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/images/cyber.jpeg",
    viewUrl: "https://lavanya2102-create.github.io/cybersecure-lavanya/",
    codeUrl: "https://github.com/Lavanya2102-create/cybersecure-lavanya",
    accent: "violet",
    featured: false
  }
];

/**
 * Exact Skills Matrix as in the Original Base44 Portfolio (Screenshot Matched)
 * Numbered 01 to 09 with rounded skill pill badges and top gradient border styling
 */
export const skillsGrouped = [
  {
    number: "01",
    group: "Programming Languages",
    accent: "mint",
    items: ["C++", "Java", "Python"]
  },
  {
    number: "02",
    group: "Web Development",
    accent: "mint",
    items: ["HTML", "CSS", "JavaScript"]
  },
  {
    number: "03",
    group: "Frameworks & Libraries",
    accent: "mint",
    items: ["React.js", "Tailwind CSS", "Three.js", "Chart.js", "Tkinter"]
  },
  {
    number: "04",
    group: "AI, Data & ML",
    accent: "violet",
    items: ["Machine Learning", "Deep Learning", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Prophet", "Data Analytics", "Power BI"]
  },
  {
    number: "05",
    group: "Databases & Cloud",
    accent: "mint",
    items: ["Firebase", "SQLite", "MongoDB", "AWS Cloud"]
  },
  {
    number: "06",
    group: "IoT & Hardware",
    accent: "violet",
    items: ["ESP32", "Arduino", "DHT22", "MQ135", "REST APIs"]
  },
  {
    number: "07",
    group: "Tools & Platforms",
    accent: "violet",
    items: ["Git", "GitHub", "Netlify", "VS Code", "Agile / Scrum"]
  },
  {
    number: "08",
    group: "Cybersecurity & Design",
    accent: "mint",
    items: ["Cybersecurity Fundamentals", "UX Design", "Responsive Design", "Canva"]
  },
  {
    number: "09",
    group: "Creative & Professional",
    accent: "violet",
    items: ["Graphic Designing", "Video Editing", "Project Management", "Leadership", "Teamwork", "Problem Solving"]
  }
];

export const timeline = [
  {
    id: "edu-asu",
    type: "education",
    title: "Bachelor of Science in Computer Science",
    org: "Arizona State University",
    period: "2026 – 2028",
    location: "Tempe, Arizona, USA",
    detail: "Second phase of international dual-degree curriculum focusing on distributed systems, advanced artificial intelligence, algorithms, and cloud computing architectures.",
    current: false,
    badge: "International Dual Degree"
  },
  {
    id: "edu-chitkara",
    type: "education",
    title: "Bachelor of Engineering in Computer Science & Engineering",
    org: "Chitkara University",
    period: "2024 – 2026",
    location: "Punjab, India",
    detail: "Foundation phase of the international dual-degree program in partnership with ASU. Core coursework in Object-Oriented Programming, Data Structures, Algorithms, Discrete Mathematics, and Computer Architecture.",
    current: true,
    badge: "Current (Dual Degree)"
  },
  {
    id: "work-nischit",
    type: "work",
    title: "Campus Ambassador",
    org: "Nischit",
    period: "Sep 2025 – Jun 2026",
    location: "Chandigarh, India (Hybrid)",
    detail: "Represent Nischit at Chitkara University. Lead event outreach, conduct tech workshops, foster student engagement, and coordinate open-source academic repository growth.",
    current: true,
    badge: "Leadership & Outreach"
  },
  {
    id: "work-skillcraft",
    type: "work",
    title: "Web Development Intern",
    org: "SkillCraft Technology",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    detail: "Developed modular front-end components using HTML5, CSS3, and JavaScript for production web applications. Enhanced UI responsiveness, resolved cross-browser defects, and contributed in daily Agile scrums and sprint reviews.",
    current: false,
    badge: "Internship"
  },
  {
    id: "ach-vibementor",
    type: "achievement",
    title: "Top 30 Finalist — VibeMentor Hackathon",
    org: "National Hackathon",
    period: "2025",
    location: "Selected among 750+ Teams",
    detail: "Engineered VibeMentor AI Companion and advanced through high-intensity rounds, finishing in the Top 30 of more than 750 nationwide engineering teams.",
    current: false,
    badge: "Top 30 of 750+"
  },
  {
    id: "ach-enviroquest",
    type: "achievement",
    title: "2nd Position — EnviroQuest 1.0",
    org: "Chitkara University",
    period: "2025",
    location: "Team Leader",
    detail: "Spearheaded a 3-person team to build and present VayuKavachAI, an AI- and IoT-driven worker safety platform for environmental hazard reduction.",
    current: false,
    badge: "2nd Prize Winner"
  },
  {
    id: "ach-engagement",
    type: "achievement",
    title: "Active Engagement Award",
    org: "Rewards and Recognition Ceremony 2024–25",
    period: "Chitkara University",
    location: "Punjab, India",
    detail: "Honored with the institutional Active Engagement Award in recognition of academic vigor, hackathon representation, and collaborative contributions.",
    current: false,
    badge: "Institutional Honor"
  }
];

/**
 * Complete Graphic Design Works (19 Items - Exactly matching the first portfolio)
 */
export const graphicWorks = [
  {
    id: "luxury-apartment",
    title: "Ultra Luxury Apartment — Real Estate Poster",
    description: "Promotional poster for a luxury apartment listing.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img00.jpg",
    tag: "Commercial Creative"
  },
  {
    id: "fresh-juice",
    title: "Fresh Juice: Beet Blast — Product Ad",
    description: "Product advertisement with a dynamic splash composition.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img01.jpg",
    tag: "Product Advertising"
  },
  {
    id: "dream-house",
    title: "Buy Your Dream House — Real Estate Ad",
    description: "Real estate and luxury furniture promotional creative.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img02.jpg",
    tag: "Architectural Design"
  },
  {
    id: "save-earth-3r",
    title: "Save the Earth with 3R",
    description: "Awareness infographic poster on Reduce, Recycle, Reuse.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img03.jpg",
    tag: "Social Awareness"
  },
  {
    id: "aequitas-secretariat",
    title: "Aequitas Summit — Secretariat Applications",
    description: "Call-for-secretariat poster for Aequitas Summit.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img04.jpg",
    tag: "Conference Identity"
  },
  {
    id: "quote-sunset",
    title: "Leave Nothing for Tomorrow — Quote Graphic",
    description: "Typographic quote overlay on a sunset photograph.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img19.jpg",
    tag: "Typography Creative"
  },
  {
    id: "saurabh-speaker",
    title: "Prayaas-Tathastu ICS MUN — Speaker",
    description: "Speaker introduction graphic for Lok Sabha featuring Saurabh Yadav.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img20.jpg",
    tag: "Speaker Identity"
  },
  {
    id: "delegate-registrations",
    title: "Alpha MUN & YP — Delegate Registrations",
    description: "Registrations-open promotional poster.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img21.jpg",
    tag: "Conference Campaign"
  },
  {
    id: "president-pranav",
    title: "Alpha MUN & YP — President",
    description: "Executive board introduction graphic for President Pranav Dhiman.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img22.jpg",
    tag: "Leadership Spotlight"
  },
  {
    id: "collab-nit-silchar",
    title: "Aequitas × NIT Silchar MUN — Collaboration",
    description: "Institutional collaboration announcement creative.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img23.jpg",
    tag: "Partnership Identity"
  },
  {
    id: "chief-guest-1",
    title: "Prayaas-Tathastu ICS MUN — Chief Guest",
    description: "Chief guest announcement graphic welcoming Brig Dr Sunil Kumar Moudgil.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img24.jpg",
    tag: "VIP Announcement"
  },
  {
    id: "chief-guest-2",
    title: "Prayaas-Tathastu ICS MUN — Welcoming Chief Guest",
    description: "Chief guest welcome portrait graphic.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img25.jpg",
    tag: "VIP Keynote"
  },
  {
    id: "sos-mun-chair",
    title: "SOS MUN '25 — Chairperson",
    description: "Chairperson introduction graphic featuring Tanuj Verma.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img26.jpg",
    tag: "Executive Board"
  },
  {
    id: "secretariat-banner",
    title: "Aequitas Summit — Secretariat Applications Banner",
    description: "Wide social banner with a decorative border and typography framing.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img27.jpg",
    tag: "Social Media Banner"
  },
  {
    id: "unga-board",
    title: "Alpha MUN & YP — UNGA Executive Board",
    description: "Executive board introduction graphic for Raghav Sharma, Pranav Dhiman, and Mansirat Kaur.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img28.jpg",
    tag: "Board Showcase"
  },
  {
    id: "ays-director",
    title: "Ajmer Youth Summit — Director",
    description: "Director introduction graphic featuring Mr. Pranav Dhiman, Dept. of Social Media.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img29.jpg",
    tag: "Leadership Profile"
  },
  {
    id: "ays-chief-advisors",
    title: "Ajmer Youth Summit — Chief Advisors",
    description: "Chief advisor introduction graphic for Shivam Kaushik and Lakshya Ramachandran Sharma.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img30.jpg",
    tag: "Advisory Board"
  },
  {
    id: "ays-deputy-sg",
    title: "Ajmer Youth Summit — Deputy Secretary General",
    description: "Wide introduction banner for Deputy Secretary General Protyush Kumar Chaterjee.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img31.jpg",
    tag: "Summit Identity"
  },
  {
    id: "ays-poster",
    title: "Ajmer Youth Summit — Main Poster",
    description: "Event identity and headline poster for 18–19 April 2026.",
    image: "https://lavanya-motion-studio.base44.app/portfolio/img32.jpg",
    tag: "Headline Identity"
  }
];

/**
 * Complete Copywriting & Content Writing Collection (9 Items - With Full Screenshots & Context)
 */
export const copywritingPieces = [
  {
    id: "codedrip",
    title: "CodeDrip 2025",
    category: "Social Media & Event Copy",
    context: "Event announcement · GFG CUIET (Chitkara University)",
    hook: "Code. Crack. Conquer.",
    description: "A high-energy caption for a coding competition: a punchy tagline (\"Code. Crack. Conquer.\"), an emoji checklist of perks, and campaign hashtags. Skills: hook, rhythm, scannable perks.",
    metrics: "250+ registrations in 48 hours",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-codedrip.jpg"
  },
  {
    id: "careercanvas",
    title: "CareerCanvas",
    category: "Social Media & Event Copy",
    context: "Industry talk, 1 August 2025 · GFG CUIET",
    hook: "Looking beyond the lines of code — your career is a blank canvas.",
    description: "Invites students to look beyond lines of code, using one consistent canvas metaphor and a clear speaker and logistics block. Skills: audience-first hook, metaphor, clear logistics.",
    metrics: "Highest engagement post of Q3",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-careercanvas.jpg"
  },
  {
    id: "cloudvision",
    title: "CloudVision",
    category: "Social Media & Event Copy",
    context: "Cloud security session, 18 July 2025 · GFG CUIET",
    hook: "Architecting zero-trust in an era of boundless clouds.",
    description: "Makes a technical cybersecurity topic approachable, with a tidy details section for date, time, venue and mode. Skills: simplifying technical topics.",
    metrics: "120+ registered attendees",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-cloudvision.jpg"
  },
  {
    id: "speak-to-stand-out",
    title: "Speak to Stand Out",
    category: "Social Media & Event Copy",
    context: "Communication workshop, 14 May 2025 · GFG CUIET",
    hook: "Learn how to express with impact, influence with words, and lead with confidence.",
    description: "Benefit-led copy built on parallel phrasing, closing with a call to action and branded hashtags.",
    metrics: "High attendance workshop copy",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-speak-to-stand-out.jpg"
  },
  {
    id: "compuvision",
    title: "CompuVision",
    category: "Social Media & Event Copy",
    context: "Computer vision workshop, April 2025 · GFG CUIET",
    hook: "Dive deep into computer vision: decode the world, one pixel at a time.",
    description: "Topic-driven wordplay (\"decode the world, one pixel at a time\") and a strong closing triad. The post earned 45+ organic likes.",
    metrics: "45+ Instagram likes · 90+ attendees",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-compuvision.jpg"
  },
  {
    id: "aequora-concept",
    title: "Aequora Summit: Concept",
    category: "Conference & MUN Writing",
    context: "Promotional copy · Youth Diplomacy",
    hook: "Where Dialogue Finds Balance.",
    description: "Builds a brand identity around the idea of balance and dialogue, closing on what delegates take home beyond a certificate.",
    metrics: "Core Summit Manifesto",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-aequora-concept.jpg"
  },
  {
    id: "aequora-secretariat",
    title: "Aequora Summit: Secretariat Message",
    category: "Conference & MUN Writing",
    context: "Delegate welcome · Opening Address",
    hook: "Speak with confidence. Listen with purpose. Debate with respect.",
    description: "A warm, personal welcome that ends on a memorable four-line call to action inspiring delegate excellence.",
    metrics: "Official Welcome Address",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-aequora-secretariat.jpg"
  },
  {
    id: "aequitas-founders",
    title: "Aequitas Summit: Founders' Message",
    category: "Conference & MUN Writing",
    context: "Inaugural conference welcome · Founders' Note",
    hook: "Truth. Equity. Voice. Where dialogue turns into decisive impact.",
    description: "Turns the motto Truth. Equity. Voice. into the structure of a confident, inviting founders' note.",
    metrics: "Inaugural Keynote Text",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-aequitas-founders.jpg"
  },
  {
    id: "aequitas-secretariat",
    title: "Aequitas Summit: Secretariat Message",
    category: "Conference & MUN Writing",
    context: "Delegate welcome · Executive Board Address",
    hook: "Step into committee with intent, engage with integrity, and let your voice shape the summit.",
    description: "Reassures participants about organisation and support while encouraging active, respectful participation.",
    metrics: "Delegate Orientation Guide",
    image: "https://lavanya-motion-studio.base44.app/portfolio/writing-aequitas-secretariat.jpg"
  }
];

export const certifications = [
  { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services (AWS)", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/AWS.pdf", category: "Cloud" },
  { name: "Web Development Specialist", issuer: "Microsoft", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/Web%20Development.pdf", category: "Web" },
  { name: "Google Data Analytics Professional", issuer: "Google / Coursera", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/Google%20data%20analytics.pdf", category: "Data" },
  { name: "AI For Everyone", issuer: "DeepLearning.AI", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/AI%20For%20Everyone%20copy.pdf", category: "AI" },
  { name: "Cybersecurity for Everyone", issuer: "University of Maryland, College Park", url: null, category: "Security" },
  { name: "Building AI Agents With MongoDB", issuer: "MongoDB", url: null, category: "AI" },
  { name: "Building RAG Apps Using MongoDB", issuer: "MongoDB", url: null, category: "AI" },
  { name: "MongoDB Schema Design Optimization", issuer: "MongoDB", url: null, category: "Data" },
  { name: "HTML and CSS in Depth", issuer: "Meta", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/HTML%20and%20CSS.pdf", category: "Web" },
  { name: "Foundations of Coding Front-End", issuer: "Microsoft", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/Coding%20front%20end.pdf", category: "Web" },
  { name: "Master React Workshop", issuer: "Coding Ninjas 10X Club & IIT Kanpur", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/%20React%20Workshop.pdf", category: "Web" },
  { name: "The Arduino Platform and C Programming", issuer: "University of California, Irvine", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/The%20Arduino%20Platform%20and%20C%20Programming%20copy.pdf", category: "Hardware" },
  { name: "Foundations of User Experience (UX) Design", issuer: "Google", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/UX.pdf", category: "Design" },
  { name: "Programming in C++: A Hands-on Introduction", issuer: "Codio", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/c++.pdf", category: "Core" },
  { name: "Core Java for Complete Beginners", issuer: "LearnKartS", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/Core%20java.pdf", category: "Core" },
  { name: "Prompt Engineering for ChatGPT", issuer: "Vanderbilt University / Coursera", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/Chatgpt.pdf", category: "AI" },
  { name: "Deloitte Australia – Cyber Job Simulation", issuer: "Forage / Deloitte", url: null, category: "Security" },
  { name: "Engineering and Product Design Processes", issuer: "Arizona State University", url: null, category: "Engineering" },
  { name: "Deep Learning and Reinforcement Learning", issuer: "IBM", url: null, category: "AI" },
  { name: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", url: null, category: "AI" },
  { name: "Basic Python Programming for Business Analytics", issuer: "Chitkara University", url: "https://lavanya2102-create.github.io/lavanya-portfolio/assets/certificates/python.pdf", category: "Data" },
  { name: "Data Science Ethics", issuer: "University of Michigan", url: null, category: "Data" }
];
