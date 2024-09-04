export interface GetUsersParams {
    search: string;
    wallet_id: number;
    limit: number;
    user: string;
}

export interface User {
    CreatedAt: string;
    DOB: string;
    DeletedAt: {
        Time: string;
        Valid: boolean;
    };
    Email: string;
    ID: number;
    ImageThumbnailURL: string;
    ImageURL: string;
    Localization: string;
    Location: {
        City: string;
        Country: string;
        Currency: string;
        Latitude: number;
        Longitude: number;
        Name: string;
        Zoom: number;
    };
    Name: string;
    PhoneNumber: string;
    ReferredAmount: number;
    ReferredByID: number;
    TelegramUserID: number;
    UpdatedAt: string;
}
