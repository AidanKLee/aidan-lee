import ScrollDownHint from "@/Components/ScrollDownHint";
import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {}, container);
    const individualSplit = document.querySelector(".individual-split");
    const text = new SplitType(individualSplit, { types: "chars,words" });

    gsap.from(text.chars, {
      opacity: 0,
      stagger: 0.1,
      scaleY: 0,
      transformOrigin: "top",
      y: -100,
      duration: 1,
    });

    gsap.utils.toArray("section").forEach((section, i) => {
      const splits = section.querySelectorAll(".split");
      const buttons = section.querySelectorAll(".btn");
      const timeline = gsap.timeline();

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1024px",
        pin: true,
      });

      splits.forEach((split, i) => {
        const text = new SplitType(split, { types: "chars,words" });

        timeline.from(text.chars, {
          opacity: 0,
          stagger: 0.1,
          scaleY: 0,
          transformOrigin: "top",
          y: -100,
          duration: 1,
        });
      });

      if (buttons.length) {
        timeline.from(buttons, {
          opacity: 0,
          stagger: 0.1,
          duration: 1,
        });
      }

      ScrollTrigger.create({
        animation: timeline,
        trigger: section,
        start: "top top",
        end: "+=768px",
        scrub: 1,
      });
    });

    return () => context.revert();
  }, []);

  return (
    <Main>
      <div ref={container}>
        <section className="relative flex h-screen select-none px-4">
          <div className="mx-auto my-auto">
            <h1 className="individual-split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Portfolio
            </h1>
            <p className="split text-center uppercase tracking-widest lg:text-2xl">
              Ideas given life: View my work
            </p>
            <ScrollDownHint />
          </div>
        </section>
        <section className="relative flex min-h-screen select-none overflow-hidden bg-white-smoke px-4 text-black-bean">
          <div className="mx-auto my-auto gap-8">
            <div>
              <h2 className="split mb-8 max-w-screen-md select-none text-3xl font-medium uppercase sm:text-6xl">
                <a
                  href="https://www.smartmoneypeople.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Smart Money People
                </a>
              </h2>
              <p className="split mb-4 uppercase">
                Frontend | Backend @ We Create Digital
              </p>
              <p className="split mb-8 max-w-screen-md font-serif italic sm:text-3xl">
                Gain profound insights into the financial sector on this reviews
                and awards platform. Uncover top-tier services, celebrate
                industry trailblazers, insightful analysis, and remarkable
                contributions that drive financial success.
              </p>
              <a
                className="btn btn-quarternary"
                href="https://www.smartmoneypeople.com"
                target="_blank"
                rel="noreferrer"
              >
                View more
              </a>
              <ScrollDownHint />
            </div>
          </div>
        </section>
        <section className="relative flex min-h-screen select-none overflow-hidden bg-black-bean px-4 text-white-smoke">
          <div className="mx-auto my-auto gap-8">
            <div>
              <h2 className="split mb-8 max-w-screen-md select-none text-3xl font-medium uppercase sm:text-6xl">
                <a
                  href="https://www.aidanklee.co.uk/3d"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aidan Lee 3D Porfolio
                </a>
              </h2>
              <p className="split mb-4 uppercase">Frontend | Backend</p>
              <p className="split mb-8 max-w-screen-md font-serif italic sm:text-3xl">
                Unveil my 3D Animated Developer Portfolio – a fusion of code and
                creativity. Explore immersive animations, interact with dynamic
                UIs, and dive into the tech behind the magic. Join me on a
                visual odyssey where creativity and code coexist.
              </p>
              <a
                className="btn btn-tertiary"
                href="https://www.aidanklee.co.uk/3d"
                target="_blank"
                rel="noreferrer"
              >
                View more
              </a>
              <ScrollDownHint className="text-white-smoke" />
            </div>
          </div>
        </section>
        <section className="relative flex min-h-screen select-none overflow-hidden bg-violet-ultra px-4 text-white-smoke">
          <div className="mx-auto my-auto gap-8">
            <div>
              <h2 className="split mb-8 max-w-screen-md select-none text-3xl font-medium uppercase sm:text-6xl">
                <a
                  href="https://www.aidanklee.co.uk/gazetteer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gazetteer App
                </a>
              </h2>
              <p className="split mb-4 uppercase">Frontend | Backend</p>
              <p className="split mb-8 max-w-screen-md font-serif italic sm:text-3xl">
                Travel the world from your device with our Gazetteer app.
                Discover facts about cities, regions, and landmarks, all at your
                fingertips. Navigate maps, delve into details, and embrace the
                world's diversity.
              </p>
              <a
                className="btn btn-quarternary"
                href="https://www.aidanklee.co.uk/gazetteer/"
                target="_blank"
                rel="noreferrer"
              >
                View more
              </a>
              <ScrollDownHint className="text-white-smoke" />
            </div>
          </div>
        </section>
        <section className="relative flex min-h-screen select-none overflow-hidden bg-gray-paynes px-4 text-white-smoke">
          <div className="mx-auto my-auto gap-8">
            <div>
              <h2 className="split mb-8 max-w-screen-md select-none text-3xl font-medium uppercase sm:text-6xl">
                <a
                  href="https://www.aidanklee.co.uk/companydirectory/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Directory App
                </a>
              </h2>
              <p className="split mb-4 uppercase">Frontend | Backend</p>
              <p className="split mb-8 max-w-screen-md font-serif italic sm:text-3xl">
                Elevate your professional interactions and navigate your
                company's ecosystem effortlessly with our directory app.
                Seamlessly identify coworkers, access vital information, and
                foster a cohesive workplace environment.
              </p>
              <a
                className="btn btn-tertiary"
                href="https://www.aidanklee.co.uk/companydirectory/"
                target="_blank"
                rel="noreferrer"
              >
                View more
              </a>
              <ScrollDownHint className="text-white-smoke" />
            </div>
          </div>
        </section>
        <section className="relative flex h-screen select-none px-4">
          <div className="mx-auto my-auto">
            <p className="split mb-8 max-w-screen-md select-none text-center text-3xl font-medium uppercase sm:text-6xl">
              There's more to come...
            </p>
            <p className="split mb-4 max-w-screen-md text-center uppercase tracking-widest sm:text-3xl">
              In the meantime take a look at my
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link className="btn btn-primary" href={route("home")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z" />
                </svg>
                Music
              </Link>
              <Link className="btn btn-secondary" href={route("home")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                >
                  <path d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z" />
                </svg>
                Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
