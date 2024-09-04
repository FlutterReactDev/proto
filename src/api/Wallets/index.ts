import { baseApi } from "../Base";
import { GetWalletsParams } from "./types";

const walletsApi = baseApi.injectEndpoints({
    endpoints: (build) => {
        return {
            getWallets: build.query<void, GetWalletsParams>({
                query: () => ({
                    url: "/wallets",
                }),
                providesTags: ["wallets"],
            }),
        };
    },
});

export const { useGetWalletsQuery } = walletsApi;
