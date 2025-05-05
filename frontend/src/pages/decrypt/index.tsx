import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import { RouterPath } from '../../constants/route';
import { NOTE_GET } from '../../api';

import style from './style.module.css';

export default function Decrypt() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [decryptedText, setDecryptedText] = useState<string>('');

    const handleDecrypt = () => {
        setIsSubmitting(true);

        if (!id || id.length !== 36) {
            const errorMessage = 'Invalid ID. ID must be 36 characters long.';
            console.error(errorMessage);
            navigate(RouterPath.ERROR, {
                state: {
                    errorMessage,
                    errorCode: 'INVALID_ID',
                    timestamp: new Date().toISOString(),
                },
            });
            return;
        }

        NOTE_GET(id)
            .then((res) => {
                setDecryptedText(res.decodedText);
            })
            .catch((e) => {
                console.error(e);
                navigate(RouterPath.ERROR, {
                    state: {
                        errorMessage: e.message || 'Message could not be decrypted.',
                        errorCode: e.code || 'DECRYPT_ERROR',
                        timestamp: new Date().toISOString(),
                    },
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <h2 className={style.textTitle}>Decrypt Page</h2>

            {decryptedText === '' ? (
                <button className={style.button} onClick={handleDecrypt} disabled={isSubmitting}>
                    {isSubmitting ? 'Decrypting...' : 'Decrypt'}
                </button>
            ) : null}

            {decryptedText && (
                <div className={style.box}>
                    <textarea className={style.textarea} value={decryptedText} disabled></textarea>
                </div>
            )}
        </>
    );
}
