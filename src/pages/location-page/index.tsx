import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";

export const LocationPage = () => {
    return (
        <VStack className="gap-4">
            <Heading className="text-2xl">Location</Heading>
            <Heading className="text-xl">Enter your details</Heading>
        </VStack>
    );
};
