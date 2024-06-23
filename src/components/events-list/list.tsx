import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function EventList() {
    return (
        <Tabs defaultValue="events" className={cn(popp.variable,"font-sans")}>
            <TabsList className="border-0 bg-transparent">
                <TabsTrigger className="data-[state=active]:border-b-2 rounded-none" value="events">Events</TabsTrigger>
                <TabsTrigger className="ml-12 data-[state=active]:border-b-2 rounded-none" value="event_booking">Event Booking</TabsTrigger>
            </TabsList>
            <TabsContent value="events">
                <div className="flex justify-around py-5 px-12 border border-rose-600 w-full">
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-blue-400 px-3 py-5">
                        <p className="text-md text-center mr-2">900</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-green-500 px-3 py-5">
                        <p className="text-md text-center mr-2">500</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-yellow-400 px-3 py-5">
                        <p className="text-md text-center mr-2">200</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-pink-400 px-3 py-5">
                        <p className="text-md text-center mr-2">100</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-gray-500 px-3 py-5">
                        <p className="text-md text-center mr-2">50</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-red-300 px-3 py-5">
                        <p className="text-md text-center mr-2">50</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                </div>
                <Tabs defaultValue="all" className={cn(popp.variable,"font-sans")}>
                    <TabsList className="border-0 bg-transparent">
                        <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="all">All</TabsTrigger>
                        <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="published">Published</TabsTrigger>
                        <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="draft">Draft</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <div>
                            asdad
                        </div>
                    </TabsContent>
                    <TabsContent value="published">
                        <div>
                            asdwqqqwe
                        </div>
                    </TabsContent>
                    <TabsContent value="draft">
                        <div>
                            qweqweqe
                        </div>
                    </TabsContent>
                </Tabs>
            </TabsContent>
            <TabsContent value="event_booking">
                <div className="flex justify-around py-5 px-12 border border-rose-600 w-full">
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-blue-400 px-3 py-5">
                        <p className="text-md text-center mr-2">900</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-green-500 px-3 py-5">
                        <p className="text-md text-center mr-2">500</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-yellow-400 px-3 py-5">
                        <p className="text-md text-center mr-2">200</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-pink-400 px-3 py-5">
                        <p className="text-md text-center mr-2">100</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-gray-500 px-3 py-5">
                        <p className="text-md text-center mr-2">150</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-red-300 px-3 py-5">
                        <p className="text-md text-center mr-2">150</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                </div>
                <Tabs defaultValue="all" className={cn(popp.variable,"font-sans")}>
                    <TabsList className="border-0 bg-transparent">
                        <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="all">All</TabsTrigger>
                        <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="published">Published</TabsTrigger>
                        <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="draft">Draft</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">Make changes to your account here.</TabsContent>
                    <TabsContent value="published">Change your password here.</TabsContent>
                    <TabsContent value="draft">asdasd.</TabsContent>
                </Tabs>
            </TabsContent>
        </Tabs>
    );
}