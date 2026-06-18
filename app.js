/* CONFIG */
const GEMINI_API_KEY = CONFIG.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

/* QUESTIONS */
const QUESTIONS = [
  { cat:"What You Love",            q:"When you lose track of time, what are you usually doing?",                  opts:["Creating or making things","Helping or teaching others","Solving complex problems","Exploring ideas and learning"] },
  { cat:"What You Love",            q:"Which type of activity fills you with the most energy?",                    opts:["Artistic or creative work","Physical or hands-on work","Analytical or strategic work","Social or community work"] },
  { cat:"What You Love",            q:"If you had a free weekend with no obligations, how would you spend it?",    opts:["Building or crafting something","Reading, writing, or researching","Outdoors or in nature","Connecting deeply with people"] },
  { cat:"What You Love",            q:"What subject could you talk about for hours without getting bored?",        opts:["Technology and innovation","Human behaviour and relationships","Art, music, or storytelling","Nature, science, or the universe"] },
  { cat:"What You Love",            q:"Which statement resonates with you most?",                                  opts:["I am most alive when I am creating","I am most alive when I am connecting","I am most alive when I am discovering","I am most alive when I am building"] },
  { cat:"What You Are Good At",     q:"What do people most often come to you for help with?",                      opts:["Technical or digital skills","Emotional support or advice","Organising or planning","Creative ideas or designs"] },
  { cat:"What You Are Good At",     q:"Which skill have you developed the most over your lifetime?",               opts:["Communication and storytelling","Critical thinking and analysis","Making and building things","Leading and motivating others"] },
  { cat:"What You Are Good At",     q:"In group settings, which role do you naturally fill?",                      opts:["The strategist who plans","The creator who executes","The connector who unites","The researcher who informs"] },
  { cat:"What You Are Good At",     q:"What kind of task do you complete faster or better than most?",             opts:["Writing or articulating ideas","Designing or visualising","Coding or engineering","Listening and understanding"] },
  { cat:"What You Are Good At",     q:"Which statement best describes your strongest natural ability?",            opts:["I see patterns others miss","I make complex things simple","I bring people together","I turn vision into reality"] },
  { cat:"What The World Needs",     q:"Which global challenge do you feel most called to address?",                opts:["Education and knowledge access","Mental health and wellbeing","Technology and innovation gaps","Environment and sustainability"] },
  { cat:"What The World Needs",     q:"If you could solve one problem for your community, what would it be?",      opts:["Economic opportunity and jobs","Better communication and trust","Access to creativity and culture","Health and quality of life"] },
  { cat:"What The World Needs",     q:"What kind of change do you most want to see in the world?",                 opts:["People helping each other more","Better tools and technology","More beauty and meaning","Fairer systems and justice"] },
  { cat:"What The World Needs",     q:"Which type of work feels most meaningful to you on a deeper level?",        opts:["Work that educates and enlightens","Work that heals and restores","Work that builds and innovates","Work that inspires and moves people"] },
  { cat:"What The World Needs",     q:"Where do you believe your effort would have the greatest positive impact?", opts:["In schools and communities","In businesses and economies","In hospitals and wellness spaces","In culture and the arts"] },
  { cat:"What You Can Be Paid For", q:"What type of work do you imagine sustaining you financially long-term?",    opts:["Freelance or creative services","Building products or businesses","Professional or consulting roles","Teaching or mentoring others"] },
  { cat:"What You Can Be Paid For", q:"Which of these has the most financial potential in your view?",             opts:["Technology and software","Creative media and content","Healthcare and wellbeing","Education and coaching"] },
  { cat:"What You Can Be Paid For", q:"How do you prefer to earn money?",                                          opts:["Solving specific problems for clients","Creating things people buy or use","Sharing knowledge and expertise","Leading teams and organisations"] },
  { cat:"What You Can Be Paid For", q:"Which working model appeals to you most?",                                  opts:["Independent freelancer","Founder building something","Employee growing in a field","Hybrid creator and professional"] },
  { cat:"What You Can Be Paid For", q:"What would you be comfortable charging money for right now?",               opts:["A skill or craft I have mastered","Advice or strategic guidance","Content or creative output","A product or tool I could build"] }
];

