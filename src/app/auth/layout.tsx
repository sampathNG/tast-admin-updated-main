import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen overflow-y-scroll sm:py-20 relative">
      <div className="w-full h-full sm:flex items-center justify-center">
        <div className="hidden sm:block">
        
        </div>
        <div className="bg-white h-fit rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-10 py-8">
          {children}
        </div>
      </div>
    </section>
  );
}