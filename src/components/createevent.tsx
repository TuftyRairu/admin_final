import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventForm from "@/components/subcomps/forms/createeventform";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const popp = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function CreateEventForm() {
    return (
        <div className="w-[100%] px-12 mt-4">
            <EventForm />
        </div>
    );
}