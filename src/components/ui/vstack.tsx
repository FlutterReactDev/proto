import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type VStackProps = HTMLAttributes<HTMLDivElement>;
export const VStack: FC<VStackProps> = ({ className, ...props }) => {
    return <div className={cn("flex gap-2 flex-col", className)} {...props} />;
};
