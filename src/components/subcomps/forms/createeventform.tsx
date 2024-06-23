import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventInput } from "@/components/ui/event-input";
import { AddImage } from "@/components/ui/add-image";
import { SubmitForm, Cancel } from "@/components/ui/createevent-buttons";

import { useForm } from 'react-hook-form'
import { cn } from "@/lib/utils"

import { Poppins } from "next/font/google";
const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

type FormValues = {
    organizer: string
    serviceprovider: string
    participants: string
    venue: string
    location: string
    duration: string
    schedule: string
    image: FileList
}

export default function EventForm() {
    const form = useForm<FormValues>();
    const { register, handleSubmit} = form;

    const onSubmit = (data: FormValues) => {
        console.log('submitted: ', data)
    }

    const onCancel = () => {
        console.log('cancelled')
    }

    return (
        <Tabs defaultValue="events" className={cn(popp.variable,"font-sans")}>
            <TabsList className="border-0 bg-transparent">
                <TabsTrigger className="text-[23px] cursor-not-allowed opacity-50 pointer-events-none" value="events">Events</TabsTrigger>
                <TabsTrigger className="ml-12 data-[state=active]:border-b-2 rounded-none text-[23px]" value="create_event">Create Event</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
            </TabsContent>
            <TabsContent value="create_event">
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 mt-6 ml-10">
                    <div className="w-3/4 justify-center">
                        <EventInput type="text" {...register("organizer")} placeholder="Type Organizer Name" title="Organizer:"/>
                        <EventInput type="text" {...register("serviceprovider")} placeholder="Add Service Provider(s)" title="Service Provider:"/>
                        <EventInput type="text" {...register("participants")} placeholder="Add Participants" title="Participants:"/>
                        <EventInput type="text" {...register("venue")} placeholder="Type Event Venue" title="Venue:"/>
                        <EventInput type="text" {...register("location")} placeholder="Type Event Location" title="Location:"/>
                        <EventInput type="text" {...register("duration")} placeholder="Set Event Duration (Start Time - End Time)" title="Time:"/>
                        <EventInput type="text" {...register("schedule")} placeholder="Set Event Schedule" title="Schedule [YYYY-MM-DD]:"/>
                    </div>
                    <div className="h-[25vh] justify-center">
                        <AddImage {...register("image")} type="file"/>
                        <div className="grid grid-cols-2 w-80 mt-2">
                            <SubmitForm/>
                            <Cancel type="button" onClick={onCancel}/>
                        </div>
                    </div>
                </form>
            </TabsContent>
        </Tabs>
    );
}