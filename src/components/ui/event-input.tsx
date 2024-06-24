import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const EventInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, className, type, ...props }, ref) => {
    return (
      <div className="mb-6">
        <h2 className={cn("text-xl mb-1 text-amber-500")}>{title}</h2>
        <input
            type={type}
            className={cn(
            "rounded-md flex text-black w-full create in h-12 border-input px-3 py-2 text-lg ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none",
            className
            )}
            ref={ref}
            {...props}
        />
      </div>
    )
  }
)
EventInput.displayName = "EventInput"

export { EventInput }
