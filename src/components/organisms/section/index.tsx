import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { FC, PropsWithChildren } from "react";

interface SectionProps {
    title: string;
}
export const Section: FC<PropsWithChildren<SectionProps>> = ({
    title,
    children,
}) => {
    return (
        <VStack className="gap-3">
            <Heading>{title}</Heading>
            {children}
        </VStack>
    );
};
