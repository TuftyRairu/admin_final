'use client'

import NavigationBar from "@/components/navigation"
import React from "react";
import { Poppins } from "next/font/google"
import EventsL from "@/components/events-comps/eventsl";
import { Input } from "@/components/ui/input";

export default function Events() {
    return (
        <>
            <NavigationBar title="Events" />
            <div className="w-full flex justify-end py-5 px-5">
                <Input className="rounded-[20px] bg-white text-black w-[15vw]" placeholder="Search Event"/>
            </div>
            <EventsL />
        </>
    );
}
