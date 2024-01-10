import Link from "next/link";
import Logo from "@/components/Logo";
import {
  BiLogoInstagramAlt,
  BiLogoPinterestAlt,
  BiLogoTwitter,
  BiLogoFacebook,
} from "react-icons/bi";

const navigationItems = [
  "technology",
  "Ideas",
  "LEADERSHIP",
  "VIDEO",
  "NEWS",
  "Finance",
  "ENTERTAINMENT",
];

export default function Footer() {
  return (
    <footer className="bottom-0 footer-width bg-[#1D1F24] h-auto pb-5 flex flex-row justify-between items-center flex-wrap gap-y-1">
      <div className="flex flex-col items-start text-white">
        <Logo />
        <span className="text-sm font-light px-[38px] opacity-70">
          © 2018 Deck
        </span>
        <span className="text-sm font-light px-[38px] opacity-70">
          Component based UI Kit
        </span>
      </div>
      <div className="order-3 md:order-2 lg:order-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center px-10 gap-x-12 text-white">
        {navigationItems.map((item, index) => (
          <Link href="/" className="block " key={item}>
            <div className="uppercase font-medium text-sm hover:opacity-20">
              {item}
            </div>
          </Link>
        ))}
      </div>
      <div className="order-2 md:order-3 lg:order-3 flex flex-col px-10  items-start gap-y-3 my-3">
        <div className="flex flex-row gap-x-2 text-white opacity-70">
          <div className="text-sm">Follow us:</div>
          <Link href="/">
            <BiLogoInstagramAlt size={20} />
          </Link>
          <Link href="/">
            <BiLogoPinterestAlt size={20} />
          </Link>
          <Link href="/">
            <BiLogoTwitter size={20} />
          </Link>
          <Link href="/">
            <BiLogoFacebook size={20} />
          </Link>
        </div>
        <div className="flex flex-row relative">
          <input
            className="bg-white text-[#1D1F24] text-opacity-40 text-sm p-2 px-4 w-80"
            type="text"
            placeholder="Your E-mail"
          />
          <button className="bg-primaryColor w-28 h-9 absolute right-0 uppercase font-medium text-xs">
            subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
