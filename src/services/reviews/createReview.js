import prisma from "../../../prisma/prisma.js";

const createReview = async (userId, propertyId, rating, comment) => {
  if (!userId) {
    // throw new Error("UserID not found");
    return null;
  }

  return prisma.review.create({
    data: {
      userId,
      propertyId,
      rating,
      comment,
    },
  });
};

export default createReview;
