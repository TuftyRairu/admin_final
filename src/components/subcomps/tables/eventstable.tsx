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
      organizerName: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      organizerName: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      organizerName: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      organizerName: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      organizerName: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      organizerName: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      organizerName: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
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

export default function EventsTable() {
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
                    <TabsTrigger className="bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="all">All</TabsTrigger>
                    <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="published">Published</TabsTrigger>
                    <TabsTrigger className="ml-3 bg-white data-[state=active]:border-b-2 data-[state=active]:text-black rounded-none" value="draft">Draft</TabsTrigger>
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
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.paymentStatus}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell className="text-right">{organizerName.totalAmount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="published">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Organizer Name</TableHead>
                            <TableHead>Event Name</TableHead>
                            <TableHead>Event Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.paymentStatus}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell className="text-right">{organizerName.totalAmount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="draft">
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[300px]">Organizer Name</TableHead>
                            <TableHead>Event Name</TableHead>
                            <TableHead>Event Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead> </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {organizerNames.map((organizerName) => (
                            <TableRow key={organizerName.organizerName}>
                                <TableCell className="font-medium">{organizerName.organizerName}</TableCell>
                                <TableCell>{organizerName.paymentStatus}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell>{organizerName.paymentMethod}</TableCell>
                                <TableCell className="text-right">{organizerName.totalAmount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}