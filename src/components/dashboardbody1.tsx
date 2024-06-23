"use client"
import * as React from 'react'
import { Calendar } from "@/components/ui/calendar"
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Video } from 'lucide-react'

import { cn } from '@/lib/utils'

const popp = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "400"
})

const p = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "600"
})

export default function DashboardBodyOne() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex justify-around px-[8%] h-[65vh]"> 
                <div className="w-full">
                    <Image
                        className="absolute"
                        src="/i7.png"
                        alt=""
                        height={600}
                        width={638}
                    />
                    <div className={cn(popp.variable, "font-sans relative flex flex-col justify-end h-full pl-5 pr-12 pb-7")}>
                        <div className="my-10 pl-5 text-3xl">
                            <p>A smart way to reach the right</p>
                            <p className="pl-12">management.</p>
                        </div>
                        <Link href="/events" className="flex rounded-md bg-yellow-500 px-5 py-3 w-[15vw] text-center text-black"><Video className="mr-2" />Create an Event</Link>
                    </div>
                </div>
                <div className="flex justify-end ml-12 w-full">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className={cn(p.variable, "font-sans border-0")}
                    />
                </div>
        </div>
    );
}