import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;
export const Heading: FC<HeadingProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h4
            className={cn("font-medium text-xl leading-6", className)}
            {...props}
        >
            {children}
        </h4>
    );
};
