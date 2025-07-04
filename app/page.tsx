import MainLogo from "./ui/MainLogo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-30 md:h-40 bg-black p-4 sm:p-6">
        <MainLogo />
      </div>
      <div className="flex">
        <div className="flex flex-col gap-5 rounded-lg bg-gray-50 px-6 py-10  md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to 24K PG</strong>
          </p>
          <p>Track all your PG expenses and services at one place</p>
          <p>Track all your PG expenses and services at one place</p>
          <p>Track all your PG expenses and services at one place</p>
          <p>Track all your PG expenses and services at one place</p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/24k-pg.webp"
            width={500}
            height={200}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
