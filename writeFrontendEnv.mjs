import dotenv from 'dotenv';
import { writeFileSync } from 'fs';

dotenv.config();

const content = `
VITE_REACT_APP_SERVER_BASE_URL=${process.env.VITE_REACT_APP_SERVER_BASE_URL}
VITE_REACT_APP_CLIENT_BASE_URL=${process.env.VITE_REACT_APP_CLIENT_BASE_URL}
VITE_APP_NAME=${process.env.VITE_APP_NAME}
`;

writeFileSync('./frontend/.env.local', content);
console.warn('[writeFrontendEnv] .env.local written successfully');
