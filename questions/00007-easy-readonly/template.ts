/* make use of `keyof` to iterate keys P, looking them up ("index accessed
types" or "lookup types"), and marking them `readonly` */
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };
