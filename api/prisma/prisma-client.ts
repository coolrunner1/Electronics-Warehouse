import { PrismaClient } from '../src/generated/prisma'

interface CustomNodeJsGlobal extends Global {
    prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
    global.prisma = prisma;
}

export default prisma;

export class SupplierWhereInput {
}