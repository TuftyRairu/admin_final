'use client'

import NavigationBar from "@/components/navigation"
import * as React from "react"
import { Poppins } from "next/font/google"
import EventsL from "@/components/events-comps/eventsl";
import { Input } from "@/components/ui/input";
import CreateEventForm from "@/components/events-comps/createevent"

export default function CreateEvent() {
    return (
        <>
            <NavigationBar title="Events" />
            <CreateEventForm/>
        </>
    );
}