/* INSTANT LOCAL RESULTS — shown immediately, no waiting */
const LOCAL_RESULTS = {
  CI: {
    title: "The Creative Innovator",
    word:  "CREATE",
    summary: "Your answers reveal a powerful creative spirit. You are drawn to making things that did not exist before, and your greatest satisfaction comes from turning imagination into reality. The world needs the beauty and usefulness you bring into it, and people are genuinely willing to pay for that gift. Your ikigai is in the act of creation itself — building, designing, and expressing until the vision in your mind becomes something others can experience.",
    pillars: { love:"Making and creating", skill:"Design and execution", world:"Beautiful, useful things", paid:"Creative services or products" },
    careers: [
      { name:"UX and Product Designer",       desc:"Shape how millions of people interact with digital products by blending aesthetics with deep usability." },
      { name:"Creative Director",             desc:"Lead the visual and strategic identity of brands, campaigns, or media companies at the highest level." },
      { name:"Indie App or Game Developer",   desc:"Build and ship your own digital product, combining technical skill with an original creative vision." },
      { name:"Motion Designer",               desc:"Bring interfaces, brands, and stories to life through animation and visual storytelling." },
      { name:"Design Technologist",           desc:"Sit at the intersection of engineering and design, prototyping the future of digital experiences." },
      { name:"Content Creator and Strategist",desc:"Build a loyal audience around a creative niche and monetise through partnerships or digital products." },
      { name:"Art Director at a Tech Company",desc:"Own the visual language of a fast-moving product or brand inside a technology organisation." }
    ]
  },
  EG: {
    title: "The Empathetic Guide",
    word:  "GUIDE",
    summary: "Your answers show a person whose greatest strength is understanding other people deeply. You are energised by human connection and called toward work that heals, teaches, or lifts others up. Whether through counselling, mentoring, healthcare, or community leadership, your presence makes people feel genuinely seen. The world needs guides like you — people who hold space for others to grow — and it will sustain you in return.",
    pillars: { love:"People and connection", skill:"Listening and empathy", world:"Healing and guidance", paid:"Coaching, care, or leadership" },
    careers: [
      { name:"Life or Executive Coach",       desc:"Guide individuals through career transitions, personal growth, and high-performance challenges." },
      { name:"Therapist or Counsellor",       desc:"Provide structured mental health support to individuals navigating difficult life experiences." },
      { name:"Community Builder",             desc:"Create and grow spaces — online or offline — where people find belonging and their people." },
      { name:"HR and People Experience Lead", desc:"Shape the culture and wellbeing of organisations from the inside." },
      { name:"Social Entrepreneur",           desc:"Build organisations that solve human problems — mental health, poverty, or education — at scale." },
      { name:"Educator or Learning Designer", desc:"Design transformative learning experiences in schools, companies, or online platforms." },
      { name:"Non-profit Programme Director", desc:"Lead community-driven initiatives that create measurable, lasting human impact." }
    ]
  },
  AB: {
    title: "The Analytical Builder",
    word:  "BUILD",
    summary: "Your answers point to a mind that is energised by solving hard problems with precision and purpose. You love understanding how systems work and making them better — whether in engineering, strategy, data, or business architecture. The world urgently needs people who can turn complexity into clarity and build things that last. Your ikigai is found in the elegant solution: the design that finally works, the system that finally holds.",
    pillars: { love:"Solving hard problems", skill:"Systems thinking", world:"Better tools and structures", paid:"Engineering or strategy" },
    careers: [
      { name:"Software Engineer",             desc:"Design and build the systems, platforms, and tools that power the modern world." },
      { name:"Data Scientist or Analyst",     desc:"Extract meaning from complex data to drive better decisions in business, science, or policy." },
      { name:"Product Manager",               desc:"Define what gets built, why, and for whom — bridging engineering, design, and strategy." },
      { name:"Systems Architect",             desc:"Design the technical foundations of large-scale software and infrastructure." },
      { name:"Management Consultant",         desc:"Help organisations solve their most complex operational and strategic problems." },
      { name:"Quantitative Researcher",       desc:"Apply mathematical models to finance, science, or policy to uncover hidden patterns." },
      { name:"Technical Founder",             desc:"Start and build a technology company from zero-to-one through engineering excellence." }
    ]
  },
  VE: {
    title: "The Visionary Educator",
    word:  "TEACH",
    summary: "Your answers describe someone deeply energised by ideas and driven to share them in ways that spark something in others. You are a natural sense-maker — you understand complex things and have the rare gift of making them clear. Teaching, writing, research, or content creation: your purpose is to make wisdom accessible to people who need it. The world grows through people like you who do the patient, powerful work of transmission.",
    pillars: { love:"Learning and ideas", skill:"Communicating clearly", world:"Education and insight", paid:"Teaching or content" },
    careers: [
      { name:"Online Course Creator",         desc:"Package your expertise into structured courses and reach thousands of learners globally." },
      { name:"Author or Thought Leader",      desc:"Write books, essays, or a newsletter that genuinely shifts how people think." },
      { name:"Curriculum Designer",           desc:"Build the learning frameworks that schools, bootcamps, and companies use to train talent." },
      { name:"Podcast or YouTube Educator",   desc:"Teach complex ideas through long-form media, building a loyal and curious global audience." },
      { name:"Research Scientist",            desc:"Advance the frontier of knowledge in a field you are deeply passionate about." },
      { name:"Instructional Designer",        desc:"Design corporate learning programmes that genuinely change how professionals think and perform." },
      { name:"EdTech Founder",                desc:"Build a company that reimagines how people learn by combining technology with deep pedagogy." }
    ]
  },
  PE: {
    title: "The Purposeful Entrepreneur",
    word:  "LEAD",
    summary: "Your answers paint the picture of a builder of worlds. You see opportunity where others see obstacles, and you have the rare combination of vision and drive to bring people together around something meaningful. Your work creates economic value and societal impact in equal measure. You are not just building a business — you are building a legacy, and that distinction is what makes your ikigai more powerful than ambition alone.",
    pillars: { love:"Vision and execution", skill:"Leadership and strategy", world:"Opportunity and innovation", paid:"Ventures and enterprise" },
    careers: [
      { name:"Startup Founder",               desc:"Build a company around a problem you believe deserves a world-class solution." },
      { name:"Venture Capital Investor",      desc:"Back the next generation of founders, deploying capital and experience to shape the future." },
      { name:"Chief Executive Officer",       desc:"Lead an organisation through growth, complexity, and change with clarity and conviction." },
      { name:"Impact Entrepreneur",           desc:"Build a business that solves a social or environmental problem while generating real revenue." },
      { name:"Business Strategist",           desc:"Help companies navigate markets, competition, and transformation at the highest level." },
      { name:"Angel Investor and Advisor",    desc:"Use your experience and capital to mentor early-stage founders and build a portfolio." },
      { name:"Franchise Owner or Operator",   desc:"Build a scalable business by executing a proven model with your own leadership stamp." }
    ]
  }
};

