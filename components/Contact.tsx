"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { EMAIL, LINKEDIN } from "@/lib/site";

export default function Contact() {
  const mailRef = useRef<HTMLSpanElement>(null);
  const magnetic = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.6 });
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    magnetic.current = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
    return () => clearTimeout(timer.current);
  }, []);

  function pull(e: React.PointerEvent<HTMLAnchorElement>) {
    if (!magnetic.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    y.set(((e.clientY - r.top) / r.height - 0.5) * 16);
  }
  function release() {
    x.set(0);
    y.set(0);
  }

  async function copy() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
    } catch {
      const sel = window.getSelection();
      const range = document.createRange();
      if (mailRef.current && sel) {
        range.selectNodeContents(mailRef.current);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      setStatus("selected");
    }
    timer.current = setTimeout(() => setStatus(""), 2200);
  }

  const copied = status === "copied";

  return (
    <section className="board" id="contact" aria-labelledby="ct-title">
      <div className="board__grid container">
        <div className="board__copy">
          <h2 id="ct-title">Have Something to Build?</h2>
          <p className="lead">Send a short note on what it should do and when you need it.</p>
        </div>

        <div className="letter stock">
          <span className="letter__label">Write to</span>
          <a className="letter__mail" href={`mailto:${EMAIL}?subject=${encodeURIComponent("A new project")}`} onPointerMove={pull} onPointerLeave={release}>
            <motion.span ref={mailRef} style={{ x: sx, y: sy }}>{EMAIL}</motion.span>
          </a>
          <div className="letter__row">
            <a className="btn btn--ink" href={`mailto:${EMAIL}?subject=${encodeURIComponent("A new project")}`}>Email me</a>
            <button className="btn btn--card" type="button" onClick={copy}>
              {copied ? (
                <>
                  <svg className="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                  Copied
                </>
              ) : (
                "Copy email"
              )}
            </button>
          </div>
          <p className="letter__status" role="status">
            {copied ? "Email address copied." : status === "selected" ? "Selected. Press Ctrl+C or Cmd+C to copy." : ""}
          </p>
          <p className="letter__alt">
            Or find me on <a href={LINKEDIN} rel="me noopener">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}
