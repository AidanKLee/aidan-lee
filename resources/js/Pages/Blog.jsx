import Main from "@/Layouts/Main";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

export default function Blog() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const splits = document.querySelectorAll(".split");
      const timeline = gsap.timeline();

      splits.forEach((split) => {
        const text = new SplitType(split, { types: "chars,words" });

        timeline.from(text.chars, {
          opacity: 0,
          stagger: 0.1,
          scaleY: 0,
          transformOrigin: "top",
          y: -100,
          duration: 0.5,
        });
      });
    }, container);

    return () => context.revert();
  }, []);

  return (
    <Main>
      <div className="flex grow" ref={container}>
        <section className="flex grow select-none">
          <div className="mx-auto my-auto">
            <h1 className="split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Blog
            </h1>
            <p className="split text-center uppercase tracking-widest lg:text-2xl">
              Stay curious: The unveiling is coming soon
            </p>
          </div>
        </section>
      </div>
    </Main>
  );
}
