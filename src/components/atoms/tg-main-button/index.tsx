import { useTelegram } from "@/telegram";
import { FC, useEffect } from "react";
import { getDefaultMainButtonParams } from "./utils";
interface TGMainButton {
    text?: string;
    color?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}
export const TGMainButton: FC<TGMainButton> = ({
    text_color = "#fff",
    color = "#C285D6",
    is_visible = true,
    is_active = true,
    onClick,
    disabled = false,
}) => {
    const { webApp } = useTelegram();
    useEffect(() => {
        if (disabled) {
            webApp?.MainButton.setParams({
                text_color: "#f7f7f7",
                color: "white",
            });

            return;
        }

        webApp?.MainButton.onClick(() => {
            onClick?.();
        });
        return () => webApp?.MainButton.setParams(getDefaultMainButtonParams());
    }, [
        color,
        disabled,
        is_active,
        is_visible,
        onClick,
        text_color,
        webApp?.MainButton,
    ]);
    return <></>;
};