const MAP = {
  "Creating or making things":"CI","Artistic or creative work":"CI","Building or crafting something":"CI","Art, music, or storytelling":"CI","I am most alive when I am creating":"CI","Creative ideas or designs":"CI","Making and building things":"CI","The creator who executes":"CI","Designing or visualising":"CI","I turn vision into reality":"CI","Access to creativity and culture":"CI","More beauty and meaning":"CI","Work that inspires and moves people":"CI","In culture and the arts":"CI","Freelance or creative services":"CI","Creative media and content":"CI","Creating things people buy or use":"CI","Content or creative output":"CI","A skill or craft I have mastered":"CI",
  "Helping or teaching others":"EG","Social or community work":"EG","Connecting deeply with people":"EG","Human behaviour and relationships":"EG","I am most alive when I am connecting":"EG","Emotional support or advice":"EG","Communication and storytelling":"EG","The connector who unites":"EG","Listening and understanding":"EG","I bring people together":"EG","Mental health and wellbeing":"EG","Better communication and trust":"EG","Work that heals and restores":"EG","In hospitals and wellness spaces":"EG","Teaching or mentoring others":"EG","Healthcare and wellbeing":"EG","Sharing knowledge and expertise":"EG","Advice or strategic guidance":"EG","Hybrid creator and professional":"EG",
  "Solving complex problems":"AB","Physical or hands-on work":"AB","Outdoors or in nature":"AB","Technology and innovation":"AB","I am most alive when I am building":"AB","Technical or digital skills":"AB","Critical thinking and analysis":"AB","The strategist who plans":"AB","Coding or engineering":"AB","I see patterns others miss":"AB","Technology and innovation gaps":"AB","Economic opportunity and jobs":"AB","Better tools and technology":"AB","Work that builds and innovates":"AB","In businesses and economies":"AB","Building products or businesses":"AB","Technology and software":"AB","Solving specific problems for clients":"AB","A product or tool I could build":"AB",
  "Exploring ideas and learning":"VE","Analytical or strategic work":"VE","Reading, writing, or researching":"VE","Nature, science, or the universe":"VE","I am most alive when I am discovering":"VE","Organising or planning":"VE","The researcher who informs":"VE","Writing or articulating ideas":"VE","I make complex things simple":"VE","Education and knowledge access":"VE","Work that educates and enlightens":"VE","In schools and communities":"VE","Professional or consulting roles":"VE","Education and coaching":"VE",
  "Leading and motivating others":"PE","Environment and sustainability":"PE","Health and quality of life":"PE","Fairer systems and justice":"PE","Leading teams and organisations":"PE","Founder building something":"PE","Independent freelancer":"PE","People helping each other more":"PE"
};

