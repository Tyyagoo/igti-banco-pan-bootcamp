import { OrderState } from "./types";

export type OrderKV = {
  key: string;
  value: OrderState;
};

export const enumKeys = <E extends object, K extends keyof E = keyof E>(
  e: E
): K[] => {
  return Object.keys(e).filter((k) => Number.isNaN(+k)) as K[];
};

export const parseStateOptions = () => {
  let arr: OrderKV[] = [];

  for (const key of enumKeys(OrderState)) {
    arr.push({
      key,
      value: OrderState[key],
    });
  }
  return arr;
};
