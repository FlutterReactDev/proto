import { FC } from "react";
import { Separator } from "./separator";

interface ListActionProps {
    actions: Action[];
}

interface Action {
    label: string;
    onClick: () => void;
}

interface ListActionItem {
    label: string;
    onClick: () => void;
}

export const ListAction: FC<ListActionProps> = ({ actions }) => {
    return (
        <ul className="bg-white rounded-xl ">
            {actions.map(({ label, onClick }, i) => {
                return (
                    <>
                        <ListActionItem label={label} onClick={onClick} />
                        {i != actions.length - 1 && (
                            <div className="pl-4">
                                <Separator />
                            </div>
                        )}
                    </>
                );
            })}
        </ul>
    );
};

export const ListActionItem: FC<ListActionItem> = ({ label, onClick }) => {
    return (
        <li
            className="text-primary text-[17px] font-normal py-3.5 px-4 cursor-pointer"
            onClick={onClick}
        >
            {label}
        </li>
    );
};
