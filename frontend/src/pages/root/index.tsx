import { Link, Outlet } from 'react-router';

import { RouteList } from '../../constants/route';

import style from './style.module.css';

const navigationRoutes = RouteList.filter((route) => route.showInNavigation !== false);

export default function Root() {
    return (
        <div className={style.root}>
            <ul className={style.linkBox}>
                {navigationRoutes.map((route) => (
                    <li key={route.path}>
                        <Link className={style.buttonLink} to={route.path}>
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={style.outlet}>
                <Outlet />
            </div>
        </div>
    );
}
