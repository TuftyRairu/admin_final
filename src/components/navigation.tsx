import SideBar from "@/components/sidebar/dashboardsidebar";
import Link from "next/link";
import { Bell, Mail } from "lucide-react";
import { Staatliches } from "next/font/google";

import { cn } from "@/lib/utils";


const staat = Staatliches({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "400",
})

export default function NavigationBar(props: any) {
    return (
        <nav className="flex justify-between h-[10vh] px-5 py-3">
                <div className="flex">
                    <SideBar />
                    <p className={cn(staat.variable, "font-sans ml-8 my-auto text-3xl")}>{props.title}</p>
                </div>

                <div className="flex my-auto">
                    <div className="flex mr-[13vw]">
                        <Link href={"/"} className="mx-2"><Bell /></Link>
                        <Link href={"/"} className="mx-2"><Mail /></Link>
                    </div>
                    <div>
                        asdasd
                    </div>
                </div>
        </nav>
    );
}