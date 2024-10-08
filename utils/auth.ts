import { auth } from '@clerk/nextjs/server';
import { prisma } from './db';

export const getUserByClerkID = async () => {
  const { userId } = auth();

  const user = prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });
  return user;
};
