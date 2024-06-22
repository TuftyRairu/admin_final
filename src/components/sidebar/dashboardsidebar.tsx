"use client"

import { Staatliches } from "next/font/google"

import Image from "next/image"
import Link from "next/link"
import { Menu, LayoutDashboard, Calendar } from 'lucide-react';
import { cn } from "@/lib/utils"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
    SheetOverlay,
    SheetPortal
  } from "@/components/ui/sheet";
import { useState } from "react";
import { useRouter, usePathname } from 'next/navigation';

const staat = Staatliches({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "400",
})

export default function SideBar() {
    const [activeLink, setActiveLink] = useState();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="cursor-pointer" asChild>
                <Menu size={40} />
            </SheetTrigger>
            <SheetContent side="left">
            <SheetHeader>
                <SheetTitle className="flex">
                    <Image
                        src="/Gold.png"
                        alt=""
                        height={50}
                        width={50}
                    />
                    <div className={cn(staat.variable, "font-sans flex text-center text-[2rem] my-auto")}>EVENT<p className="ml-1 text-yellow-400">WISE</p></div>
                </SheetTitle>
                <SheetDescription>
                    
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col py-12 pr-12">
                <Link href={"/dashboard"} className="flex rounded-md px-5 py-3 mb-4 text-black hover:bg-white">
                    <LayoutDashboard /><a className={pathname == "/" ? "active" : "bg-yellow-500 "}>
                        Dashboard
                    </a>
                </Link>
                <Link href={"/events"} className="flex rounded-md px-5 py-3 mb-4 text-white hover:bg-white hover:text-black">
                    <Calendar /><a className={pathname == "/" ? "active" : "bg-yellow-500"}>
                        events
                    </a>
                </Link>
                <Link href={"/dashboard"} className="rounded-md px-5 py-3 mb-4 text-white hover:bg-white hover:text-black">Schedule</Link>
                <Link href={"/dashboard"} className="rounded-md px-5 py-3 text-white hover:bg-white hover:text-black">Schedule</Link>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    
                </SheetClose>
            </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}