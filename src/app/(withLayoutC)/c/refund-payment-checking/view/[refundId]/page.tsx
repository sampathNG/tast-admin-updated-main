import PaymentReceipt from "@/components/ciApp/common/PaymentReceipt";

export default function Page({ params }: { params: { paymentId: string } }) {
  return (
    <div>
      <PaymentReceipt back_url="/c/offlinepayment-checking" />
    </div>
  );
}
