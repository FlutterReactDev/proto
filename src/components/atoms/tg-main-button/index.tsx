import { useTelegram } from "@/telegram";
import { FC, useEffect } from "react";
import { getDefaultMainButtonParams } from "./utils";
interface TGMainButton {
    text?: string;
    color?: string;
    textColor?: string;
    is_active?: boolean;
    is_visible?: boolean;
}
export const TGMainButton: FC<TGMainButton> = ({
    textColor = "#fff",
    color = "#C285D6",
    ...props
}) => {
    const { webApp } = useTelegram();
    useEffect(() => {
        webApp?.MainButton.setParams({ textColor, color, ...props });
        return () => webApp?.MainButton.setParams(getDefaultMainButtonParams());
    }, [props, webApp?.MainButton]);
    return <></>;
};
