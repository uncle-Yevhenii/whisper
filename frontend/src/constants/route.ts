import { RouteListType, RouterPathType } from '../types';

export const RouterPath: RouterPathType = {
    ABOUT: '/',
    LINK: '/shared-link/:id',
    ENCRYPT: '/encrypt',
    DECRYPT: '/decrypt/:id',
    ERROR: '/error',
};

export const RouteList: RouteListType[] = [
    {
        name: 'About',
        path: RouterPath.ABOUT,
        showInNavigation: true,
    },
    {
        name: 'Encrypt',
        path: RouterPath.ENCRYPT,
        showInNavigation: true,
    },
    {
        name: 'Share Link',
        path: RouterPath.LINK,
        showInNavigation: false,
    },
    {
        name: 'Decrypt',
        path: RouterPath.DECRYPT,
        showInNavigation: false,
    },
    {
        name: 'Error',
        path: RouterPath.ERROR,
        showInNavigation: false,
    },
];
