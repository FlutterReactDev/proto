import { DeleteIcon, LocationIcon, WorldIcon } from "@/components/atoms/icons";
import { LanguageSelect } from "@/components/molecules/language-select";
import { LocationSelect } from "@/components/molecules/location-select";
import { Section } from "@/components/organisms/section";
import { Cell } from "@/components/ui/cell";
import { VStack } from "@/components/ui/vstack";

export const ProfileSettingSection = () => {
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
                <Cell leftElement={<DeleteIcon />}>Delete Profile</Cell>
            </VStack>
        </Section>
    );
};
