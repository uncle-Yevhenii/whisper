import { encrypt, decrypt } from '../utils/hashingText';
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export const noteCreateService = async (content: string): Promise<string> => {
    const { iv, encryptedData } = encrypt(content);

    const note = await prisma.note.create({ data: { text: encryptedData, iv } });

    return note.id;
};

export const noteGetByIdService = async (id: string): Promise<string | null> => {
    const note = await prisma.note.findUnique({ where: { id } });
    if (!note) return null;

    const decryptedData = decrypt(note.text, note.iv);

    return decryptedData;
};
