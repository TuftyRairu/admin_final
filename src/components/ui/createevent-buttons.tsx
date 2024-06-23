import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, className, type, ...props }, ref) => {
    return (
      <div className="mb-6">
        <button type={type} {...props}
            className={cn(
                "rounded-md text-black pl-4 pr-4 h-12 border-input text-lg text-white bg-white bg-amber-500",
                className
                )}
            >
            Create Event
        </button>
      </div>
    )
  }
)
SubmitForm.displayName = "SubmitForm"

const Cancel = React.forwardRef<HTMLInputElement, InputProps>(
    ({ title, className, type, ...props }, ref) => {
      return (
        <div className="mb-6">
        <button type={type} {...props} 
            className={cn(
                "rounded-md text-black pl-4 pr-4 h-12 border-input text-lg bg-white bg-red-500 text-white",
                className
                )}
            >
            Delete Event
        </button>
      </div>
      )
    }
  )
  Cancel.displayName = "Cancel"
  
  export { SubmitForm, Cancel }
