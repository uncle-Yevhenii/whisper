import { Root, EncryptPage, DecryptPage, ErrorPage } from '../pages';
import { RouterPath } from '../constants/route';

export default [
    {
        path: RouterPath.ABOUT,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
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
        ],
    },
];
