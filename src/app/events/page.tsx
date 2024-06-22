'use client'

import NavigationBar from "@/components/navigation"
import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import { Poppins } from "next/font/google"
import Input from "@/components/ui/event_search"

import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function Events() {
    return (
        <main className="text-white min-h-screen">
            <NavigationBar title="Events" />
            <div className="flex items-end justify-end w-11/12 mr-auto mt-10">
                <Input />
            </div>
            <div className="flex h-[75vh] border-white ml-14 mr-14 mt-10">
                <div className="flex w-full flex-col">
                    <div className="flex justify-between items-center">
                        <Tabs aria-label="Options" variant="underlined" className="text-white">
                            <Tab key="events" title="Events" className={cn(poppins.variable, "font-sans", "text-white", "text-2xl")}></Tab>
                            <Tab key="event booking" title="Event Booking" className={cn(poppins.variable, "font-sans", "text-white", "text-2xl")}></Tab>
                        </Tabs>
                        <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Create Event</button>
                    </div>
                    <div className="flex justify-around mt-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold">900</p>
                            <p className="text-sm">Total request</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">500</p>
                            <p className="text-sm">Confirmed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">200</p>
                            <p className="text-sm">Pending</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">100</p>
                            <p className="text-sm">Scheduled</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">50</p>
                            <p className="text-sm">Postponed</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">50</p>
                            <p className="text-sm">Cancelled</p>
                        </div>
                    </div>
                    <div className="flex justify-between mr-[80vw] mt-4 border-b-2 border-gray-800">
                        <button className="py-2 px-4 bg-gray-100 mr-2 text-black">ALL</button>
                        <button className="py-2 px-4 bg-gray-100 mr-2 text-black">Published</button>
                        <button className="py-2 px-4 bg-gray-100 text-black">Draft</button>
                    </div>
                    <div className="overflow-y-auto">
                        <table className="w-full mt-4">
                            <thead className="border border-black">
                                <tr className="text-left bg-gray-100">
                                    <th className="py-2 px-4 text-black">Organizer Name</th>
                                    <th className="py-2 px-4 text-black">Event Name</th>
                                    <th className="py-2 px-4 text-black">Event Type</th>
                                    <th className="py-2 px-4 text-black">Status</th>
                                    <th className="py-2 px-4 text-black">Date</th>
                                    <th className="py-2 px-4 text-black">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100">
                                    <td className="py-2 px-4 text-black">Arvil</td>
                                    <td className="py-2 px-4 text-black">Simong Tart Wedding</td>
                                    <td className="py-2 px-4 text-black">Wedding</td>
                                    <td className="py-2 px-4 text-black"><span className="bg-gray-600 py-1 px-2 rounded-full">Missing</span></td>
                                    <td className="py-2 px-4 text-black">10-Jul, 2024</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        <button className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-2 rounded">View details</button>
                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded">Edit</button>
                                        <button className="bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
