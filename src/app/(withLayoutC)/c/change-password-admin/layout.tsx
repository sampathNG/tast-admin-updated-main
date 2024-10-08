import Image from "next/image";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-fit max-w-[700px] mx-auto sm:py-20 relative">
      <div className="w-full h-full flex sm:flex items-center justify-center">
        <div className="hidden sm:block">
        
        </div>
        <div className="bg-white h-fit rounded-none sm:rounded-[40px] 2xl:py-[4.625rem] sm:px-10 py-8">
          {children}
        </div>
      </div>
    </section>
  );
}