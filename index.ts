import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(): Promise<void> {
  try {
    const user = await prisma.user.create({
      data: {
        email: "test@example.com", // Change this as needed
        name: "John Doe",
      },
    });
    console.log("User inserted:", user);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
}

async function main(): Promise<void> {
  await insertUser();
}

main()
  .catch((error) => {
    console.error("Error in main function:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
