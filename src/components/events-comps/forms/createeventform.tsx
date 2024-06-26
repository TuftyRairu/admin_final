import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { createEvent } from "@/auth/auth"
import { toast, useToast } from "../../ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import { useForm } from 'react-hook-form'
import { cn } from "@/lib/utils"

import { Poppins } from "next/font/google";

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

const formSchema = z.object({
    event_name: z.string().min(2, {
        message: "Event Name must be at least 2 characters."
    }),
    event_description: z.string(),
    event_date: z.string(),
    event_time: z.string(),
    event_location: z.string(),
    event_status: z.string(),
    organizer: z.string(),
    participants: z.object({})
});

export default function EventForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            event_name: "",
            event_description: "",
            event_date: "",
            event_time: "",
            event_location: "",
            event_status: "",
            organizer: "",
            participants: {}
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const res: any = createEvent(values);

        if(!res) {
            toast({
                title:"Account has been created",
                description: res?.message
            })
        } else {
            toast({
                title:"Something went wrong",
                description: res?.message
            })
        }
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 mt-6 ml-10">
                    <FormField
                control={form.control}
                name="event_name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Event Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** event description form Field */}
                <FormField
                control={form.control}
                name="event_description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Description</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />


                {/** event date form Field */}
                <FormField
                control={form.control}
                name="event_date"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Date</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="2024-05-05" type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />



                {/** event time form Field */}
                <FormField
                control={form.control}
                name="event_time"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="07:30:00" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** event location form Field */}
                <FormField
                control={form.control}
                name="event_location"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Location</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Location" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** event status form Field */}
                <FormField
                control={form.control}
                name="event_status"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Event Status</FormLabel>
                    <FormControl>
                        <Input className="rounded" type="tel" placeholder="ON_GOING" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/** organizer form Field */}
                <FormField
                control={form.control}
                name="organizer"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Organizer</FormLabel>
                    <FormControl>
                        <Input className="rounded" placeholder="Juanito" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button className="rounded" type="submit">Sign Up</Button>
                <Link  href={"/login"} className={buttonVariants({ variant: "secondary" })}>Login</Link>
                    </form>
                </Form>
            </TabsContent>
        </Tabs>
    );
}