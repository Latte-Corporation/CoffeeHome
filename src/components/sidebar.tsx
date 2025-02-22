"use client";
import { Button } from "@components/ui/button";
import { HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import Waves from "@components/ui/waves";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];

  return (
    <div className="flex flex-col min-w-64 bg-backgroundSidebar text-primary">
      <div className="bg-primary w-full p-5">
        <h1 className="text-xl font-bold text-[#EDE0D4]">Latté</h1>
      </div>
      <Waves />
      <div className="flex flex-col justify-between h-full px-5 pb-5">
        <nav className="mt-10 flex flex-col gap-4">
          <Button
            className={`flex flex-row items-center justify-start gap-1 h-14`}
            variant={pathname === "" ? "selected" : "default"}
            onClick={() => router.push("/")}
          >
            <HomeIcon className="h-7 w-7" />
            <h2 className="pl-3 text-base">Home</h2>
          </Button>
          {/* <Button
            className={`flex flex-row items-center justify-start gap-1 h-14`}
            variant={pathname === "portfolio" ? "selected" : "default"}
            onClick={() => router.push("/portfolio")}
          >
            <BookOpenIcon className="h-7 w-7" />
            <h2 className="pl-3 text-base">Portfolio</h2>
          </Button> */}
          <Button
            className={`flex flex-row items-center justify-start gap-1 h-14`}
            variant={pathname === "contact" ? "selected" : "default"}
            onClick={() => router.push("/contact")}
          >
            <UserIcon className="h-7 w-7" />
            <h2 className="pl-3 text-base">Contact</h2>
          </Button>
        </nav>
      </div>
    </div>
  );
}
