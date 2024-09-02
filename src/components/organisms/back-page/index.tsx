import { useTelegram } from "@/telegram";
import { useNavigate } from "@tanstack/react-router";
import { FC, PropsWithChildren, useEffect } from "react";
interface BackPageProps {
    originUrl: string;
}
export const BackPage: FC<PropsWithChildren<BackPageProps>> = ({
    children,
    originUrl,
}) => {
    const navigate = useNavigate();
    const { webApp } = useTelegram();
    useEffect(() => {
        if (webApp) {
            webApp.BackButton.show();
            webApp.BackButton.onClick(() => {
                navigate({
                    to: originUrl,
                });
                webApp.BackButton.hide();
            });
        }
    }, [navigate, originUrl, webApp]);
    return <>{children}</>;
};
