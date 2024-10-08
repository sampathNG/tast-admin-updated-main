export type IPayment = {
  sl: number;
  paymentID: string;
  ProjectName: string;
  paymentType: string;
  accountName: string;
  accountNumber: string;
  transactionId: string;
  payAmount : number;
  paymentDay: string;
  status: string;

}
export type IRefundPayment = {
  sl: number;
  refundId: string;
  projectName: string;
  refundMethod: string;
  accountName: string;
  accountNumber: string;
  refundAmount: number;
  refundDay: string;
  status: string;
};
