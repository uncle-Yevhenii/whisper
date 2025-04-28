import { PingServiceResponse } from '../types/ping.types';

export const pingService = (): PingServiceResponse => {
    return {
        message: 'pong',
    };
};
