import { Poppins } from "next/font/google";
import { Input } from "@nextui-org/react"


import { cn } from "@/lib/utils";


const poppins = Poppins({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "600",
})

export default function EventSearch() {
    return (
        <Input
            classNames={{
                base: "max-w-full sm:max-w-[10rem] h-10",
                mainWrapper: "h-full",
                input: cn(poppins.variable, "font-sans", "text-white", "text-1xl", "ml-3", "mr-3"),
                inputWrapper: "h-40 text-default-500 bg-white dark:bg-default-500/20 w-56 rounded-full",
            }}
            placeholder="Search Event"
            size="sm"
            type="search"
        />
    )
}