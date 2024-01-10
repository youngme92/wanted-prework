import clsx from "clsx";

export default function Logo() {
  return (
    <h1>
      <a
        className="
        relative block text-darkColor font-bold text-2xl ml-[1.3rem] pr-[0.3rem] hover:underline focus:underline
        after:content-[''] after:absolute after:right-0 after:bottom-[0.7rem] after:w-[0.25rem] after:h-[0.25rem] after:bg-pointColor
        "
        href="/"
      >
        Deck
      </a>
    </h1>
  );
}
