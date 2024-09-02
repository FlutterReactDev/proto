import { FC, PropsWithChildren } from "react";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "./theme-provider ";
import { SonnerComp } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TelegramProvider } from "@/telegram";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
    return (
        <TelegramProvider>
            <ReduxProvider>
                <ThemeProvider defaultTheme="light" storageKey="vite-theme-key">
                    <TooltipProvider delayDuration={200}>
                        {children}
                    </TooltipProvider>
                    <SonnerComp />
                </ThemeProvider>
            </ReduxProvider>
        </TelegramProvider>
    );
};
