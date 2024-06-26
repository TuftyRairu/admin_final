import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,} from "@/components/ui/table";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

const organizerNames = [
    {
        organizerName: "Epic Events",
        eventName: "Galactic Adventure Gala",
        eventType: "Star Wars Charity Ball",
        status: "Completed",
        date: "June 24, 2024",
    },
    {
        organizerName: "Nostalgia Nights",
        eventName: "Jurassic Jungle",
        eventType: "Jurassic Park",
        status: "Missing",
        date: "june",
        },
    {
        organizerName: "Fantasy Festivities",
        eventName: "Narnia Winter",
        eventType: "Chronicles of Narnia-Themed",
        status: "Completed",
        date: "june",
    },
    {
        organizerName: "Spellbound Events",
        eventName: "Diagon Alley Experience",
        eventType: "Harry Potter Dining Event",
        status: "Completed",
        date: "june",
    },
]

const totals = [
    {
        TotalRequest: "900",
        Confirmed: "200",
        TotalRequest1: "900",
        TotalRequest2: "900",
        TotalRequest3: "900",
        TotalRequest4: "823"
    }
]

export default function EventBookingTable() {
    return (
        <div>
            {totals.map((TotalRequest) => (
                <div key={TotalRequest.TotalRequest} className="flex justify-around py-5 px-12 border border-rose-600 w-full">
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-blue-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-green-500 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.Confirmed}</p>
                        <p className="text-sm">Confirmed</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-yellow-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest1}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-pink-400 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest2}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-gray-500 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest3}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                    <div className="flex bg-gray-200 text-black items-center border-l-5 border-red-300 px-3 py-5">
                        <p className="text-md text-center mr-2">{TotalRequest.TotalRequest4}</p>
                        <p className="text-sm">Total Request</p>
                    </div>
                </div>
            ))}
            <Tabs defaultValue="all" className={cn(popp.variable,"font-sans")}>
                <TabsList className="border-0 bg-transparent">
                    <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="all">List Events</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Organizer Name</TableHead>
                            <TableHead>Event Name</TableHead>
                            <TableHead>Event Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Actions</TableHead>
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.eventName}</TableCell>
                                <TableCell>{organizerName.eventType}</TableCell>
                                <TableCell>{organizerName.status}</TableCell>
                                <TableCell>{organizerName.date}</TableCell>
                                <TableCell>
                                    <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded">View details</button>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Edit</button>
                                    <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded">Delete</button>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}