import { useTelegram } from "@/telegram";
import { FC, PropsWithChildren } from "react";
interface DebugProviderProps {
    debug: boolean;
}
export const DebugProvider: FC<PropsWithChildren<DebugProviderProps>> = ({
    debug,
    children,
}) => {
    const { user, webApp } = useTelegram();
    if (debug) {
        console.log(user, webApp);
    }
    return <>{children}</>;
};
