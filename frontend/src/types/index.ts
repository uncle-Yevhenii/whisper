export type RouteListType = {
    name: string;
    path: string;
    component: React.ComponentType;
    showInNavigation?: boolean;
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
