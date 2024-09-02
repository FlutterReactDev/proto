import { ArrowDown, SearchIcon } from "@/components/atoms/icons";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { HStack } from "@/components/ui/hstack";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
const locationList = [
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
export const LocationSelect = () => {
    const [open, setOpen] = useState(false);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
                <HStack className="text-primary items-center">
                    <div className="text-[15px]">UAE, Dubai</div>
                    <ArrowDown
                        className={cn("transition-all", open && "rotate-180")}
                    />
                </HStack>
            </DrawerTrigger>
            <DrawerContent className="bg-muted max-h-full">
                <DrawerHeader className="sticky top-0">
                    <DrawerTitle>Location</DrawerTitle>
                    <DrawerDescription>Enter your details</DrawerDescription>
                </DrawerHeader>
                <div className="w-full mx-auto flex flex-col overflow-auto px-4">
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>{" "}
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                    <div className="relative">
                        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                        <Input
                            placeholder="Find a place"
                            className="pl-12 pt-0"
                        />
                    </div>
                </div>

                <DrawerFooter className="sticky bottom-0">
                    <Button>Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
