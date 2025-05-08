import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { LocationState } from '../../types';
import { RouterPath } from '../../constants/route';
import { sharedClientLink } from '../../utils/sharedClientLink';

import style from './style.module.css';

export default function SharedLink() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location?.state as LocationState;

    useEffect(() => {
        if (!state?.id) {
            const errorMessage = 'ID is undefined.';
            console.error(errorMessage);
            navigate(RouterPath.ERROR, {
                state: {
                    errorMessage,
                    errorCode: 'ID_UNDEFINED',
                    timestamp: new Date().toISOString(),
                },
            });
        }
    }, [state, navigate]);

    if (!state?.id) return null;

    return (
        <>
            <h2 className={style.textTitle}>A link to share</h2>
            <p className={style.text}>
                You can send this link to the person you want to share the encrypted information
                with.
            </p>
            <textarea
                className={style.textarea}
                value={sharedClientLink(state?.id)}
                disabled
            ></textarea>
        </>
    );
}
