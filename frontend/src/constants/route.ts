import { RouteListType, RouterPathType } from '../types';

export const RouterPath: RouterPathType = {
    ABOUT: '/',
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
