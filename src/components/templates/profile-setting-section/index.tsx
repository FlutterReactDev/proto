import { DeleteIcon, LocationIcon, WorldIcon } from "@/components/atoms/icons";
import { LanguageSelect } from "@/components/molecules/language-select";
import { LocationSelect } from "@/components/molecules/location-select";
import { Section } from "@/components/organisms/section";
import { Cell } from "@/components/ui/cell";
import { VStack } from "@/components/ui/vstack";
import { useTelegram } from "@/telegram";

export const ProfileSettingSection = () => {
    const { webApp } = useTelegram();
    const onDeleteProfile = () => {
        webApp?.showPopup({
            buttons: [
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
                    rightElement={<LocationSelect />}
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
