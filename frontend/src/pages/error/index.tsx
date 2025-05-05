import { useLocation, Link } from 'react-router';

import { ErrorState } from '../../types';

import style from './style.module.css';

export default function ErrorPage() {
    const location = useLocation();

    const errorState = location.state as ErrorState;

    const errorMessage = errorState?.errorMessage || 'Something went wrong';
    const errorCode = errorState?.errorCode || 'UNKNOWN_ERROR';
    const timestamp = errorState?.timestamp || new Date().toISOString();

    console.error('Error:', errorMessage, 'Code:', errorCode, 'Timestamp:', timestamp);

    return (
        <div className={style.errorContainer}>
            <h1 className={style.textTitle}>Something went wrong!</h1>

            <p className={style.errorMessage}>
                {errorState
                    ? 'Sorry, something went wrong! The invalid link or message has already been deleted.'
                    : 'This page does not exist.'}
            </p>

            <div className={style.actions}>
                <Link to="/" className={style.buttonLink}>
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
