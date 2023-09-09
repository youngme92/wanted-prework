import Link from "next/link";

const navigationItems = [
  "technology",
  "Ideas",
  "LEADERSHIP",
  "VIDEO",
  "NEWS",
  "Finance",
  "ENTERTAINMENT",
];

export default function Navigation() {
  return (
    <div className="flex flex-row px-4 gap-x-14 text-[#1D1F24]">
      {navigationItems.map((item, index) => (
        <Link href="/" key={item}>
          <div className="uppercase font-medium text-sm opacity-25 hover:opacity-100">
            {item}
          </div>
        </Link>
      ))}
    </div>
  );
}
