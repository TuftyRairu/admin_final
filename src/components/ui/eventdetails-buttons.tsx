import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Confirm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, className, type, ...props }, ref) => {
    return (
      <div className="mb-2">
        <button type={type} {...props}
            className={cn(
                "w-full rounded-md text-black pl-4 pr-4 h-11 border-input text-lg text-white bg-white bg-amber-500",
                className
                )}
            >
            Create Event
        </button>
      </div>
    )
  }
)
Confirm.displayName = "Confirm"

const Edit = React.forwardRef<HTMLInputElement, InputProps>(
    ({ title, className, type, ...props }, ref) => {
      return (
        <div className="mb-2">
        <button type={type} {...props} 
            className={cn(
                "w-full rounded-md text-black pl-4 pr-4 h-11 border-input text-lg bg-white bg-blue-950 text-white",
                className
                )}
            >
            Delete Event
        </button>
      </div>
      )
    }
  )

  Edit.displayName = "Edit"

  const Delete = React.forwardRef<HTMLInputElement, InputProps>(
    ({ title, className, type, ...props }, ref) => {
      return (
        <div className="mb-2">
        <button type={type} {...props} 
            className={cn(
                "w-full rounded-md text-black pl-4 pr-4 h-11 border-input text-lg bg-white bg-red-500 text-white",
                className
                )}
            >
            Delete Event
        </button>
      </div>
      )
    }
  )
  Delete.displayName = "Delete"
  
  export { Confirm, Edit, Delete }
