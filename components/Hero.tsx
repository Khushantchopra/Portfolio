import { EMAIL } from "@/lib/site";

/** The desk: SpeechSmith as the spec sheet, ScreenityAI as the index card, the sheet stamped. */
export default function Hero() {
  return (
    <header className="hero desk" id="top">
      <div className="hero__grid container">
        <div className="hero__copy">
          <h1>I Build Web Apps and AI Products.</h1>
          <p className="lead">I’m Khushant, a freelance full-stack developer who takes products from idea to launch.</p>
          <div className="actions">
            <a className="btn btn--ink" href="#contact">Start a project</a>
            <a className="btn btn--card" href="#work">See the work</a>
          </div>
          <p className="hero__mail">
            Or write to <a href="#contact">{EMAIL}</a>
          </p>
        </div>

        <div className="hero__desk">
          <a className="sheet stock" href="#p2" aria-label="SpeechSmith, an AI speaking coach. Go to the project.">
            <img src="/media/speechsmith-poster-1280.webp" sizes="(min-width: 60rem) 34vw, 86vw" width={1280} height={720} alt="" fetchPriority="high" />
            <span className="sheet__head">
              <span className="sheet__name">SpeechSmith</span>
              <span className="sheet__kind">AI speaking coach</span>
            </span>
            <span className="sheet__rows">
              <span><span>Front end</span><span>React, TypeScript</span></span>
              <span><span>Back end</span><span>Supabase, Postgres</span></span>
              <span><span>AI</span><span>Whisper, GPT-4o mini, Azure&nbsp;Speech</span></span>
            </span>
            <span className="stamp" aria-hidden>Shipped</span>
          </a>
          <a className="card stock" href="#p1" aria-label="ScreenityAI, an AI hiring assistant. Go to the project.">
            <img src="/media/screenity-poster-1600.webp" width={1600} height={900} alt="" />
            <span className="sheet__name">ScreenityAI</span>
            <span className="sheet__kind">AI hiring assistant</span>
          </a>
        </div>
      </div>
    </header>
  );
}
