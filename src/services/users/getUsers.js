import prisma from "../../../prisma/prisma.js";

const getUsers = async (username, email) => {
  return prisma.user.findMany({
    where: {
      username,
      email,
    },
    select: {
      id: true,
      username: true,
      email: true,
      phoneNumber: true,
      name: true,
      profilePicture: true,
    },
  });
};

export default getUsers;
