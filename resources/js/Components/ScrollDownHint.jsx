import { useMemo } from "react";

const messages = [
  "Discover the unseen: Scroll down for more",
  "Scroll down and dive deeper",
  "Don't stop now – Keep scrolling for more",
  "Scroll down for a deeper dive",
  "Keep scrolling to expand your horizons",
  "Don't miss a beat – keep scrolling down",
  "Explore further below – Keep scrolling",
  "Keep scrolling, curiosity's best friend",
  "Venture deeper: Scroll on for more ",
  "Delve deeper with every scroll",
];

export default function ScrollDownHint({ className }) {
  const randomInt = useMemo(
    () => Math.floor(Math.random() * messages.length),
    [],
  );

  return (
    <div
      className={`absolute bottom-4  left-1/2 flex w-full -translate-x-1/2 flex-col items-center justify-center gap-2 px-4 ${className}`}
    >
      <p className="text-center font-bold">{messages[randomInt]}</p>
      <svg
        className="hover h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    </div>
  );
}
