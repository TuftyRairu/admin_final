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

const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

export default function EventBookingTable() {
    return (
        <div>
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
                            {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
                            {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
                            {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}