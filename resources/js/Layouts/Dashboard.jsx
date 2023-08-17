import { Link, usePage } from "@inertiajs/react";

export default function Dashboard() {
  const { auth } = usePage().props;

  return (
    <div className="bg-white-smoke bg-opacity-30 shadow-lg">
      <ul className="container flex">
        <li>
          <Link
            className="flex w-fit items-center gap-2 px-4 py-3 font-bold uppercase duration-300 hover:bg-violet-ultra hover:text-white-smoke focus:bg-violet-ultra focus:text-white-smoke focus:outline-0"
            href={route("dashboard.profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <span className="hidden xs:inline">Profile</span>
          </Link>
        </li>
        {auth.user.admin > 0 ? (
          <li>
            <Link
              className="flex w-fit items-center gap-2 px-4 py-3 font-bold uppercase duration-300 hover:bg-violet-ultra hover:text-white-smoke focus:bg-violet-ultra focus:text-white-smoke focus:outline-0"
              href={route("dashboard.music")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
              </svg>
              <span className="hidden xs:inline">Music</span>
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
