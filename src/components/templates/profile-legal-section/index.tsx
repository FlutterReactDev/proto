import { Section } from "@/components/organisms/section";
import { ListAction } from "@/components/ui/list-action";

export const ProfileLegalSection = () => {
    return (
        <Section title="Legals">
            <ListAction
                actions={[
                    {
                        label: "Terms and conditions",
                        onClick: () => {},
                    },
                    {
                        label: "Privacy Policy",
                        onClick: () => {},
                    },
                ]}
            />
        </Section>
    );
};
