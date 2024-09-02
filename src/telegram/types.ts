export interface ITelegramUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    photo_url: string;
    is_premium: boolean;
}

export interface IWebApp {
    initData: string;
    initDataUnsafe: {
        query_id: string;
        user: ITelegramUser;
        auth_date: string;
        hash: string;
    };
    version: string;
    platform: string;
    colorScheme: string;
    themeParams: {
        link_color: string;
        button_color: string;
        button_text_color: string;
        secondary_bg_color: string;
        hint_color: string;
        bg_color: string;
        text_color: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;
    headerColor: string;
    backgroundColor: string;
    BackButton: BackButton;
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isProgressVisible: boolean;
        isActive: boolean;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HapticFeedback: any;
    expand: () => void;
    showConfirm: (message: string, callback?: (res: boolean) => void) => void;
    showAlert: (message: string, callback?: () => void) => void;
    showPopup: (params: PopupParams, callback?: (id: string) => void) => void;
}

export interface PopupParams {
    title: string;
    message: string;
    buttons: PopupButtons[];
}

export interface PopupButtons {
    id?: string;
    type: "default" | "ok" | "close" | "cencel" | "destructive";
    text?: string;
}

export interface BackButton {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
}
