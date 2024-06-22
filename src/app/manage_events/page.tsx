'use client'

import NavigationBar from "@/components/navigation"
import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import { Poppins } from "next/font/google"
import Input from "@/components/ui/event_search"


import { cn } from "@/lib/utils";


const poppins = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function Events() {
    return (
        <main>
            <NavigationBar />
            <div className="flex items-end justify-end w-11/12 mr-auto mt-10">
                <Input></Input>
            </div>
            <div className="flex h-[75vh] border-white ml-14 mr-14">
                <div className="flex w-full flex-col-2">
                    <div className="w-full">
                        <Tabs aria-label="Options" variant="underlined" className="">
                            <Tab key="events" title="Events" className={cn(poppins.variable, "font-sans", "text-white", "text-2xl")}>
                                <div className="h-[25vh] border-1">
                                </div>
                            </Tab>
                            <Tab key="event booking" title="Event Booking" className={cn(poppins.variable, "font-sans", "text-white", "text-2xl")}>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>
    );
}