"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LazyVideo from "./LazyVideo";

export type Shot = { src: string; srcSet: string; width: number; height: number; alt: string; caption: string };
export type ProjectData = {
  id: string;
  num: string;
  name: string;
  kind: string;
  text: string;
  stack: [string, string][];
  video: { src: string; poster: string; width: number; height: number; caption: string };
  shots?: Shot[];
};

/** A split row: the project's facts on the left, its film (and screens) on the right. */
export default function Project({ id, num, name, kind, text, stack, video, shots = [] }: ProjectData) {
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "start 0.35"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <article className="project" aria-labelledby={id}>
      <div className="project__copy">
        <span className="project__num">{num}</span>
        <h3 id={id}>{name}</h3>
        <p className="project__kind">{kind}</p>
        <p className="project__text">{text}</p>
        <dl className="stack">
          {stack.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="project__proof">
        <figure>
          <motion.div ref={frame} className="film stock" style={{ scale }}>
            <LazyVideo {...video} label={`${name} video`} />
          </motion.div>
          <figcaption>{video.caption}</figcaption>
        </figure>
        {shots.length > 0 && (
          <div className="pair">
            {shots.map((s, i) => (
              <figure className="shot" key={s.src}>
                <div className="shot__frame stock" data-reveal="up" style={{ "--i": i } as CSSProperties}>
                  <img src={s.src} srcSet={s.srcSet} sizes="(min-width: 60rem) 28vw, 100vw" width={s.width} height={s.height} alt={s.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
