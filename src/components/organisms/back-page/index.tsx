import { useTelegram } from "@/telegram";
import { useNavigate } from "@tanstack/react-router";
import { FC, PropsWithChildren, useEffect } from "react";
import { toast } from "sonner";
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
                // webApp.BackButton.hide();
            });
            webApp.BackButton.offClick(() => {
                toast.warning("offclick");
            });
        }
    }, [navigate, originUrl, webApp]);
    return <>{children}</>;
};
