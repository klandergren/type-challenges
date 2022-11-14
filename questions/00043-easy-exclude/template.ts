/* the key here is to understand that conditional types are distributive over
union types. see https://kip.land/knowledge/typescript for more info */
type MyExclude<T, U> = T extends U ? never : T;
