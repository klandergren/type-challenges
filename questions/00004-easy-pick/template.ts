/* I want to return the literal union of keys of T that match K, or error */
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
