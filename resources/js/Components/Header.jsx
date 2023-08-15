import { Link, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    text: "Home",
    href: route("home"),
  },
  {
    text: "About",
    href: route("about"),
  },
  {
    text: "Portfolio",
    href: route("portfolio"),
  },
  {
    text: "Music",
    href: route("music"),
  },
  {
    text: "Blog",
    href: route("blog"),
  },
  {
    text: "Contact",
    href: route("contact"),
  },
];

export default function Header() {
  const authMenu = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);

  const { auth } = usePage().props;

  useEffect(() => {
    function handleMouseOutsideClick(e) {
      if (authMenu.current && !authMenu.current.contains(e.target)) {
        setAuthMenuOpen(false);
      }
    }

    window.addEventListener("click", handleMouseOutsideClick);

    return () => window.removeEventListener("click", handleMouseOutsideClick);
  }, []);

  function toggleMenuOpen(open) {
    setMenuOpen(open ?? !menuOpen);
  }

  return (
    <header className="w-full bg-yellow-mikado">
      <div className="mx-auto flex max-w-screen-2xl justify-between px-4 py-2 md:py-4">
        <div className="flex w-full justify-between md:w-fit">
          <Link
            className="block duration-300 hover:-rotate-6 hover:text-violet-ultra focus:-rotate-6 focus:text-violet-ultra focus:outline-0"
            href="/"
          >
            <svg
              className="h-8 w-20 md:h-16 md:w-40"
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
          </Link>
          <button
            onClick={() => toggleMenuOpen(true)}
            className="group flex flex-col items-center justify-center gap-0.5 rounded-lg px-2 duration-300 hover:gap-1 focus:gap-1 focus:outline-0 focus:ring-2 focus:ring-offset-gray-paynes active:scale-95 md:hidden"
          >
            <div className="h-1 w-8 rounded-3xl bg-black-bean group-hover:bg-violet-ultra group-focus:bg-violet-ultra"></div>
            <div className="h-1 w-6 rounded-3xl bg-black-bean duration-300 group-hover:w-8 group-hover:bg-violet-ultra group-focus:w-8 group-focus:bg-violet-ultra"></div>
            <div className="h-1 w-8 rounded-3xl bg-black-bean group-hover:bg-violet-ultra group-focus:bg-violet-ultra"></div>
          </button>
        </div>
        <div
          className={`menu ${
            !menuOpen ? "translate-x-full md:translate-x-0" : ""
          }`}
        >
          <button
            onClick={() => toggleMenuOpen(false)}
            className="mb-4 rounded-full border-2 border-black-bean p-4 duration-300 hover:border-violet-ultra hover:text-violet-ultra focus:border-violet-ultra focus:text-violet-ultra focus:outline-0 focus:ring-2 focus:ring-gray-paynes md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <nav className="flex flex-col-reverse gap-4 md:flex-row md:items-end">
            <ul className="flex flex-col gap-4 text-4xl font-medium uppercase md:flex-row md:items-center md:text-base">
              {navLinks.map(({ text, href }) => {
                return (
                  <li key={text}>
                    <Link className="nav-link" href={href}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {auth.user ? (
              <div className="relative" ref={authMenu}>
                <button
                  onClick={() => setAuthMenuOpen(!authMenuOpen)}
                  className="flex items-center gap-1 text-base font-medium uppercase duration-300 hover:text-violet-ultra"
                >
                  {auth.user.first_name[0] + auth.user.last_name[0]}
                  <svg
                    className={`duration-300 ${
                      authMenuOpen ? "-rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 320 512"
                    fill="currentColor"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </button>
                <div
                  className={`absolute bottom-0 left-0 flex w-40 origin-top-left translate-y-full flex-col gap-2 rounded-lg bg-black-bean p-4 font-medium uppercase text-yellow-mikado duration-300 md:left-auto md:right-0 md:origin-top-right ${
                    !authMenuOpen ? "pointer-events-none scale-0 opacity-0" : ""
                  }`}
                >
                  <Link className="block" href={route("dashboard")}>
                    Dashboard
                  </Link>
                  <Link
                    className="block text-left uppercase"
                    href={route("logout")}
                    method="post"
                    as="button"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}
