import Link from "next/link";
import { BiSolidShare, BiShow, BiSolidCommentDetail } from "react-icons/bi";

export default function Reactions() {
  return (
    <div className="absolute bottom-10 flex flex-row gap-x-4  text-white">
      <Link
        className="flex flex-row gap-x-2 items-center hover:opacity-40"
        href="/"
      >
        <BiSolidShare size={30} />
        <span>275</span>
      </Link>
      <Link
        className="flex flex-row gap-x-2 items-center hover:opacity-40"
        href="/"
      >
        <BiShow size={30} />
        <span>275</span>
      </Link>
      <Link
        className="flex flex-row gap-x-2 items-center hover:opacity-40"
        href="/"
      >
        <BiSolidCommentDetail size={30} />
        <span>275</span>
      </Link>
    </div>
  );
}
