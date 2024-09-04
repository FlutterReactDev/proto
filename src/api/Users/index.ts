import { baseApi } from "../Base";
import { GetUsersParams, User } from "./types";

export const usersApi = baseApi.injectEndpoints({
    endpoints(build) {
        return {
            getUsers: build.query<User[], GetUsersParams>({
                query: (params) => {
                    return {
                        url: "/users",
                        params,
                        method: "GET",
                    };
                },
                providesTags: ["users"],
            }),

            createUser: build.mutation<
                {
                    User: User;
                },
                void
            >({
                query: () => {
                    return {
                        url: "/users",
                        method: "POST",
                    };
                },
                invalidatesTags: ["users"],
            }),
        };
    },
});

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;
