import ExternalLinks from "@/Components/ExternalLinks";
import Main from "@/Layouts/Main";
import { Link } from "@inertiajs/react";

export default function Home() {
  return (
    <Main>
      <section className="flex grow">
        <div className="container flex grow select-none flex-col items-center justify-center px-4">
          <div className="flex flex-col gap-4 text-xl font-black uppercase xs:text-3xl sm:text-5xl lg:text-7xl">
            <div>
              <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-9xl">
                Aidan Lee
              </h1>
              <p>Full Stack Developer</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-base">
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
                href={route("about")}
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
            <ExternalLinks />
          </div>
        </div>
      </section>
    </Main>
  );
}
