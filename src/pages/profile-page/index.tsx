import { SupportIcon } from "@/components/atoms/icons";
import { ProfileDetailSection } from "@/components/templates/profile-detail-section";
import { ProfileLegalSection } from "@/components/templates/profile-legal-section";
import { ProfileSettingSection } from "@/components/templates/profile-setting-section";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { Cell } from "@/components/ui/cell";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { useTelegram } from "@/telegram";

export const ProfilePage = () => {
    const { user, webApp } = useTelegram();
    return (
        <VStack className="gap-8">
            <VStack className="items-center">
                <Avatar>
                    <AvatarImage src="https://picsum.photos/id/237/200/300" />
                </Avatar>
                <Heading>{user?.username}</Heading>
            </VStack>
            <ProfileDetailSection />
            <ProfileSettingSection />
            <ProfileLegalSection />
            <Cell leftElement={<SupportIcon />}>Support</Cell>
            <Button
                onClick={() => {
                    webApp?.HapticFeedback.notificationOccurred("success");
                }}
            >
                notificationOccurred
            </Button>
        </VStack>
    );
};
