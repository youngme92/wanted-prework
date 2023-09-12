import type { Config } from "tailwindcss";

interface AddUtilities {
  (config: any): void;
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#F9FAFC",
        primaryColor: "#FF565C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "1079px" },
        lg: { min: "1080px" },
      },
    },
  },
  // TODO 타입 선언 재검토 필요..
  plugins: [
    ({ addUtilities }: { addUtilities: AddUtilities }) => {
      addUtilities({
        ".main-width": {
          "@apply mx-auto grid sm:grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-4 lg:grid-cols-4  lg:min-w-[1440px] lg:max-w-[1440px] md:max-w-[768px] sm:max-w-[375px]":
            "",
        },
        ".card1": {
          // "@apply md:order-1 md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2  lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-4 lg:w-[1012px] lg:h-[581px] md:w-[728px] md:h-[581px] sm:w-[335px] sm:h-[441px]":
          "@apply sm:order-1 md:order-1 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-4 md:h-[581px] sm:h-[441px]":
            "",
        },
        ".card2": {
          "@apply sm:order-4 md:order-7 md:row-start-6 md:row-end-7 md:col-start-2 md:col-end-3 lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-5 md:h-[274px] sm:h-[274px]":
            "",
        },
        ".card3": {
          "@apply sm:order-3 md:order-5 md:row-start-5 md:row-end-6 md:col-start-1 md:col-end-3 lg:row-start-2 lg:row-end-4 lg:col-start-4 lg:col-end-5":
            "",
        },
        ".card4": {
          "@apply sm:order-2 md:order-2 md:row-start-3 md:row-end-5 md:col-start-1 md:col-end-2 lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2":
            "",
        },
        ".card5": {
          "@apply sm:hidden md:hidden lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-4":
            "",
        },
        ".card6": {
          "@apply sm:order-5 md:order-3 md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3 md:h-[274px] sm:h-[274px]":
            "",
        },
        ".card7": {
          "@apply sm:hidden md:order-4 md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-3 lg:row-start-4 lg:row-end-5 lg:col-start-3 lg:col-end-4 md:h-[274px] sm:h-[274px]":
            "",
        },
        ".card8": {
          "@apply sm:hidden md:order-6 md:row-start-6 md:row-end-7 md:col-start-1 md:col-end-2 lg:row-start-4 lg:row-end-5 lg:col-start-4 lg:col-end-5 md:h-[274px] sm:h-[274px]":
            "",
        },
        ".footer-width": {
          "@apply mx-auto lg:max-w-[1440px] md:max-w-[768px] sm:max-w-[375px]":
            "",
        },
        ".image_fit": {
          "@apply absolute w-[100%] h-[100%]": "",
        },
      });
    },
  ],
};
export default config;
