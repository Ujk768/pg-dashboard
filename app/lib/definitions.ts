export type Tenant = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  roomNumber: string;
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
  tenants: Tenant[];
  sharing: Sharing;
};
