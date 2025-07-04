import { SwatchIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";

export default function MainLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <SwatchIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">24K</p>
    </div>
  );
}
