import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";
import { fetchCardData } from "../lib/data";

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  tenants: UserGroupIcon,
};

export default async function CardWrapper() {
  //   const {
  //     totalPaidInvoices,
  //     totalPendingInvoices,
  //     numberOfCustomers,
  //     numberOfInvoices,
  //   } = await fetchCardData();
//   const data = await getCollection("rooms");
//   console.log(data);
  return (
    <>
      <Card title="Collected" value={100} type="collected" />
      <Card title="Pending" value={100} type="pending" />
      <Card title="Total Tenants" value={100} type="tenants" />
    </>
  );
}

export async function RoomWrapper() {
  return (
    <>
      <Card title="Collected" value={100} type="collected" />
      <Card title="Pending" value={100} type="pending" />
      <Card title="Total Tenants" value={100} type="tenants" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: string | number;
  type: "collected" | "pending" | "tenants";
}) {
  const Icon = iconMap[type];
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
