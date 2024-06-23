import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

import EventsTable from "./tables/eventstable";
import EventBookingTable from "./tables/eventbookingtable";



export default function EventList() {


    return (
        <Tabs defaultValue="events" className={cn(popp.variable,"font-sans")}>
            <TabsList className="border-0 bg-transparent flex items-center">
                <TabsTrigger className="data-[state=active]:border-b-2 rounded-none text-[23px]" value="events">Events</TabsTrigger>
                <TabsTrigger className="ml-12 data-[state=active]:border-b-2 rounded-none text-[23px]" value="event_booking">Event Booking</TabsTrigger>
                <div className="ml-auto">
                     <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Create Event</button>
                </div>
            </TabsList>
            <TabsContent value="events">
                <EventsTable />
            </TabsContent>
            <TabsContent value="event_booking">
                <EventBookingTable />
            </TabsContent>
        </Tabs>
    );
}