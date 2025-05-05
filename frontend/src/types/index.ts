export type RouteListType = {
    name: string;
    path: string;
    showInNavigation?: boolean;
};
export type RouterPathType = {
    ABOUT: string;
    ENCRYPT: string;
    DECRYPT: string;
    ERROR: string;
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
