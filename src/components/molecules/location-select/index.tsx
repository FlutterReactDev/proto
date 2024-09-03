import { UnitedArabEmirates } from "@/components/atoms/icons/flags";
import { HStack } from "@/components/ui/hstack";
import { ListAction, ListActionItem } from "@/components/ui/list-action";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";

export const LocationSelect = () => {
    return (
        <ScrollArea className="h-72 rounded-xl" type="always">
            <RadioGroup className="h-10">
                <ListAction>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                    <ListActionItem>
                        <HStack className="items-center justify-between">
                            <HStack className="items-center">
                                <UnitedArabEmirates />
                                Dubai UAE
                            </HStack>
                            <RadioGroupItem value="arab" />
                        </HStack>
                    </ListActionItem>
                </ListAction>
            </RadioGroup>
        </ScrollArea>
    );
};
