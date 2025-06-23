export const tenants = [
  {
    id: "1",
    name: "Swamy",
    email: "swamy@mail.com",
    image_url: "/swamy.jpeg",
    roomNumber: "303",
    floor: "3",
    monthlyRent: ["paid", "paid", "paid", "paid", "pending"],
    assignedRent: 8000,
  },
  {
    id: "2",
    name: "Paliwal",
    email: "paliwal@mail.com",
    image_url: "/paliwal.jpeg",
    roomNumber: "404",
    floor: "4",
    monthlyRent: ["paid", "paid", "paid", "paid", "pending"],
    assignedRent: 12000,
  },
];


export const users = [
  {
    name: "Admin",
    email: "admin@mail.com",
    password: "admin", // hash this in real DB
    role: "admin",
  },
];

export const rooms = [
  {
    roomNumber: "303",
    floor: "3",
    sharing: "single_sharing",
    tenantIds: ["1"],
  },
  {
    roomNumber: "404",
    floor: "4",
    sharing: "single_sharing",
    tenantIds: ["2"],
  },
];
