import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type HStackProps = HTMLAttributes<HTMLDivElement>;
export const HStack: FC<HStackProps> = ({ className, ...props }) => {
    return (
        <div
            className={cn("flex flex-row gap-2 w-full", className)}
            {...props}
        />
    );
};
