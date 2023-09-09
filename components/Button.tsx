import clsx from "clsx";

interface ButtonProps {
  color: "primary" | "white" | "tertiary";
  text: string;
}

export default function Button({ color, text }: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-primaryColor text-base font-semibold border-white border w-[210px] h-[60px]",
        {
          "text-primaryColor": color === "primary",
          "text-white": color === "white",
        }
      )}
    >
      {text}
    </button>
  );
}
