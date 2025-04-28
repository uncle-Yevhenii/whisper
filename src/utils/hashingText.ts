import crypto from 'crypto';

import config from '../configs/config';
import { encryptResponse } from '../types/utils.types';

const { CRYPTO_ALGORITHM, CRYPTO_SECRET_KEY } = config.hashing;

export function encrypt(message: string): encryptResponse {
    const iv = crypto.randomBytes(16);
    const key = crypto.createHash('sha256').update(String(CRYPTO_SECRET_KEY)).digest();

    const cipher = crypto.createCipheriv(CRYPTO_ALGORITHM, key, iv);

    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
    };
}

export function decrypt(encryptedData: string, iv: string): string {
    const key = crypto.createHash('sha256').update(String(CRYPTO_SECRET_KEY)).digest();
    const decipher = crypto.createDecipheriv(CRYPTO_ALGORITHM, key, Buffer.from(iv, 'hex'));

    let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');

    return decryptedData;
}
