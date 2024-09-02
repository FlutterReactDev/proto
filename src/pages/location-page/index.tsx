import { SearchIcon } from "@/components/atoms/icons";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";

export const LocationPage = () => {
    return (
        <VStack className="gap-3">
            <VStack className="gap-4">
                <Heading className="text-2xl">Location</Heading>
                <Heading className="text-xl">Enter your details</Heading>
            </VStack>
            <VStack>
                <div className="relative">
                    <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-foreground z-10" />
                    <Input placeholder="Find a place" className="pl-12 pt-0" />
                </div>
            </VStack>
        </VStack>
    );
};
