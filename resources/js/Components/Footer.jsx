import ExternalLinks from "./ExternalLinks";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-screen-2xl flex-wrap-reverse items-center justify-between gap-x-8 gap-y-2 px-4 py-2">
        <div className="flex select-none items-center gap-2">
          <div>
            <svg
              className="h-4 w-10"
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
          </div>
          <p className="font-medium">
            © <span className="hidden md:inline">Copyright </span>2023 - Aidan
            Lee
          </p>
        </div>
      </div>
    </footer>
  );
}
