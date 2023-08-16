import { useFetch } from "@/Hooks/useFetch";
import Main from "@/Layouts/Main";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

export default function Blog() {
  const container = useRef(null);

  const { data, setData, post, processing, reset } = useFetch({
    name: "",
    email: "",
    message: "",
  });

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

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await post("/api/contact");

    if (data.success) {
      reset();
    }
    console.log(data);
  }

  return (
    <Main>
      <div className="flex grow" ref={container}>
        <section className="flex grow select-none px-4">
          <div className="mx-auto my-auto">
            <h1 className="split text-center text-4xl uppercase xs:text-5xl sm:text-7xl lg:text-9xl">
              Contact
            </h1>
            <p className="split mb-8 text-center uppercase tracking-widest lg:text-2xl">
              Want to get in touch? I'm excited to hear from you!
            </p>
            <form
              className="mx-auto flex max-w-md flex-col gap-4 font-bold"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name">Name *</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />
              </div>
              {/* <div>
                <label htmlFor="phone">Phone</label>
                <input
                  className="w-full rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="phone"
                  name="phone"
                />
              </div> */}
              <div>
                <label htmlFor="message">Message *</label>
                <textarea
                  className="h-24 w-full resize-none rounded-md border-0 focus:outline-0 focus:ring-2 focus:ring-violet-ultra"
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={(e) => setData("message", e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex flex-wrap justify-end gap-4">
                <button
                  className="btn btn-primary disabled:opacity-50"
                  type="submit"
                  disabled={processing}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                  </svg>
                  Submit
                </button>
                <button className="btn btn-secondary" type="reset">
                  Clear
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Main>
  );
}
