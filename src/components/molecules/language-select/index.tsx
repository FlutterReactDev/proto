import { ArrowDown } from "@/components/atoms/icons";
import { HStack } from "@/components/ui/hstack";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { useState } from "react";
const langageList = [
    {
        name: "English",
        id: 1,
    },
    {
        name: "Russian",
        id: 2,
    },
    {
        name: "Russian",
        id: 3,
    },
    {
        name: "Russian",
        id: 4,
    },
    {
        name: "Russian",
        id: 5,
    },
    {
        name: "Russian",
        id: 6,
    },
];
export const LanguageSelect = () => {
    const [open, setOpen] = useState(false);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <HStack className="text-primary items-center">
                    <div className="text-[15px]">English</div>
                    <ArrowDown
                        className={cn("transition-all", open && "rotate-180")}
                    />
                </HStack>
            </PopoverTrigger>
            <PopoverContent
                sideOffset={25}
                className="border-0 rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] max-w-48 p-0 h-48 overflow-y-auto"
            >
                <ul>
                    {langageList.map(({ id, name }, i) => {
                        return (
                            <div key={id}>
                                <li className="text-[17px] font-normal py-3.5 pl-4 cursor-pointer">
                                    {name}
                                </li>
                                {i != langageList.length - 1 && (
                                    <div className="pl-4">
                                        <Separator />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </ul>
            </PopoverContent>
        </Popover>
    );
};
