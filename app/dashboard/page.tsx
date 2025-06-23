import { Suspense } from "react";
import { lusitana } from "../fonts";
import { CardSkeleton } from "../ui/skeletons";
import CardWrapper from "../ui/Cards";
import RoomButton from "../ui/RoomButton";
import Menu from "../ui/Menu";

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
          Check out information per Floor
        </h3>
      </div>
      <div className="flex flex-row gap-5 sm:flex-column">
        <RoomButton floorNumber="1" />
        <RoomButton floorNumber="2" />
        <RoomButton floorNumber="3" />
        <RoomButton floorNumber="4" />
        <RoomButton floorNumber="5" />
      </div>
      <div className="mt-4">
        <Menu/>
      </div>
    </main>
  );
}
