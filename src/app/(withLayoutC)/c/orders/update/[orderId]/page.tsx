export default function OrderDetailsPage({
  params,
}: {
  params: { orderId: string };
}) {
  return <h1>Order Update Page, order no: {params?.orderId}</h1>;
}
