import { useState } from 'react';
import { useParams } from 'react-router';

import { NOTE_GET } from '../../api';

import style from './style.module.css';

export default function Decrypt() {
    const { id } = useParams();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [decryptedText, setDecryptedText] = useState<string>('');

    const handleDecrypt = () => {
        setIsSubmitting(true);

        if (!id) {
            console.error('ID is undefined');
            setIsSubmitting(false);
            return;
        }

        NOTE_GET(id)
            .then((res) => {
                setDecryptedText(res.decodedText);
            })
            .catch((e) => {
                // Handle error & redirect to error page
                console.error(e);
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