/* STATE */
let activeScreen  = "screenWelcome";
let qIndex        = 0;
let answers       = {};
let currentResult = null;

/* DOM */
const $ = id => document.getElementById(id);
const progressWrap  = $("progressWrap");
const progressFill  = $("progressFill");
const progressLabel = $("progressLabel");

/* THEME */
(function initTheme() {
  const t = localStorage.getItem("ik-theme") || "light";
  document.documentElement.setAttribute("data-theme", t);
})();

$("themeToggle").addEventListener("click", () => {
  const cur  = document.documentElement.getAttribute("data-theme");
  const next = cur === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("ik-theme", next);
});

/* TOAST */
let toastTimer = null;
function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* HAPTIC */
function haptic(pattern = [8]) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

/* NAVIGATION */
function goTo(targetId, dir = "forward") {
  if (targetId === activeScreen) return;

  const fromEl = $(activeScreen);
  const toEl   = $(targetId);

  toEl.style.transition = "none";
  toEl.style.visibility = "hidden";
  toEl.style.opacity    = "0";
  toEl.style.transform  = dir === "forward" ? "translateX(100%)" : "translateX(-80px)";
  toEl.classList.remove("is-active", "exit-left");

  void toEl.offsetWidth;

  toEl.style.transition = "";
  toEl.style.visibility = "";
  toEl.style.opacity    = "";
  toEl.style.transform  = "";

  fromEl.classList.remove("is-active");
  if (dir === "forward") {
    fromEl.classList.add("exit-left");
  } else {
    fromEl.style.transition    = `transform var(--dur) var(--ease), opacity var(--dur) var(--ease), visibility 0s linear var(--dur)`;
    fromEl.style.transform     = "translateX(100%)";
    fromEl.style.opacity       = "0";
    fromEl.style.visibility    = "hidden";
    fromEl.style.pointerEvents = "none";
  }

  toEl.classList.add("is-active");

  setTimeout(() => {
    fromEl.classList.remove("is-active", "exit-left");
    fromEl.style.cssText = "";
    activeScreen = targetId;
  }, 520);

  progressWrap.classList.toggle("visible", targetId === "screenQuiz");
}

/* PROGRESS */
function updateProgress() {
  const pct = ((qIndex + 1) / QUESTIONS.length) * 100;
  progressFill.style.width  = pct + "%";
  progressLabel.textContent = `${qIndex + 1} / ${QUESTIONS.length}`;
}

