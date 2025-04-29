import { Link, Outlet } from 'react-router';

export default function Root() {
    return (
        <div>
            <Link to="/">/about</Link>
            <Link to="/encrypt">/encrypt</Link>

            <div>
                <Outlet />
            </div>
        </div>
    );
}
