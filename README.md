# ikigai Finder
A modern, AI-powered web application that helps users discover their ikigai — the Japanese philosophy of finding your reason for being — through a guided 20-question assessment, personalised AI analysis, and actionable career guidance.  Built with vanilla HTML, CSS, and JavaScript. No frameworks. No dependencies. Powered by the Gemini AI API.  

---

## Live Demo
View Live 🌐 https://ankamahjohnson.github.io/ikigaiFinder/

---

## What is Ikigai?

Ikigai (生き甲斐) is a Japanese concept meaning "reason for being." It sits at the intersection of four pillars:

- **What you love** — the activities that energise and fulfil you
- **What you are good at** — your natural and developed skills
- **What the world needs** — where your contribution creates real value
- **What you can be paid for** — what sustains you financially

Your ikigai is the point where all four overlap.

---

## Features

### Multi-Screen SPA Flow
A smooth single-page application with four distinct screens — Welcome, Previous Result, Quiz, and Result — each transitioning with slide left and right animations that feel native and intentional.

### 20-Question Assessment
Questions are organised across all four ikigai pillars. Each question presents four carefully considered options designed to surface genuine patterns in how a person thinks, works, and finds meaning.

### Instant Local Results
The moment the user completes the quiz, results are calculated locally using a weighted scoring algorithm with zero network delay. The result screen appears immediately with the full ikigai type, venn diagram, summary, pillar breakdown, and career paths.

### Gemini AI Personalisation
In the background, after the instant result renders, the app sends all 20 answers to the Gemini 1.5 Flash API. Gemini generates a unique, deeply personal summary paragraph written specifically for that user based on the patterns it reads in their answers. When the AI response arrives, the summary fades out and the personalised version typewriters itself in, with a toast notification confirming the upgrade.

### Five Ikigai Archetypes
Results are classified into one of five distinct ikigai profiles, each with its own title, center word, summary, four pillar descriptions, and seven tailored career paths:

- **The Creative Innovator** — driven by making, designing, and bringing ideas to life
- **The Empathetic Guide** — called toward healing, teaching, and human connection
- **The Analytical Builder** — energised by systems, engineering, and solving hard problems
- **The Visionary Educator** — passionate about ideas, learning, and sharing knowledge
- **The Purposeful Entrepreneur** — a builder of organisations, movements, and legacies

### Overlapping Circles Venn Diagram
An animated SVG-style venn diagram visualises the four ikigai pillars on both the welcome screen and the result screen. The welcome diagram floats gently on a loop. The result diagram springs in with a scale animation on reveal.

### Seven Career and Project Suggestions
Each result type includes seven specific, well-described career and project paths tailored to that ikigai profile, displayed with staggered entrance animations on the result screen.

### Save Your Result
Users can save their ikigai result to localStorage with a single tap. The saved result persists across sessions and can be retrieved at any time from the welcome screen.

### View Previous Ikigai
A dedicated screen accessible from the welcome page displays the user's most recently saved result, including their title, personalised summary, all four pillars, and top career paths.

### Share Your Result
A share modal generates a high-quality Canvas-rendered image of the user's result — including their ikigai title, AI summary, pillar breakdown, and top three career paths — with a gradient accent bar. Users can download the image as a PNG or copy a formatted text version to their clipboard.

### Dark and Light Mode
A theme toggle in the header switches between light and dark modes. The chosen theme is saved to localStorage and restored on every visit. All colours, surfaces, borders, and venn diagram blend modes adapt cleanly to both themes.

### Haptic Micro-Animations
Every meaningful interaction includes a micro-animation layer. Option selection triggers a spring-physics bounce animation on the chosen card and scales up the custom radio box. Button presses include active-state compression. On supported mobile devices, the Web Vibration API fires subtle haptic patterns on every tap.

### Progress Indicator
A smooth progress bar in the header fills incrementally as the user moves through the 20 questions, with a live question counter displayed alongside it.

### Smooth Screen Transitions
All screen changes use a custom slide transition system built without any library. Screens enter from the right on forward navigation and exit to the left, with the reverse on backward navigation. The transition uses visibility hidden on inactive screens to prevent bleed-through, and forced reflow to guarantee the browser registers position changes before animating.

### Typewriter Text Reveal
The result summary renders character by character using a typewriter animation, giving the AI-generated text a sense of being written in real time specifically for the user.

### Fully Responsive
The layout adapts cleanly to all screen sizes from small mobile to large desktop. Touch interactions, mobile scrolling, and viewport height are all handled with mobile-first considerations.

### Graceful Fallback
If the Gemini API is unavailable, slow, or returns an unexpected response, the app silently retains the locally generated summary. The user always receives a complete, polished result regardless of network conditions.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 with custom properties, keyframe animations, and CSS transitions |
| Logic | Vanilla JavaScript (ES6+) |
| AI | Google Gemini 1.5 Flash API |
| Fonts | Google Fonts — Playfair Display and Inter |
| Storage | localStorage API |
| Canvas | HTML5 Canvas API for share image generation |
| Haptics | Web Vibration API |


---



## 📝
> Note: This project uses a client-side API key for 
> demonstration purposes. A production version would 
> proxy requests through a backend server.

Made with ❤️ as a frontend practice project.

