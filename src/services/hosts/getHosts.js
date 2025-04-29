import prisma from "../../../prisma/prisma.js";

const getHosts = async (name) => {
  return prisma.host.findMany({
    where: {
      name,
    },
    select: {
      id: true,
      username: true,
      name: true,
      email: true,
      phoneNumber: true,
      profilePicture: true,
      aboutMe: true,
    },
  });
};

export default getHosts;
