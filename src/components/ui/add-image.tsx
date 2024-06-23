import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils"



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const AddImage = React.forwardRef<HTMLInputElement, InputProps>(
    ({ title, className, type, ...props }, ref) => {

    const [file, setFile] = useState<string | undefined>(undefined);
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    function handleRemove() {
        setFile(undefined);
    }

    function triggerFileInput() {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

      return (
        <div>
            <label htmlFor="add-image" className="custom-file-upload relative inline-block">
                {file ? (
                    <>
                        <img src={file} alt="Selected" className="size-96 bg-gray-100 rounded-2xl object-cover" />
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute bottom-4 right-4 size-9 border border-white text-white rounded-full p-1 text-lg"
                        >
                            &times;
                        </button>
                    </>
                ) : (
                    <>
                        <div className="size-96 bg-gray-100 rounded-2xl"></div>
                        <button onClick={triggerFileInput} className="absolute inset-0 m-auto text-black rounded-full p-1 text-lg">
                                Add Image +
                        </button>
                    </>
                )}
            </label>
            <input id="add-image" type="file" ref={fileInputRef} onChange={handleChange} accept="image/*" style={{ display: "none" }}/>
        </div>
      )
    }
  )
  AddImage.displayName = "EventInput"
  
export { AddImage }
  