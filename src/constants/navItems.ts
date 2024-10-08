import type { navItem } from "@/types/navItem";

import { GiReceiveMoney } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { AiFillDollarCircle, AiFillProfile, AiFillSetting, AiTwotoneSetting } from "react-icons/ai";
import {
  BiCategoryAlt,
  BiNotepad,
  BiSolidDashboard,
  BiSolidBookContent,
} from "react-icons/bi";
import { BsBorderStyle, BsFillChatLeftTextFill, BsFillPersonFill } from "react-icons/bs";

export const CNavItem: navItem[] = [
  { id: 1, title: "Dashboard", url: "/c/dashboard", icon: BiSolidDashboard },
  {
    id: 2,
    title: "Monthly Pay Track",
    url: "/c/paytrack",
    icon: AiFillDollarCircle,
  },
  { id: 3, title: "All users", url: "/c/allUsers", icon: GiReceiveMoney },
  { id: 4, title: "All Orders", url: "/c/orders", icon: BsBorderStyle },

  { id: 5, title: "All Payments", url: "/c/allpayments", icon: BsBorderStyle },

  {
    id: 6,
    title: "Refund",
    url: "/c/refund-payment-checking",
    icon: MdOutlinePayment,
  },

  // { id: 9, title: "Offline Refund P", url: "/pages/notice", icon: BiNotepad },
  {
    id: 7,
    title: "Service",
    url: "/c/services",
    icon: GrTechnology,
  },
  {
    id: 8,
    title: "Category",
    url: "/c/category",
    icon: BiCategoryAlt,
  },
  {
    id: 9,
    title: "Company",
    url: "/c/company",
    icon: BiSolidBookContent,
  },
  {
    id: 10,
    title: "Live Chat",
    url: "/c/liveChat",
    icon: BsFillChatLeftTextFill,
  },
  {
    id: 11,
    title: "Account Suspended",
    url: "/c/suspended",
    icon: BsFillPersonFill,
  },
  {
    id: 12,
    title: "Create Admin",
    url: "/c/createAdmin",
    icon: RiAdminFill,
  },
  {
    id: 13,
    title: "Create Bank Account",
    url: "/c/bankAccount",
    icon: AiFillDollarCircle,
  },
  { id: 14, title: "Setting", url: "/c/setting", icon: AiTwotoneSetting },
  // {
  //   id: 14,
  //   title: "Payment Reception",
  //   url: "/c/payment-reception",
  //   icon: AiFillDollarCircle,
  // },
  {
    id: 15,
    title: "Password Change",
    url: "/c/change-password-admin",
    icon: AiFillSetting,
  },
  {
    id: 16,
    title: "Logout",
    url: "/c/logout",
    icon: GoSignOut,
  },

];
