import { SearchIcon } from "@/components/atoms/icons";
import { LocationSelect } from "@/components/molecules/location-select";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { useTelegram } from "@/telegram";
import { useEffect } from "react";

export const LocationPage = () => {
    const { webApp } = useTelegram();
    useEffect(() => {
        webApp?.MainButton.show();
        webApp?.MainButton.disable();
    }, [webApp?.MainButton]);
    return (
        <VStack className="gap-3">
            <VStack className="gap-4">
                <Heading className="text-2xl">Location</Heading>
                <Heading className="text-xl">Enter your details</Heading>
            </VStack>
            <VStack className="h-full">
                <div className="relative">
                    <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                    <Input placeholder="Find a place" className="pl-12 pt-0" />
                </div>
                <LocationSelect />
                <VStack>
                    <p>
                        Please enter the information as per ID as places require
                        them to check you in. Some places might reject if
                        information incorrect
                    </p>
                    <p>Changes cannot be done during active check-in</p>
                    <p>Changes require a 24-hour acceptance period</p>
                </VStack>
            </VStack>
        </VStack>
    );
};
