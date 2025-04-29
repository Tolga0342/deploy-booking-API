import prisma from "../../../prisma/prisma.js";

const getProperties = async (location, pricePerNight) => {
  const newPricePerNight = pricePerNight
    ? parseFloat(pricePerNight)
    : undefined;

  return prisma.property.findMany({
    where: {
      ...(location && { location }),
      ...(newPricePerNight && { pricePerNight: newPricePerNight }),
    },
  });
};

export default getProperties;
