import { AttachmentIcon } from "@/components/atoms/icons";
import { UserDetailForm } from "@/components/forms/user-detail-form";
import { userDetailSchema } from "@/components/forms/user-detail-form/schema";
import { Section } from "@/components/organisms/section";
import { Cell } from "@/components/ui/cell";
import { Form } from "@/components/ui/form";
import { VStack } from "@/components/ui/vstack";
import { nestedForm } from "@/lib/nested-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType, object } from "yup";
const schema = object({
    userDetail: userDetailSchema,
});

export const ProfileDetailSection = () => {
    const form = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: InferType<typeof schema>) => {
        console.log(data);
    };
    return (
        <Section title="Your details">
            <VStack>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Form {...form}>
                        <UserDetailForm form={nestedForm(form, "userDetail")} />
                    </Form>
                </form>
            </VStack>
            <Cell leftElement={<AttachmentIcon />} className="text-primary">Attach file</Cell>
        </Section>
    );
};
