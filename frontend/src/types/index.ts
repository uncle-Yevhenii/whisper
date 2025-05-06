export type RouteListType = {
    name: string;
    path: string;
    showInNavigation?: boolean;
};
export type RouterPathType = {
    ABOUT: string;
    LINK: string;
    ENCRYPT: string;
    DECRYPT: string;
    ERROR: string;
};

export type ErrorState = {
    errorMessage: string;
    errorCode?: string;
    timestamp?: string;
};

export type LocationState = {
    id: string;
    timestamp: Date;
};

export type PingApiResponse = {
    message: 'pong';
};

export type CreateNoteApiResponse = {
    id: string;
};

export type GetNoteApiResponse = {
    decodedText: string;
};

export type DeleteNoteApiResponse = {
    deletedId: string;
};
