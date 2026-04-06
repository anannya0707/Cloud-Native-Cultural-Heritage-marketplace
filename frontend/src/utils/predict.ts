import regression from "regression";

export function getPrediction(data: number[]) {
  const formatted: [number, number][] = data.map((val, i) => [i, val]);

  const result = regression.polynomial(formatted, { order: 2 });

  const predicted = data.map((_, i) => result.predict(i)[1]);

  return predicted;
}