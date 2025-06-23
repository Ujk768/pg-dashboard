"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RoomButton({ floorNumber }: { floorNumber: string }) {
  return (
    <Link
      href={`/dashboard/floor/${floorNumber}`}
      className="rounded-md bg-gray-100 p-2 shadow-sm w-40 lg:w-20 font-medium text-center "
    >
      {floorNumber}
    </Link>
  );
}
