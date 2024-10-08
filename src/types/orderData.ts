export interface OrderData {
  sl: number;
  id: number;
  applicantsName: string;
  projectName: string;
  dateOfOrder: string;
  projectAmount: number;
  totalPaidAmount: number;
  moneyLeft: number;
  projectDeliveryDay: string;
  profit: number;
  status: "Pending" | "Waiting" | "Working" | "Completed" |  "Delivery"| "Cancel" | "Payment";
  view?: string;
}
