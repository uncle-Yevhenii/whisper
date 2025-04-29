export type RoutePathType = NavigationAppBarType & {
    ABOUT: string;
};

export type NavigationAppBarType = {
    ENCRYPT: string;
    DECRYPT: string;
};

export type RouteListType = {
    name: string;
    path: string;
    component: React.ComponentType;
    showInNavigation?: boolean;
};