/* QUIZ */
function renderQuestion() {
  const q = QUESTIONS[qIndex];

  $("quizCategory").textContent = q.cat;
  $("quizQNumber").textContent  = `Question ${qIndex + 1} of ${QUESTIONS.length}`;
  $("quizQuestion").textContent = q.q;

  const container = $("quizOptions");
  container.style.opacity   = "0";
  container.style.transform = "translateY(10px)";

  setTimeout(() => {
    container.innerHTML = "";

    q.opts.forEach((opt, i) => {
      const wrap = document.createElement("div");
      wrap.className = "opt-item";

      const inp = document.createElement("input");
      inp.type  = "radio";
      inp.name  = `q${qIndex}`;
      inp.id    = `o_${qIndex}_${i}`;
      inp.value = opt;
      if (answers[qIndex] === opt) inp.checked = true;

      const lbl = document.createElement("label");
      lbl.className = "opt-label";
      lbl.htmlFor   = inp.id;

      const box = document.createElement("span");
      box.className = "opt-radio";

      const txt = document.createElement("span");
      txt.textContent = opt;

      lbl.appendChild(box);
      lbl.appendChild(txt);
      wrap.appendChild(inp);
      wrap.appendChild(lbl);
      container.appendChild(wrap);

      inp.addEventListener("change", () => {
        answers[qIndex] = opt;
        haptic([6]);
        updateNextBtn();
      });
    });

    updateNextBtn();
    updateBackBtn();
    updateProgress();

    container.style.transition = "opacity .28s ease, transform .28s ease";
    container.style.opacity    = "1";
    container.style.transform  = "translateY(0)";
  }, 160);
}

function updateNextBtn() {
  const btn    = $("btnNextQ");
  const isLast = qIndex === QUESTIONS.length - 1;
  btn.disabled = !answers[qIndex];
  btn.innerHTML = "";
  btn.appendChild(document.createTextNode(isLast ? "See My Ikigai" : "Next"));
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("width","16"); svg.setAttribute("height","16");
  svg.setAttribute("viewBox","0 0 24 24"); svg.setAttribute("fill","none");
  svg.setAttribute("stroke","currentColor"); svg.setAttribute("stroke-width","2");
  svg.setAttribute("stroke-linecap","round"); svg.setAttribute("stroke-linejoin","round");
  svg.innerHTML = isLast
    ? `<polyline points="20 6 9 17 4 12"/>`
    : `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`;
  btn.appendChild(svg);
}

function updateBackBtn() {
  $("btnBackQ").style.display = qIndex === 0 ? "none" : "flex";
}

/* SCORE — instant local calculation */
function scoreAnswers() {
  const scores = { CI:0, EG:0, AB:0, VE:0, PE:0 };
  Object.values(answers).forEach(a => { if (MAP[a]) scores[MAP[a]]++; });
  const top = Object.entries(scores).sort((a,b) => b[1]-a[1])[0][0];
  return JSON.parse(JSON.stringify(LOCAL_RESULTS[top] || LOCAL_RESULTS.CI));
}

/* RENDER RESULT — instant, no waiting */
function renderResult(r) {
  currentResult = r;

  $("resultTitle").textContent = r.title;
  $("rvWord").textContent      = r.word;
  $("rv1").textContent = "Love";
  $("rv2").textContent = "Good At";
  $("rv3").textContent = "World Needs";
  $("rv4").textContent = "Paid For";

  // Summary with typewriter
  const summaryEl = $("resultSummary");
  summaryEl.textContent = "";
  typewriterReveal(summaryEl, r.summary, 14);

  // Pillars
  const grid = $("resultPillars");
  grid.innerHTML = "";
  [
    ["What You Love",            r.pillars.love ],
    ["What You Are Good At",     r.pillars.skill],
    ["What The World Needs",     r.pillars.world],
    ["What You Can Be Paid For", r.pillars.paid ]
  ].forEach(([lbl, val]) => {
    const chip = document.createElement("div");
    chip.className = "pillar";
    chip.innerHTML = `<span class="pillar-label">${lbl}</span><span class="pillar-value">${val}</span>`;
    grid.appendChild(chip);
  });

  // Careers
  const list = $("careersList");
  list.innerHTML = "";
  r.careers.forEach((c, i) => {
    const item = document.createElement("div");
    item.className = "career-item";
    item.style.animationDelay = `${0.3 + i * 0.08}s`;
    item.innerHTML = `
      <span class="career-num">${i + 1}</span>
      <div class="career-body">
        <span class="career-name">${c.name}</span>
        <span class="career-desc">${c.desc}</span>
      </div>`;
    list.appendChild(item);
  });

  // Re-trigger animations
  ["resultVenn","resultCard","careersSection"].forEach(id => {
    const el = $(id);
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });

  // Fire Gemini in the background — upgrades summary silently
  upgradeWithGemini(r);
}

