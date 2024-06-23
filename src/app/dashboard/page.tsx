import NavigationBar from "@/components/navigation";
import DashboardBodyOne from "@/components/dashboardbody1";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const popp = Poppins({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "500"
})

export default function Dashboards() {
    return (
        <>
            <NavigationBar  title="Dashboard" />
            <div className={cn(popp.variable, "font-sans pl-[8%] py-10")}>
                <p className="text-2xl">Welcome, Admin</p>
                <p className="text-sm">Have a good day!</p>
            </div>
            <DashboardBodyOne />
        </>
    );
}