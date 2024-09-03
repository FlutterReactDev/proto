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
    ...props
}) => {
    const { webApp } = useTelegram();
    useEffect(() => {
        webApp?.MainButton.setParams({ text_color, color, ...props });
        return () => webApp?.MainButton.setParams(getDefaultMainButtonParams());
    }, [color, props, text_color, webApp?.MainButton]);
    return <></>;
};
