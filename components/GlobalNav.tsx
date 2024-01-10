import Logo from "./Logo";
import Navigation from "./Navigation";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import OpenMenuBtn from "./openMenuBtn";

const navigationItems = [
  "technology",
  "Ideas",
  "LEADERSHIP",
  "VIDEO",
  "NEWS",
  "Finance",
  "ENTERTAINMENT",
];

export default function GlobalNav() {
  return (
    <header className="fixed left-0 top-0 w-full z-10 bg-lightColor h-[4.4rem] divide-y">
      <div className="flex h-full justify-between items-center mx-0 my-auto">
        <Logo />
        <OpenMenuBtn />
        <nav className="absolute w-full left-0 top-[5.1rem] h-0 overflow-hidden shadow-nav bg-lightColor will-change-left-top transition-all ease-out duration-300 ">
          <ul>
            {navigationItems.map((item, index) => {
              return (
                <li className="" key={index}>
                  <a
                    href=""
                    className="flex h-[2.7rem] items-center text-base text-darkColor font-medium px-[1rem] py-0"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <Navigation /> */}
      </div>
      {/* <div className="hidden sm:hidden lg:block">
        </div>
        <div className="fixed right-0 px-[38px] py-[28px]">
          <Link href="/">
            <HiBars3 size={30} />
          </Link>
        </div> */}
    </header>
  );
}
