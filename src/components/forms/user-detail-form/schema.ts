import { InferType, object, string } from "yup";

export const userDetailSchema = object({
    name: string().required(),
    email: string().email().required(),
    phone: string(),
    date: string(),
});

export type UserDetailType = InferType<typeof userDetailSchema>;
