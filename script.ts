import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchUsers() {
  const users = await prisma.user.findMany();
  console.log(users);
}

async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);
}

fetchUsers()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
