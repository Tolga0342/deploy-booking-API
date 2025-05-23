import prisma from "../../../prisma/prisma.js";
import NotFoundError from "../../errors/notFoundError.js";

const updateBookingById = async (
  id,
  userId,
  propertyId,
  checkinDate,
  checkoutDate,
  numberOfGuests,
  totalPrice,
  bookingStatus
) => {
  const updatedBooking = await prisma.booking.updateMany({
    where: {
      id,
    },
    data: {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    },
  });

  if (!updatedBooking || updatedBooking.count === 0) {
    throw new NotFoundError("Booking", id);
  }

  return {
    message: `Booking with id ${id} was updated!`,
  };
};

export default updateBookingById;
