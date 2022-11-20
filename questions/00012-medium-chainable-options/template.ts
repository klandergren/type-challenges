/* largely learned from comments at
https://ghaiklor.github.io/type-challenges-solutions/en/medium-chainable-options.html
*/
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & { [P in K]: V }>;
  get(): T;
};
