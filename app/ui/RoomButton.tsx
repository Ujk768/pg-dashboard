"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RoomButton({ roomNumber }: { roomNumber: string }) {
  return (
    <Link
      href={``}
      className="rounded-xl bg-gray-100 p-2 shadow-sm md:w-20 font-medium text-center "
    >
      {roomNumber}
    </Link>
  );
}
