import client from './client';
import { PingApiResponse, CreateNoteApiResponse } from '../types';

export async function PING() {
    const response = await client.get<PingApiResponse>('/ping');
    return response.data;
}

export async function NOTE_CREATE(body: string) {
    const reqBody = { content: body };

    const response = await client.post<CreateNoteApiResponse>('/note', reqBody);
    return response.data;
}
