export const roundNumber = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export const formatPrice = (price: number) => `$${price.toFixed(2)}`;
