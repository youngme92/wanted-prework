import Logo from "./Logo";
import Navigation from "./Navigation";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

export default function GlobalNav() {
  return (
    <div className="fixed z-20 bg-white top-0 w-full flex flex-row items-center h-[90px] border-y border-[#EBEBEB]">
      <div>
        <Logo mode="light" />
      </div>
      <div className="hidden sm:hidden lg:block">
        <Navigation />
      </div>
      <div className="fixed right-0 px-[38px] py-[28px]">
        <Link href="/">
          <HiBars3 size={30} />
        </Link>
      </div>
    </div>
  );
}
