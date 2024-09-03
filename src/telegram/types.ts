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
    SettingsButton: SettingsButton;
    MainButton: MainButton;

    HapticFeedback: HapticFeedback;
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
    offClick: (callback: () => void) => void;
}

export interface SettingsButton {
    isVisible: boolean;
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
}

export interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive: boolean) => void;
    hideProgress: () => void;
    setParams: (params: {
        text?: string;
        color?: string;
        text_color?: string;
        is_active?: boolean;
        is_visible?: boolean;
    }) => void;
}

export interface HapticFeedback {
    notificationOccurred: (type: "error" | "success" | "warning") => void;
    impactOccurred: (
        style: "light" | "medium" | "heavy" | "rigid" | "soft"
    ) => void;
    selectionChanged: () => void;
}
