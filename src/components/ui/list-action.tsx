import { cn } from "@/lib/utils";
import { Children, FC, HTMLAttributes, PropsWithChildren } from "react";
import { Separator } from "./separator";
type ListAction = HTMLAttributes<HTMLUListElement>;
export const ListAction: FC<ListAction> = ({
    children,
    className,
    ...props
}) => {
    return (
        <ul className={cn("bg-white rounded-xl", className)} {...props}>
            {Children.map(children, (child, i) => (
                <>
                    {child}
                    {i != Children.count(children) - 1 && <ListActionDivider />}
                </>
            ))}
        </ul>
    );
};

type ListActionDividerProps = HTMLAttributes<HTMLDivElement>;
export const ListActionDivider: FC<ListActionDividerProps> = ({
    className,
    ...props
}) => {
    return (
        <div className={cn("pl-4", className)} {...props}>
            <Separator />
        </div>
    );
};

type ListActionItemProps = HTMLAttributes<HTMLLIElement>;
export const ListActionItem: FC<PropsWithChildren<ListActionItemProps>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <li
            className={cn(
                "text-primary text-[17px] font-normal py-3.5 px-4 cursor-pointer flex gap-2 items-center w-full",
                className
            )}
            {...props}
        >
            {children}
        </li>
    );
};
