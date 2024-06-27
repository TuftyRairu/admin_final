import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils"

import { Poppins } from "next/font/google";
import { Confirm, Edit, Delete } from "@/components/ui/eventdetails-buttons";

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

interface EventDetails {
    title: string;
    organizer: string;
    serviceprovider: string[][];
    participantcount: number;
    venue: string;
    time: string;
    totalbudget: number;
    schedule: string;
    eventtype: string;
    eventdescription: string;
}

interface DetailsCardProps {
    eventDetails: EventDetails;
}

export default function DetailsCard({ eventDetails }: DetailsCardProps) {

    return (
        <Tabs defaultValue="event-details" className={cn(popp.variable,"font-sans", "mr-32", "ml-32")}>
            <TabsList className="border-0 bg-transparent">
                <TabsTrigger className="text-[23px] cursor-not-allowed opacity-50 pointer-events-none" value="events">Events</TabsTrigger>
                <TabsTrigger className="ml-12 data-[state=active]:border-b-2 rounded-none text-[23px]" value="event-details">Event Details</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
            </TabsContent>
            <TabsContent value="event-details" className="flex items-center justify-center">
            <div className="bg-amber-400 w-11/12 h-[75vh] bg-opacity-20 border border-amber-400 rounded-3xl mt-10 flex items-center justify-center pr-3 pl-3">
                    <div className="grid grid-rows-7 bg-white w-full h-[65vh] ml-10 mr-10 flex pl-16 pr-16 pt-10 pb-5">
                        <div className="row-span-4 flex grid-cols-3 w-full">
                            <div className="w-3/12">
                            
                                {/* ----- Event Title ----- */}
                                <div className="h-1/6">
                                    <h1 className="text-black text-3xl">{eventDetails.title}</h1>
                                </div>
                                
                                <div className="h-5/6">

                                    {/* ----- Organizer ----- */}
                                    <div>
                                        <h2 className="text-black">
                                            Organizer Name
                                        </h2>
                                        <h2 className="text-black font-black">
                                            {eventDetails.organizer}
                                        </h2>
                                    </div>

                                    {/* ----- Service Provider ----- */}
                                    <div className="mt-5">
                                        <h2 className="text-black">
                                            Service Providers
                                        </h2>
                                        {eventDetails.serviceprovider.map((provider, index) => (
                                            <h2 key={index} className="text-black">
                                                {provider[0]}
                                            </h2>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-3/12 h-5/6 mt-auto">

                                {/* ----- Event Type ----- */}
                                <div>
                                    <h2 className="text-black">Type of Event:</h2>
                                    <h2 className="text-black">{eventDetails.eventtype}</h2>
                                </div>

                                {/* ----- Services ----- */}
                                <div className="mt-5">
                                    <h2 className="text-black">Services</h2>
                                    {eventDetails.serviceprovider.map((provider, index) => (
                                        <h2 key={index} className="text-black">
                                            {provider[1]}
                                        </h2>
                                    ))}
                                </div>

                            </div>
                            
                            {/* ----- Event Description ----- */}
                            <div className="grid grid-rows-6 w-6/12">
                                <div className="row-start-2">
                                    <h2 className="text-black">Event Description:</h2>
                                    <h2 className="text-black">{eventDetails.eventdescription}</h2>
                                </div>
                            </div>

                        </div>
                        <div className="row-span-3 flex grid-cols-3 w-full">
                            <div className="w-3/12">

                                {/* ----- Participant Count ----- */}
                                <div className="h-1/4">
                                    <h2 className="text-black">No. of Participants</h2>
                                    <h2 className="text-black">{eventDetails.participantcount}</h2>
                                </div>

                                {/* ----- Venue ----- */}
                                <div className="h-1/4">
                                    <h2 className="text-black">Venue</h2>
                                    <h2 className="text-black">{eventDetails.venue}</h2>
                                </div>

                                {/* ----- Time ----- */}
                                <div className="h-1/4">
                                    <h2 className="text-black">Time</h2>
                                    <h2 className="text-black">{eventDetails.time}</h2>
                                </div>

                                {/* ----- Total Budget----- */}
                                <div className="h-1/4">
                                    <h2 className="text-black">Total Budget: {eventDetails.totalbudget}</h2>
                                </div>
                            </div>
                            <div className="w-3/12">

                                {/* ----- Schedule ----- */}
                                <div className="h-2/4 mt-auto">
                                    <h2 className="text-black">Schedule</h2>
                                    <h2 className="text-black">[{eventDetails.schedule}]</h2>
                                </div>

                            </div>
                            <div className="w-6/12 grid grid-rows-3">
                                
                                {/* ----- Buttons ----- */}
                                <div className="h-min ml-auto w-2/6 row-start-2">
                                    <Confirm onClick={() => console.log('Confirm')}/>
                                    <Edit onClick={() => console.log('Edit')}/>
                                    <Delete onClick={() => console.log('Delete')}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}