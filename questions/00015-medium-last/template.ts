/* step 1: change the type constraint to extends unknown */

/* step 2: use a conditional type and the spread operator to grab the last item
of the array */
type Last<T extends unknown[]> = T extends [...any, infer L] ? L : never;
