import {
    ArrowDown,
    DeleteIcon,
    LocationIcon,
    WorldIcon,
} from "@/components/atoms/icons";
import { LanguageSelect } from "@/components/molecules/language-select";
import { LocationSelect } from "@/components/molecules/location-select";
import { Section } from "@/components/organisms/section";
import { Cell } from "@/components/ui/cell";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { cn } from "@/lib/utils";
import { useTelegram } from "@/telegram";
import { Link } from "@tanstack/react-router";

export const ProfileSettingSection = () => {
    const { webApp } = useTelegram();
    const onDeleteProfile = () => {
        webApp?.showPopup({
            buttons: [
                {
                    type: "close",
                    text: "Cencel",
                },
                {
                    type: "destructive",
                    text: "Agree",
                },
            ],
            message: "By deleting a profile, you will lose all data on it.",
            title: "Removal",
        });
    };
    return (
        <Section title="Settings">
            <VStack>
                <Cell
                    leftElement={<WorldIcon />}
                    rightElement={<LanguageSelect />}
                >
                    Langugage
                </Cell>
                <Cell
                    leftElement={<LocationIcon />}
                    rightElement={
                        <Link to="/location">
                            <HStack className="text-primary items-center">
                                <div className="text-[15px]">UAE, Dubai</div>
                                <ArrowDown className={cn("transition-all")} />
                            </HStack>
                        </Link>
                    }
                >
                    Location
                </Cell>
                <Cell onClick={onDeleteProfile} leftElement={<DeleteIcon />}>
                    Delete Profile
                </Cell>
            </VStack>
        </Section>
    );
};
