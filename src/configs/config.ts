import dotenv from 'dotenv';

dotenv.config();

const config = {
    server: {
        PORT: process.env.PORT || 3000,
    },
    hashing: {
        CRYPTO_ALGORITHM: process.env.CRYPTO_ALGORITHM || '',
        CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY || '',
    },
};

export default config;
