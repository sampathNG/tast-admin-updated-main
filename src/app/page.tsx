import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/c/dashboard");
  // return (
  //   <>
  //     <DefaultLayout>
  //       <Hero />
  //     </DefaultLayout>
  //   </>
  // );
}
