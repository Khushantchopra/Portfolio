import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Project, { type ProjectData } from "@/components/Project";
import Flow from "@/components/Flow";
import Contact from "@/components/Contact";
import { EMAIL, LINKEDIN } from "@/lib/site";

const shot = (name: string, w: number, h: number, alt: string, caption: string) => ({
  src: `/media/${name}-${w}.webp`,
  srcSet: `/media/${name}-${w / 2}.webp ${w / 2}w, /media/${name}-${w}.webp ${w}w`,
  width: w,
  height: h,
  alt,
  caption,
});

const screenity: ProjectData = {
  id: "p1",
  num: "01",
  name: "ScreenityAI",
  kind: "AI hiring assistant",
  text: "It ranks a pile of resumes against the job description, interviews candidates with the recruiter’s own questions and hands back a scored report.",
  stack: [
    ["Front end", "React, TypeScript, Tailwind"],
    ["Back end", "FastAPI, Supabase Auth"],
    ["AI", "Gemini, resume PDF parsing"],
  ],
  video: { src: "/media/screenity-launch.mp4", poster: "/media/screenity-poster-1600.webp", width: 1600, height: 900, caption: "Launch film, 0:21" },
};

const speechsmith: ProjectData = {
  id: "p2",
  num: "02",
  name: "SpeechSmith",
  kind: "AI speaking coach",
  text: "You record a speech and get scored on pace, pauses, filler words, grammar and pronunciation, then hear a better version read back.",
  stack: [
    ["Front end", "React, TypeScript, Tailwind"],
    ["Back end", "Supabase, Postgres, Edge Functions"],
    ["AI", "Whisper, GPT-4o mini, Azure Speech"],
  ],
  video: { src: "/media/speechsmith-walkthrough.mp4", poster: "/media/speechsmith-poster-1280.webp", width: 1280, height: 720, caption: "The walkthrough I recorded for the client, 2:50, with sound" },
  shots: [
    shot("ss-record", 1104, 812, "SpeechSmith recording screen with audience and tone settings", "Recording, set up for audience and tone"),
    shot("ss-report", 1104, 812, "SpeechSmith report with a suggested fix under each score", "The report, with a fix for every score under 100"),
  ],
};

const services = [
  { title: "Websites and Web Apps", body: "Custom websites and web apps built from scratch, with user login, payments and email included.", tools: ["React", "Next.js", "Node.js", "FastAPI"], icon: "M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" },
  { title: "AI for Your Product", body: "Add AI to your app: chatbots, speech analysis and document reading, built on OpenAI, Gemini or Azure.", tools: ["OpenAI", "Gemini", "Azure Speech"], icon: "M4 10v4M8 6v12M12 9v6M16 4v16M20 10v4" },
  { title: "Automate Repetitive Work", body: "Scripts and bots that do your manual tasks for you: collecting data, filling forms, making reports and sending them to Slack.", tools: ["Python", "Bash", "Playwright", "Slack"], icon: "M13 3L5 14h6l-1 7 8-11h-6z" },
  { title: "Online Stores", body: "A complete online shop with product pages, a cart, Razorpay payments and an admin panel to manage it.", tools: ["Next.js", "Supabase", "Razorpay"], icon: "M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2" },
  { title: "Software Testing", body: "Automated tests that check your app after every update, so bugs are caught before your users find them.", tools: ["Playwright", "Postman"], icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l2.7 2.7L16 9.8" },
  { title: "Databases and Hosting", body: "Your database, logins and hosting set up properly, so any developer can take over later.", tools: ["Postgres", "MongoDB", "MySQL", "Vercel"], icon: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" },
];

const Icon = ({ d }: { d: string }) => (
  <span className="service__icon" aria-hidden>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
  </span>
);

const process = [
  { title: "Tell Me What You Need", body: "Email a few lines on what it should do, who will use it and when you need it. A rough note is fine." },
  { title: "Get a Plan and a Quote", body: "I reply with the stack, what gets built first and what it costs, before any code is written." },
  { title: "See It Come Together", body: "You test working software as it grows, rather than waiting for one reveal at the end." },
  { title: "Launch and Hand Over", body: "It goes live, and you get the code and the accounts, ready for the next developer." },
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />

        <section className="section band" id="services" aria-labelledby="sv-title">
          <div className="container">
            <div className="section__head">
              <h2 id="sv-title">What I Can Build</h2>
              <p className="lead">Pick the closest match, then send me a short note about it.</p>
            </div>
            <ul className="services">
              {services.map((s, i) => (
                <li key={s.title} data-reveal="up" style={{ "--i": i % 3 } as CSSProperties}>
                  <a className="service stock" href="#contact">
                    <span className="service__top">
                      <Icon d={s.icon} />
                      <span className="service__n">0{i + 1}</span>
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <ul className="tags" aria-label="Tools">
                      {s.tools.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <span className="service__cta">Ask about this</span>
                  </a>
                </li>
              ))}
              <li className="services__wide" data-reveal="up">
                <a className="service service--ink" href="#contact">
                  <span className="service__top">
                    <Icon d="M3 6h18v12H3zM3 7l9 6 9-6" />
                  </span>
                  <span className="service__body">
                    <h3>Not on the List?</h3>
                    <p>Describe what you need in an email. If it isn’t something I do well, I’ll say so.</p>
                  </span>
                  <span className="btn btn--card service__btn">Email me about it</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section container" id="work" aria-labelledby="work-title">
          <div className="section__head">
            <h2 id="work-title">Selected Work</h2>
            <p className="lead">Two products I built end to end, shown with the films and screens they shipped with.</p>
          </div>
          <Project {...screenity} />
          <Flow />
          <Project {...speechsmith} />
        </section>

        <section className="section container" id="process" aria-labelledby="pr-title">
          <div className="split">
            <div className="split__head">
              <h2 id="pr-title">How a Project Runs</h2>
              <p className="lead">Four steps, from your first email to the handover.</p>
            </div>
            <ol className="steps">
              {process.map((s, i) => (
                <li key={s.title} data-reveal="up">
                  <span className="steps__n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="foot">
        <div className="foot__grid container">
          <div className="foot__brand">
            <a className="nav__name" href="#top">Khushant Chopra</a>
            <p>Freelance full-stack developer. Web apps, AI features, task automation, online stores and testing.</p>
          </div>
          <nav aria-label="Footer">
            <p className="foot__label">Pages</p>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div>
            <p className="foot__label">Contact</p>
            <ul>
              <li><a href="#contact">{EMAIL}</a></li>
              <li><a href={LINKEDIN} rel="me noopener">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="container"><p className="foot__base">© 2026 Khushant Chopra</p></div>
      </footer>
    </>
  );
}
