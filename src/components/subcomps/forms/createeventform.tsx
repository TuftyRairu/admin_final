import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { EventInput } from "@/components/ui/event-input";
import { AddImage } from "@/components/ui/add-image";

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function EventForm() {
    return (
        <Tabs defaultValue="events" className={cn(popp.variable,"font-sans")}>
            <TabsList className="border-0 bg-transparent">
                <TabsTrigger className="data-[state=active]:border-b-2 rounded-none text-[23px]" value="events">Events</TabsTrigger>
                <TabsTrigger className="ml-12 data-[state=active]:border-b-2 rounded-none text-[23px]" value="create_event">Create Event</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
                {/* maybe disable this tab when in create event page*/}
            </TabsContent>
            <TabsContent value="create_event">
                <div className="grid grid-cols-2 mt-6 ml-10">
                    <div className="w-3/4 justify-center">
                        <EventInput placeholder="Type Organizer Name" className="rounded-md" title="Organizer:"/>
                        <EventInput placeholder="Add Service Provider(s)" className="rounded-md" title="Service Provider:"/>
                        <EventInput placeholder="Add Participants" className="rounded-md" title="Participants:"/>
                        <EventInput placeholder="Type Event Venue" className="rounded-md" title="Venue:"/>
                        <EventInput placeholder="Type Event Location" className="rounded-md" title="Location:"/>
                        <EventInput placeholder="Set Event Duration (Start Time - End Time)" className="rounded-md" title="Time:"/>
                        <EventInput placeholder="Set Event Schedule" className="rounded-md" title="Schedule [YYYY-MM-DD]:"/>
                    </div>
                    <div className="h-[25vh] justify-center">
                        <AddImage/>
                        {/* confirm button and cancel button here */}
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}