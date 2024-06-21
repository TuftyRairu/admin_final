"use client";
import * as React from "react"

import { Staatliches as Staat, Montserrat as Mont, Poppins as Popp } from "next/font/google";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const f = Staat({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: "400",
})

const fm = Mont({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: "400",
})

const pop = Popp({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: "600",
})

import { cn } from "@/lib/utils"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LayoutDashboard, CalendarCheck, Settings, Bell, Mail } from "lucide-react";
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Landing() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return (
    <NavigationMenu className="grid grid-cols-12 gap-x-0 text-right mr-10">
      <NavigationMenuList className="w-20">
        <Sheet>
          <SheetTrigger><Menu className="h-10 w-10 mt-3.5 ml-4" /></SheetTrigger>
          <SheetContent side={"left"} className="grid-flow-row grid-cols-[1fr_auto] gap-0 content-start">
            <div className="grid grid-flow-column grid-cols-[1fr_auto] gap-0 w-full content-center">
              <Image
                className=""
                src="/Gold.png"
                alt="Picture of the author"
                width={80}
                height={80}
                />
                <p className={cn(f.variable, "grid grid-flow-row grid-cols-[1fr_auto] mt-3 mr-12 font-sans truncate text-5xl")}><p className="mr-4 text-yellow-400">Event</p><p>Wise</p></p>
            </div>
            <div className="grid grid-flow-column grid-cols-1 pt-6 pr-28 h-2/4">
              <Link href={"/"} className={cn(fm.variable, "font-sans rounded-md grid grid-cols-2 gap-x-0 px-5 flex align-middle items-center border-0 hover:bg-gray-400")}><LayoutDashboard className="h-5 w-5 mt-0 ml-2 mr-3" /> Dashboard</Link>
              <Link href={"/schedule"} className={cn(fm.variable, "font-sans rounded-md grid grid-cols-2 gap-x-0 px-5 flex align-middle items-center border-0 hover:bg-gray-400")}><CalendarCheck className="h-5 w-5 mt-0 ml-2 mr-3" /> Schedule</Link>
              <Link href={"/events"} className={cn(fm.variable, "font-sans rounded-md grid grid-cols-2 gap-x-0 px-5 flex align-middle items-center border-0 text-black bg-amber-300")}><CalendarCheck className="h-5 w-5 mt-0 ml-2 mr-3" /> Events</Link>
              <Link href={"/"} className={cn(fm.variable, "font-sans rounded-md grid grid-cols-2 gap-x-0 px-5 flex align-middle items-center border-0 hover:bg-gray-400")}><Menu className="h-5 w-5 mt-0 ml-2 mr-3" /> <p className="w-[81%]">Service Providers</p></Link>
              <Link href={"/"} className={cn(fm.variable, "font-sans rounded-md grid grid-cols-2 gap-x-0 px-5 flex align-middle items-center border-0 hover:bg-gray-400")}><Settings className="h-5 w-5 mt-0 ml-2 mr-3" /> Settings</Link>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenuList>
      <NavigationMenuList className="flex justify-between">
        <h1 className={cn(pop.variable, "font-sans mt-5 text-3xl")}>Events</h1>
      </NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="flex justify-center">
        <Link href={""} className="mr-3"><Bell /></Link>
        <Link href={""}><Mail /></Link>
      </NavigationMenuList>
      <NavigationMenuList className="w-[100%]"></NavigationMenuList>
      <NavigationMenuList className="flex justify-center">
        <Select>
          <SelectTrigger className="w-[85px] h-6 border border-0 bg-transparent">
            <SelectValue placeholder="Admin" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="logout">logout</SelectItem>
          </SelectContent>
        </Select>
        <Image
          className="rounded-[90%]"
          src="/Gold.png"
          alt="profile"
          height={40}
          width={40}
        />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
