export type Tenant = {
  id: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
  roomNumber: string;
  floor: string;
  monthlyRent: RentStatus[];
  assignedRent: number;
};

type RentStatus = "paid" | "pending";
type Sharing = "single_sharing" | "double_sharing" | "triple_sharing";

export type User = {
  name: string;
  email: string;
  password: string;
  role: "normal" | "admin";
};

export type Rooms = {
  roomNumber: string;
  floor: number;
  tenants: Tenant[];
  sharing: Sharing;
};
