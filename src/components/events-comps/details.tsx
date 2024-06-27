import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventForm from "@/components/events-comps/forms/createeventform";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"
import DetailsCard from "./details/details-card";

const eventDetails = {
    title : 'Event Title',
    organizer : 'Alice Guo',
    serviceprovider: [['Diwata Pares', 'Food Catering'], ['Harry Potter', 'Magician'], ['AnA lights and sound', 'Sound and Light System'], ['Reghiea Caggy', 'Clown']],
    participantcount: 322,
    venue: 'Harry Potter World Studio',
    time: '11:11 AM - 6:00 PM',
    totalbudget: 500000,
    schedule: '2024-11-21',
    eventtype: 'Birthday',
    eventdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
}

export default function Details() {
    return (
        <div className="w-[100%] px-12 mt-4">
            <DetailsCard eventDetails={eventDetails}/>
        </div>
    );
}