import { Root, EncryptPage, DecryptPage, ErrorPage, AboutPage } from '../pages';
import { RouterPath } from '../constants/route';

export default [
    {
        path: RouterPath.ABOUT,
        element: <Root />,
        children: [
            {
                path: RouterPath.ABOUT,
                element: <AboutPage />,
            },
            {
                path: RouterPath.ENCRYPT,
                element: <EncryptPage />,
            },
            {
                path: RouterPath.DECRYPT,
                element: <DecryptPage />,
            },
            {
                path: RouterPath.ERROR,
                element: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
];
