import { Equal } from "@type-challenges/utils";

/* note: this solution approach is from the comments of https://ghaiklor.github.io/type-challenges-solutions/en/easy-includes.html */

type Helper<T extends readonly unknown[], U> = {
  /* Omit<T, "length"> because  */
  [K in keyof Omit<T, "length"> as Equal<T[K], U> extends true
    ? K
    : never]: T[K];
};

/* debug cases */
type T1 = Helper<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">;
type T2 = Helper<[1 | 2], 1>;

export type Includes<T extends readonly unknown[], U> = {} extends Helper<T, U>
  ? false
  : true;