/* GEMINI — lightweight background upgrade
   Only rewrites summary + title after result is shown */
async function upgradeWithGemini(localResult) {
  const answerLines = QUESTIONS.map((q, i) =>
    `[${q.cat}]: "${answers[i] || "skipped"}"`
  ).join("\n");

  const prompt = `You are an ikigai coach. A person completed a 20-question assessment. Their ikigai type is "${localResult.title}".

Their answers:
${answerLines}

Write ONE paragraph (4-5 sentences) addressed directly to this person (use "you"). Be specific to their actual answers. Reference the patterns you notice. Tell them what makes their ikigai unique. Do not use bullet points or headings. Return only the paragraph, nothing else.`;

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.85, maxOutputTokens: 250 }
      })
    });

    if (!response.ok) throw new Error(`API ${response.status}`);

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) throw new Error("Empty");

    // Smoothly replace summary with AI version
    currentResult.summary = text;
    const summaryEl = $("resultSummary");

    // Fade out
    summaryEl.style.transition = "opacity .4s ease";
    summaryEl.style.opacity    = "0";

    setTimeout(() => {
      summaryEl.textContent = "";
      summaryEl.style.opacity = "1";
      typewriterReveal(summaryEl, text, 14);
      showToast("Summary personalised by Gemini AI");
    }, 420);

  } catch (err) {
    // Silent fail — local summary stays, user never knows
    console.warn("Gemini upgrade skipped:", err);
  }
}

/* TYPEWRITER */
function typewriterReveal(el, text, speed = 16) {
  el.textContent = "";
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(tick, speed);
    }
  }
  tick();
}

