import { Route, Routes } from 'react-router';

import { Root } from '../pages';
import { RouteList } from '../constants/route';

function App() {
    return (
        <Routes>
            <Route element={<Root />}>
                {RouteList.map((route) => {
                    const { component: Component, path } = route;
                    return (
                        <Route key={path} path={path === '/' ? '' : path} element={<Component />} />
                    );
                })}
            </Route>
        </Routes>
    );
}

export default App;
