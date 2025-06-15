import { Suspense } from "react";
import { lusitana } from "../fonts";
import { CardSkeleton } from "../ui/skeletons";
import CardWrapper from "../ui/Cards";
import RoomButton from "../ui/RoomButton";

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div>
        <h3 className={`${lusitana.className} mb-4 text-xl md:text-2xl p-6`}>
          Check out information per room
        </h3>
      </div>
      <div className="flex flex-row gap-10">
        <RoomButton roomNumber="1" />
        <RoomButton roomNumber="2" />
        <RoomButton roomNumber="3" />
        <RoomButton roomNumber="4" />
        <RoomButton roomNumber="5" />
      </div>
    </main>
  );
}
