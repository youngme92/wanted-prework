interface LogoProps {
  mode: "dark" | "light";
}
import clsx from "clsx";

export default function Logo({ mode }: LogoProps) {
  return (
    <div
      className={clsx("flex flex-row items-end px-[38px] py-[28px]", {
        "pb-[10px]": mode === "dark",
      })}
    >
      <span
        className={clsx("font-bold text-xl", {
          "text-[#F9FAFC] opacity-20": mode === "dark",
          "text-[#1D1F24]": mode === "light",
        })}
      >
        Deck
      </span>
      <span className="bg-primaryColor block  w-1 h-1 text-xl"></span>
    </div>
  );
}
