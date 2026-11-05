"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const steps = [
  {
    title: "Ranks Every Resume Against the Job.",
    sub: "Upload the PDFs with the job description. Each candidate gets a fit score, strengths and gaps.",
    img: "flow1",
    alt: "ScreenityAI candidate table ranked by fit score, demo data",
  },
  {
    title: "Then It Runs the Interview.",
    sub: "Questions come from the recruiter’s own bank, up to 12, one at a time, and every answer is scored.",
    img: "flow2",
    alt: "ScreenityAI interview chat asking a candidate a question, demo data",
  },
  {
    title: "And Hands Back a Scored Report.",
    sub: "A score out of 100, a hiring recommendation and a score for each phase.",
    img: "flow3",
    alt: "ScreenityAI interview report showing 87 out of 100, demo data",
  },
];

function Img({ name, alt, eager }: { name: string; alt: string; eager?: boolean }) {
  return (
    <img
      src={`/media/${name}-1600.webp`}
      srcSet={`/media/${name}-800.webp 800w, /media/${name}-1600.webp 1600w`}
      sizes="(min-width: 64rem) 58vw, 100vw"
      width={1600}
      height={800}
      alt={alt}
      loading={eager ? undefined : "lazy"}
      decoding="async"
    />
  );
}

/** One hire in three steps. Pinned with swapping stills on wide screens; a plain stack everywhere else. */
export default function Flow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => setActive(Math.min(2, Math.floor(p * 3))));

  return (
    <section className="flow" aria-labelledby="flow-title">
      <div className="flow__track" ref={ref}>
      <div className="flow__pin">
        <div className="flow__side">
        <div className="flow__intro">
          <h4 id="flow-title">One Hire, Start to Finish</h4>
          <p>Stills from the ScreenityAI launch film, as the recruiter sees them.</p>
        </div>
        <div className="flow__copy">
          <div className="flow__rail" aria-hidden>
            <motion.span style={{ scaleY: scrollYProgress }} />
          </div>
          <ol className="flow__steps">
            {steps.map((s, i) => (
              <li key={s.img} className={i === active ? "flow__step is-active" : "flow__step"}>
                <span className="flow__n">0{i + 1}</span>
                <h5>{s.title}</h5>
                <p>{s.sub}</p>
                <div className="flow__shot frame stock">
                  <Img name={s.img} alt={s.alt} />
                </div>
              </li>
            ))}
          </ol>
        </div>
        </div>
        <div className="flow__stage" aria-hidden>
          {steps.map((s, i) => (
            <div key={s.img} className={i === active ? "frame stock is-active" : "frame stock"}>
              <Img name={s.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
