import { FormEvent, useRef, useState } from 'react';

import { NOTE_CREATE } from '../../api';

import style from './style.module.css';

export default function Encrypt() {
    const formRef = useRef<HTMLFormElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const text = formData.get('textarea') as string;

        if (!text.trim()) {
            setIsSubmitting(false);
            return;
        }

        NOTE_CREATE(text)
            .then((res) => {
                console.log(res, '<-res');
            })
            .catch((e) => {
                console.error(e);
            })
            .finally(() => {
                if (formRef.current) formRef.current.reset();
                if (textareaRef.current) textareaRef.current.value = '';

                setIsSubmitting(false);
            });
    };

    return (
        <>
            <h2 className={style.textTitle}>Enter the text you want to encrypt</h2>

            <form ref={formRef} className={style.form} onSubmit={handleSubmit}>
                <button className={style.button} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Encrypting text...' : 'Encrypt text'}
                </button>

                <textarea
                    ref={textareaRef}
                    className={style.textarea}
                    placeholder="Enter the text you want to encrypt..."
                    name="textarea"
                    id="textarea"
                    disabled={isSubmitting}
                    autoFocus
                ></textarea>
            </form>
        </>
    );
}
