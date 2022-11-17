/* step 1: use a conditional type rather than a type constraint as preference
of returning never rather than generating an error */

/* step 2: write type for any function and infer its return type */
type MyReturnType<T> = T extends (...args: never[]) => infer ReturnType
  ? ReturnType
  : never;
