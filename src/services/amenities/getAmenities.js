import prisma from "../../../prisma/prisma.js";

const getAmenities = async (name) => {
  return prisma.amenity.findMany({
    where: {
      name,
    },
  });
};

export default getAmenities;
