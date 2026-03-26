import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-fuchsia-500 text-white font-black text-2xl shadow-[0_6px_20px_rgba(240,56,144,0.35)] ring-2 ring-white/40">
      U
    </Link>
  );
};

export default Logo;
