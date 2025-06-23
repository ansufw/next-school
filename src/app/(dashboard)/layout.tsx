import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>

        <div className="flex h-screen">

          {/* sidebar */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
            <Link href={"/"} className="flex justify-center items-center lg:justify-start gap-2">
              <Image src={"/images/logo.png"} alt="school logo" width={32} height={32} />
              <span className="hidden lg:block">NextSchool</span>
            </Link>
            <Sidebar />
          </div>

          {/* main content */}
          <div className="w-[86%] m:w-[92%] l:w-[84%] xl:w-[86%]">

          </div>
        </div>
            {children}

        <Sidebar />
    </div>
  ;
}
