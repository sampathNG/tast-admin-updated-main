import { FiUsers } from "react-icons/fi";
import { IoIosCodeWorking } from "react-icons/io";
import { BiRupee } from "react-icons/bi";

import {
  RiLuggageDepositFill,
  RiLuggageDepositLine,
  RiPassPendingFill,
  RiSpam2Fill,
} from "react-icons/ri";
import {
  MdPendingActions,
  MdCancelScheduleSend,
  MdIncompleteCircle,
  MdAccountBalanceWallet,
  MdUpcoming,
  MdConfirmationNumber,
} from "react-icons/md";

import type { dashboardData } from "@/types/dashboardData";

export const DashboardData: dashboardData[] = [
  { name: "Total User", icon: FiUsers, number: "198" },
  { name: "Total Orders", icon: MdPendingActions, number: "198" },
  { name: "Total pending orders", icon: IoIosCodeWorking, number: "198" },
  {
    name: "Total payment order",
    icon: MdCancelScheduleSend,
    number: "198",
  },
  { name: "Total waiting order", icon: MdIncompleteCircle, number: "198" },
  { name: "Total working orders", icon: BiRupee, number: "198" },
  {
    name: "Total complete orders",
    icon: MdAccountBalanceWallet,
    number: "198",
  },
  { name: "Total delivery orders", icon: MdUpcoming, number: "198" },
  { name: "Total cancel orders", icon: RiLuggageDepositFill, number: "198" },
  { name: "Total amount  $", icon: RiLuggageDepositLine, number: "198" },
  { name: "Total profit amoun$", icon: RiPassPendingFill, number: "198" },
  {
    name: "Total Arrived amount $",
    icon: MdConfirmationNumber,
    number: "198",
  },
  { name: "Total remaining amount $", icon: RiSpam2Fill, number: "198" },
  { name: "Total online deposit ", icon: RiSpam2Fill, number: "198" },
  { name: "Total online payment amount $ ", icon: RiSpam2Fill, number: "198" },
  { name: "Total pending  payment ", icon: RiSpam2Fill, number: "198" },
  { name: "Total accepted payment", icon: RiSpam2Fill, number: "198" },
  { name: "Total spam payment", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline deposit", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline payment amount $ ", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline Active Check", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline Deactive Check ", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline complete Check ", icon: RiSpam2Fill, number: "198" },
  { name: "Total online refund ", icon: RiSpam2Fill, number: "198" },
  { name: "Total online refund amount $ ", icon: RiSpam2Fill, number: "198" },
  { name: "Total online pending refund ", icon: RiSpam2Fill, number: "198" },
  { name: "Total online sending  refund", icon: RiSpam2Fill, number: "198" },
  { name: "Total online ineligible refund", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline refund ", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline refund amount $ ", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline pending refund ", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline sending  refund", icon: RiSpam2Fill, number: "198" },
  { name: "Total offline ineligible refund", icon: RiSpam2Fill, number: "198" },
  { name: "Total Subscribe", icon: RiSpam2Fill, number: "198" },
  { name: "Total communication", icon: RiSpam2Fill, number: "198" },
  { name: "Total live chat user", icon: RiSpam2Fill, number: "198" },
];
