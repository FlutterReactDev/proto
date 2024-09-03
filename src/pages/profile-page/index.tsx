import { SupportIcon } from "@/components/atoms/icons";
import { ProfileDetailSection } from "@/components/templates/profile-detail-section";
import { ProfileLegalSection } from "@/components/templates/profile-legal-section";
import { ProfileSettingSection } from "@/components/templates/profile-setting-section";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { Cell } from "@/components/ui/cell";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { useTelegram } from "@/telegram";

export const ProfilePage = () => {
    const { user, webApp } = useTelegram();
    console.log(user, webApp);

    return (
        <VStack className="gap-8">
            <VStack className="items-center">
                <Avatar>
                    <AvatarImage src={user?.photo_url} />
                </Avatar>
                <Heading>{user?.username}</Heading>
            </VStack>
            <ProfileDetailSection />
            <ProfileSettingSection />
            <ProfileLegalSection />
            <Cell leftElement={<SupportIcon />}>Support</Cell>
        </VStack>
    );
};
