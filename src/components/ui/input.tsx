import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, ...props }, ref) => {
        return (
            <div className="relative z-0">
                <input
                    type={type}
                    className={cn(
                        "flex h-16 w-full rounded-md border-0 border-input bg-background p-0 px-4 pt-4 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 peer",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <label
                    className={cn(
                        "absolute z-10 text-[17px] peer-focus:opacity-35  duration-300 transform translate-x-4 -translate-y-1 scale-75 top-3  origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
                        !props.value && "scale-1 translate-y-1.5 ",
                        props.value && "opacity-35"
                    )}
                >
                    {label}
                </label>
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
