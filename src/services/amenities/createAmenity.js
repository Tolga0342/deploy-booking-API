import prisma from "../../../prisma/prisma.js";

const createAmenity = async (name) => {
  if (!name) {
    // throw new Error("name not found");
    return null;
  }

  return prisma.amenity.create({
    data: {
      name,
    },
  });
};

export default createAmenity;
