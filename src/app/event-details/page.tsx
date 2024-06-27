'use client'

import NavigationBar from "@/components/navigation"
import * as React from "react"
import { Poppins } from "next/font/google"
import Details from "@/components/events-comps/details";

export default function EventDetails() {
    return (
        <>
            <NavigationBar title="Event Details" />
            <Details/>
        </>
    );
}
