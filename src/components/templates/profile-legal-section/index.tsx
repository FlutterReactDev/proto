import { Section } from "@/components/organisms/section";
import { ListAction, ListActionItem } from "@/components/ui/list-action";

export const ProfileLegalSection = () => {
    return (
        <Section title="Legals">
            <ListAction>
                <ListActionItem>Terms and conditions</ListActionItem>
                <ListActionItem>Privacy Policy</ListActionItem>
            </ListAction>
        </Section>
    );
};
