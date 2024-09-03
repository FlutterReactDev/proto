import { useTelegram } from "@/telegram";
import { FC, useEffect } from "react";
import { getDefaultMainButtonParams } from "./utils";
interface TGMainButton {
    text?: string;
    color?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
}
export const TGMainButton: FC<TGMainButton> = ({
    text_color = "#fff",
    color = "#C285D6",
    is_visible = true,
    ...props
}) => {
    const { webApp } = useTelegram();
    useEffect(() => {
        webApp?.MainButton.setParams({
            text_color,
            color,
            is_visible,
            ...props,
        });
        return () => webApp?.MainButton.setParams(getDefaultMainButtonParams());
    }, [color, is_visible, props, text_color, webApp?.MainButton]);
    return <></>;
};
