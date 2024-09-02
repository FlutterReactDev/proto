import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { NestedForm } from "@/lib/nested-form";
import { FC } from "react";
import { UserDetailType } from "./schema";
interface UserDetailFormProps {
    form: NestedForm<UserDetailType>;
}
export const UserDetailForm: FC<UserDetailFormProps> = ({ form }) => {
    const { control, path } = form;
    return (
        <VStack>
            <FormField
                name={path("name")}
                control={control}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormControl>
                                <Input {...field} label="Name" />
                            </FormControl>
                        </FormItem>
                    );
                }}
            />
            <FormField
                name={path("email")}
                control={control}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormControl>
                                <Input {...field} label="Email" />
                            </FormControl>
                        </FormItem>
                    );
                }}
            />
            <FormField
                name={path("date")}
                control={control}
                render={({ field }) => {
                    return (
                        <FormItem>
                            <FormControl>
                                <Input {...field} label="YY/MM/DD" />
                            </FormControl>
                        </FormItem>
                    );
                }}
            />
        </VStack>
    );
};
