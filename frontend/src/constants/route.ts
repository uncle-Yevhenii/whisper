import { RouteListType } from '../types';
import { AboutPage, EncryptPage, DecryptPage } from '../pages';

export const RouteList: RouteListType[] = [
    {
        name: 'About',
        path: '/',
        component: AboutPage,
        showInNavigation: true,
    },
    {
        name: 'Encrypt',
        path: '/encrypt',
        component: EncryptPage,
        showInNavigation: true,
    },
    {
        name: 'Decrypt',
        path: '/decrypt/:id',
        component: DecryptPage,
        showInNavigation: false,
    },
];
