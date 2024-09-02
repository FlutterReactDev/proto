import { cn } from "@/lib/utils";
import { ReactNode } from "@tanstack/react-router";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface CellProps extends HTMLAttributes<HTMLDivElement> {
    leftElement?: ReactNode;
    rightElement?: ReactNode;
}

export const Cell: FC<PropsWithChildren<CellProps>> = ({
    className,
    leftElement,
    rightElement,
    children,
    ...props
}) => {
    return (
        <div
            className={cn(
                "bg-white flex items-center justify-between gap-2 px-4 py-3.5 rounded-xl cursor-pointer",
                className
            )}
            {...props}
        >
            <div className="flex gap-3 items-center">
                {leftElement}
                <p className="text-[17px] font-normal">{children}</p>
            </div>
            {rightElement}
        </div>
    );
};
