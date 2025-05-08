import { RouterPath } from '../constants/route';

export function sharedClientLink(uuid = ''): string {
    const BASE_URL: string = import.meta.env.VITE_REACT_APP_CLIENT_BASE_URL;
    const path = RouterPath.DECRYPT.replace(':id', uuid);
    return `${BASE_URL}${path}`;
}