/* SHARE CANVAS */
function openShareModal() {
  if (!currentResult) return;

  const canvas = $("shareCanvas");
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const W = 600, H = 720;
  canvas.width  = W;
  canvas.height = H;
  canvas.style.height = "auto";

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = isDark ? "#1e1e1e" : "#ffffff";
  ctx.fillRect(0, 0, W, H);

  const grad = ctx.createLinearGradient(0,0,W,0);
  grad.addColorStop(0,    "rgba(255,170,100,0.75)");
  grad.addColorStop(0.33, "rgba(100,190,255,0.75)");
  grad.addColorStop(0.66, "rgba(120,220,140,0.75)");
  grad.addColorStop(1,    "rgba(200,130,255,0.75)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, 8);

  ctx.fillStyle = isDark ? "#888" : "#aaa";
  ctx.font = "600 13px Inter, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("IKIGAI FINDER", 40, 50);

  ctx.fillStyle = isDark ? "#f0f0f0" : "#1a1a1a";
  ctx.font = "bold 32px Georgia, serif";
  ctx.fillText(currentResult.title, 40, 94);

  ctx.strokeStyle = isDark ? "#2e2e2e" : "#dfdfdf";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(40,112); ctx.lineTo(W-40,112); ctx.stroke();

  ctx.fillStyle = isDark ? "#888" : "#8e8e8e";
  ctx.font = "400 14px Inter, sans-serif";
  wrapText(ctx, currentResult.summary, 40, 142, W-80, 23);

  const pillars = [
    ["LOVE",        currentResult.pillars.love ],
    ["GOOD AT",     currentResult.pillars.skill],
    ["WORLD NEEDS", currentResult.pillars.world],
    ["PAID FOR",    currentResult.pillars.paid ]
  ];
  const px=40, py=330, pw=(W-80-12)/2, ph=62;
  pillars.forEach(([lbl,val],i) => {
    const col=i%2, row=Math.floor(i/2);
    const x=px+col*(pw+12), y=py+row*(ph+10);
    ctx.fillStyle = isDark ? "#252525" : "#f9f9f9";
    roundRect(ctx,x,y,pw,ph,10); ctx.fill();
    ctx.strokeStyle = isDark ? "#2a2a2a" : "#f0f0f0";
    ctx.lineWidth=1.5;
    roundRect(ctx,x,y,pw,ph,10); ctx.stroke();
    ctx.fillStyle = isDark ? "#444" : "#c0c0c0";
    ctx.font="700 10px Inter, sans-serif";
    ctx.textAlign="left";
    ctx.fillText(lbl, x+12, y+20);
    ctx.fillStyle = isDark ? "#f0f0f0" : "#1a1a1a";
    ctx.font="700 13px Inter, sans-serif";
    ctx.fillText(val, x+12, y+42);
  });

  ctx.fillStyle = isDark ? "#888" : "#aaa";
  ctx.font="700 11px Inter, sans-serif";
  ctx.textAlign="left";
  ctx.fillText("TOP CAREER PATHS", 40, 500);

  currentResult.careers.slice(0,3).forEach((c,i) => {
    const cy = 518 + i * 52;
    ctx.fillStyle = isDark ? "#252525" : "#f9f9f9";
    roundRect(ctx,40,cy,W-80,42,10); ctx.fill();
    ctx.fillStyle = isDark ? "#555" : "#bbb";
    ctx.font="800 11px Inter, sans-serif";
    ctx.fillText(`${i+1}`, 58, cy+26);
    ctx.fillStyle = isDark ? "#f0f0f0" : "#1a1a1a";
    ctx.font="700 13px Inter, sans-serif";
    ctx.fillText(c.name, 78, cy+26);
  });

  ctx.fillStyle = isDark ? "#444" : "#c0c0c0";
  ctx.font="500 12px Inter, sans-serif";
  ctx.textAlign="center";
  ctx.fillText("Discovered at Ikigai Finder — Powered by Gemini AI", W/2, H-22);

  $("shareModal").classList.add("open");
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "", cy = y;
  words.forEach(word => {
    const test = line + word + " ";
    if (ctx.measureText(test).width > maxWidth && line !== "") {
      ctx.fillText(line.trim(), x, cy);
      line = word + " ";
      cy += lineHeight;
    } else {
      line = test;
    }
  });
  ctx.fillText(line.trim(), x, cy);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

/* PREVIOUS RESULT */
function loadPreviousResult() {
  const raw     = localStorage.getItem("ik-result");
  const content = $("prevResultContent");
  const empty   = $("noPrevMsg");

  if (raw) {
    const r = JSON.parse(raw);
    empty.style.display   = "none";
    content.style.display = "block";
    content.innerHTML = `
      <div class="saved-card">
        <p class="saved-date">Saved on ${r.date}</p>
        <h3 class="saved-title">${r.title}</h3>
        <p class="saved-summary">${r.summary}</p>
        <div class="pillars-grid" style="margin-top:14px;">
          <div class="pillar"><span class="pillar-label">What You Love</span><span class="pillar-value">${r.pillars.love}</span></div>
          <div class="pillar"><span class="pillar-label">What You Are Good At</span><span class="pillar-value">${r.pillars.skill}</span></div>
          <div class="pillar"><span class="pillar-label">What The World Needs</span><span class="pillar-value">${r.pillars.world}</span></div>
          <div class="pillar"><span class="pillar-label">What You Can Be Paid For</span><span class="pillar-value">${r.pillars.paid}</span></div>
        </div>
        ${r.careers ? `
        <p class="careers-heading" style="margin-top:16px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
          Career Paths
        </p>
        <div class="careers-list">
          ${r.careers.slice(0,3).map((c,i) => `
            <div class="career-item">
              <span class="career-num">${i+1}</span>
              <div class="career-body">
                <span class="career-name">${c.name}</span>
                <span class="career-desc">${c.desc}</span>
              </div>
            </div>`).join("")}
        </div>` : ""}
      </div>`;
  } else {
    empty.style.display   = "flex";
    content.style.display = "none";
    content.innerHTML     = "";
  }
}

/* INIT */
(function init() {
  const welcome = $("screenWelcome");
  welcome.style.cssText = "transition:none; transform:translateX(0); opacity:1; visibility:visible; pointer-events:all;";
  welcome.classList.add("is-active");
  void welcome.offsetWidth;
  welcome.style.cssText = "";
})();

/* EVENTS */
$("btnStart").addEventListener("click", () => {
  haptic([6,30,6]);
  qIndex  = 0;
  answers = {};
  goTo("screenQuiz","forward");
  setTimeout(renderQuestion, 80);
});

$("btnViewPrev").addEventListener("click", () => {
  haptic([6]);
  loadPreviousResult();
  goTo("screenPrevious","forward");
});

$("btnBackFromPrev").addEventListener("click", () => {
  haptic([4]);
  goTo("screenWelcome","backward");
});

$("btnStartFromPrev").addEventListener("click", () => {
  haptic([6,30,6]);
  qIndex  = 0;
  answers = {};
  goTo("screenQuiz","forward");
  setTimeout(renderQuestion, 80);
});

$("btnBackQ").addEventListener("click", () => {
  haptic([4]);
  if (qIndex === 0) {
    goTo("screenWelcome","backward");
  } else {
    qIndex--;
    renderQuestion();
  }
});

$("btnNextQ").addEventListener("click", () => {
  if (!answers[qIndex]) return;
  haptic([6]);

  if (qIndex === QUESTIONS.length - 1) {
    // Score instantly and show result immediately — zero waiting
    const result = scoreAnswers();
    goTo("screenResult","forward");
    setTimeout(() => renderResult(result), 80);
  } else {
    qIndex++;
    renderQuestion();
  }
});

$("btnSave").addEventListener("click", () => {
  if (!currentResult) return;
  haptic([6,20,6]);
  const btn = $("btnSave");
  localStorage.setItem("ik-result", JSON.stringify({
    ...currentResult,
    date: new Date().toLocaleDateString("en-GB",{ day:"numeric", month:"long", year:"numeric" })
  }));
  showToast("Ikigai saved successfully");
  btn.textContent = "Saved!";
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Save My Ikigai`;
    btn.disabled = false;
  }, 2500);
});

$("btnShare").addEventListener("click", () => {
  haptic([6]);
  openShareModal();
});

$("modalClose").addEventListener("click", () => {
  $("shareModal").classList.remove("open");
});

$("shareModal").addEventListener("click", e => {
  if (e.target === $("shareModal")) $("shareModal").classList.remove("open");
});

$("btnDownload").addEventListener("click", () => {
  haptic([6,20,6]);
  const canvas = $("shareCanvas");
  const link   = document.createElement("a");
  link.download = `ikigai-${(currentResult.word || "result").toLowerCase()}.png`;
  link.href     = canvas.toDataURL("image/png");
  link.click();
  showToast("Image downloaded");
});

$("btnCopyText").addEventListener("click", () => {
  haptic([6]);
  if (!currentResult) return;
  const text = `My Ikigai: ${currentResult.title}\n\n${currentResult.summary}\n\nWhat I Love: ${currentResult.pillars.love}\nWhat I Am Good At: ${currentResult.pillars.skill}\nWhat The World Needs: ${currentResult.pillars.world}\nWhat I Can Be Paid For: ${currentResult.pillars.paid}\n\nTop Career Paths:\n${currentResult.careers.slice(0,3).map((c,i) => `${i+1}. ${c.name}`).join("\n")}\n\nDiscovered at Ikigai Finder — Powered by Gemini AI`;
  navigator.clipboard.writeText(text)
    .then(() => showToast("Copied to clipboard"))
    .catch(() => showToast("Copy not supported on this device"));
});

$("btnRetake").addEventListener("click", () => {
  haptic([4,20,4]);
  qIndex        = 0;
  answers       = {};
  currentResult = null;
  goTo("screenWelcome","backward");
});