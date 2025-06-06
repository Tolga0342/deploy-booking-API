import prisma from "../../../prisma/prisma.js";
import NotFoundError from "../../errors/notFoundError.js";

const updatePropertyById = async (
  id,
  title,
  description,
  location,
  pricePerNight,
  bedroomCount,
  bathRoomCount,
  maxGuestCount,
  hostId,
  rating
) => {
  const updatedProperty = await prisma.property.updateMany({
    where: {
      id,
    },
    data: {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    },
  });

  if (!updatedProperty || updatedProperty.count === 0) {
    throw new NotFoundError("Property", id);
  }

  return {
    message: `Property with id ${id} was updated!`,
  };
};

export default updatePropertyById;
