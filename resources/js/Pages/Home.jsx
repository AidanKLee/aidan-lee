import ExternalLinks from "@/Components/ExternalLinks";
import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray("section").forEach((section, i) => {
        const splits = section.querySelectorAll(".split");

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=1024px",
          pin: true,
        });

        splits.forEach((split, i) => {
          const text = new SplitType(split, { types: "chars,words" });

          gsap.from(text.chars, {
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=768px",
              scrub: 1,
            },
            opacity: 0,
            stagger: 0.1,
            scaleY: 0,
            transformOrigin: "top",
            y: -100,
            duration: 1,
          });
        });
      });
    }, container);

    return () => context.revert();
  }, []);

  return (
    <Main>
      <div ref={container}>
        <section className="relative flex h-screen select-none px-4">
          <div className="mx-auto my-auto flex flex-col">
            <svg
              className="mx-auto mb-2 h-16 w-40 md:h-36 md:w-72"
              version="1.2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 506 219"
              width="506"
              height="219"
              fill="currentColor"
            >
              <path d="m88.2 134.8c0 8.6-7.1 15.4-15.7 15.4-8.7 0-15.8-6.8-15.8-15.4 0-8.6 7.1-15.4 15.8-15.4 8.6 0 15.7 6.8 15.7 15.4z" />
              <path d="m12.3 201.9c-6.3 2.9-4.8-16.5-4.6-18.1 4.3-36.3 47.5-149.6 78.7-168.1 14.2-8.5 25.8 1.5 29.2 16.3 2 9 3.1 25.7 4.7 36.1 4.8 29.3 13.3 74.3 48.4 80.2 28.1 4.6 88.7-16.5 117.9-23.9 64.4-16.4 135.6-22 195.8 11.8 7 3.9 7.5 4 13.1 9.7-7.8-0.8-8.4-1.4-15.8-3.6-62.2-19.2-109.5-16.9-171.4 1-36.9 10.6-89.5 33.1-125.6 35.7-75.8 5.6-87.4-73.1-90.5-130.9-0.2-2.6-0.4-4.8-0.6-6.9-7.2 8-17.3 23.1-19.9 27.4-12.7 20-64 114.3-59.4 133.3zm84.9-165.4c0.2 0 0.4-0.1 0.7-0.2-0.3 0-0.5 0.1-0.7 0.2z" />
            </svg>
            <ExternalLinks className="mx-auto" />
            <h1 className="split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Aidan Lee
            </h1>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-2">
              <p className="text-center font-bold">
                Discover the Unseen: Scroll down for more
              </p>
              <svg
                className="hover h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
        </section>
        <section className="flex h-screen select-none bg-black-bean px-4 text-white-smoke">
          <div className="mx-auto my-auto">
            <p className="split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Full Stack Developer
            </p>
            <p className="split text-center uppercase tracking-widest lg:text-2xl">
              Ignite, Create, Innovate: Giving Wings to Ideas!
            </p>
          </div>
        </section>
        <section className="flex h-screen select-none bg-violet-ultra px-4 text-white-smoke">
          <div className="mx-auto my-auto">
            <p className="split text-center font-serif text-2xl italic lg:text-5xl">
              "Pixels and Purpose: Forging Connections Beyond the Screen."
            </p>
          </div>
        </section>
        <section className="flex h-screen select-none px-4">
          <div className="mx-auto my-auto">
            <p className="split mb-8 text-center text-2xl font-bold lg:text-5xl">
              Dive Deeper into the Experience!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base">
              <Link className="btn btn-primary" href={route("about")}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="20"
                    width="20"
                    fill="currentColor"
                  >
                    <path d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z" />
                  </svg>
                </div>
                <span>About</span>
              </Link>
              <Link
                className="btn btn-secondary hidden sm:flex"
                href={route("portfolio")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  fill="currentColor"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>
                <span>Portfolio</span>
              </Link>
              <Link className="btn btn-secondary" href={route("about")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  fill="currentColor"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
