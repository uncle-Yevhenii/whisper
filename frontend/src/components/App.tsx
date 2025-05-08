import { Helmet } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router';

import favicon from '../assets/favicon.svg';
import routers from '../routers';

function App() {
    const router = createBrowserRouter(routers);
    const APP_NAME = import.meta.env.VITE_APP_NAME || 'My App';

    return (
        <>
            <Helmet>
                <title>{APP_NAME}</title>
                <meta
                    name="description"
                    content="Instant and Secure Information Sharing via Link."
                />
                <link rel="icon" type="image/svg+xml" href={favicon} />
            </Helmet>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
