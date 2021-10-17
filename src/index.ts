import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      id: '917b23df-6be4-43ae-896c-b72cf79c4266',
      name: 'Caio Antonio',
      email: 'caiocichetti08@gmail.com',
      group: {
        connectOrCreate: {
          where: {
            id: '0cd395fb-cacb-4f33-8ddf-1600f02451f1',
          },
          create: {
            id: '0cd395fb-cacb-4f33-8ddf-1600f02451f1',
            title: 'Developers',
          },
        },
      },
    },
  });
}

main();
