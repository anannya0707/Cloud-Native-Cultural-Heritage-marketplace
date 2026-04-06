export function calculateBreakEven(
  fixedCost: number,
  price: number,
  variableCost: number
) {
  return fixedCost / (price - variableCost);
}