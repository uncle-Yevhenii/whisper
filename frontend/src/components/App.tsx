import { Route, Routes } from 'react-router';

import { Root, AboutPage, DecryptPage, EncryptPage } from '../pages';

function App() {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route index element={<AboutPage />} />
                <Route path="encrypt" element={<EncryptPage />} />
                <Route path="decrypt/:id" element={<DecryptPage />} />
            </Route>
        </Routes>
    );
}

export default App;
