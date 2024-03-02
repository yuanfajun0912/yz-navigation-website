import { PrismaClient } from '@prisma/client';

declare global {
  // 全局声明prisma
  var prisma: PrismaClient | undefined;
}

// 全局就一个client
const client = globalThis.prisma || new PrismaClient();
globalThis.prisma = client;

export default client;