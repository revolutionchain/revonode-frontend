//import images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import img1 from '../../assets/images/products/img-1.png';
import img2 from '../../assets/images/products/img-2.png';
import img3 from '../../assets/images/products/img-3.png';
import img4 from '../../assets/images/products/img-4.png';
import img5 from '../../assets/images/products/img-5.png';

const recentUsers = [
  {
    id: "#SD001",
    name: "Anna Ciantar",
    jobTitle: "Designer",
    avatar: avatar1,
    email: "annac@hotmai.us",
    phone: "(216) 76 298 896",
    status: "Active",
    statusColor: "success",
    location: "Philippines"
  },
  {
    id: "#SD002",
    name: "Paul J. Friend",
    jobTitle: "Developer",
    avatar: avatar2,
    email: "pauljfrnd@jourrapide.com",
    phone: "937-330-1634",
    status: "Active",
    statusColor: "success",
    location: "New York"
  },
  {
    id: "#SD003",
    name: "Kathryn S. Collier",
    jobTitle: "Owner",
    avatar: avatar3,
    email: "annac@hotmai.us",
    phone: "(216) 76 298 896",
    status: "Active",
    statusColor: "success",
    location: "Philippines"
  },
  {
    id: "#SD004",
    name: "Labeeb Ghali",
    jobTitle: "Designer",
    avatar: avatar4,
    email: "labebswad@teleworm.us",
    phone: "050 414 8778",
    status: "Blocked",
    statusColor: "danger",
    location: "United Kingdom"
  },
  {
    id: "#SD005",
    name: "Timothy Kauper",
    jobTitle: "Founder",
    avatar: avatar5,
    email: "thykauper@rhyta.com",
    phone: "(216) 75 612 706",
    status: "Active",
    statusColor: "success",
    location: "Denmark"
  },
];

const latestTransaction = [
  {
    id: 1,
    name: "Herbert C. Patton",
    avatar: avatar1,
    statusColor: "success",
    status: "Confirm",
    price: "14,584",
    date: "5/12/2016"
  },
  {
    id: 2,
    name: "Mathias N. Klausen",
    avatar: avatar2,
    statusColor: "warning",
    status: "Waiting payment",
    price: "8,541",
    date: "10/11/2016"
  },
  {
    id: 3,
    name: "Nikolaj S. Henriksen",
    avatar: avatar3,
    statusColor: "success",
    status: "Confirm",
    price: "954",
    date: "8/11/2016"
  },
  {
    id: 4,
    name: "Lasse C. Overgaard",
    avatar: avatar4,
    statusColor: "danger",
    status: "Payment expired",
    price: "44,584",
    date: "7/11/2016"
  },
  {
    id: 5,
    name: "Kasper S. Jessen",
    avatar: avatar5,
    statusColor: "success",
    status: "Confirm",
    price: "8,844",
    date: "1/11/2016"
  },
];

const latestOrders = [
  {
    id: "#12354781",
    image: img1,
    name: "Riverston Glass Chair",
    status: "Delivered",
    statusColor: "success",
    price: "185",
    date: "5/12/2016"
  },
  {
    id: "#52140300",
    image: img2,
    name: "Shine Company Catalina",
    status: "Delivered",
    statusColor: "success",
    price: "1,024",
    date: "5/12/2016"
  },
  {
    id: "#96254137",
    image: img3,
    name: "Trex Outdoor Furniture Cape",
    status: "Cancel",
    statusColor: "danger",
    price: "657",
    date: "5/12/2016"
  },
  {
    id: "#12365474",
    image: img4,
    name: "Oasis Bathroom Teak Corner",
    status: "Shipped",
    statusColor: "warning",
    price: "8451",
    date: "5/12/2016"
  },
  {
    id: "#85214796",
    image: img5,
    name: "BeoPlay Speaker",
    status: "Delivered",
    statusColor: "success",
    price: "584",
    date: "5/12/2016"
  },
]

export { recentUsers, latestTransaction, latestOrders };
