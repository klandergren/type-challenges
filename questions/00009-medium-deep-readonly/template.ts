/* step 1: recognize that the resulting type's fields are the originals but
made readonly, so we should look into mapped types */

/* step 2: mark the field as read-only but only if it extends object. o/w just
return the field */

/* step 3: `readonly () => 22` fails the comparison check, so add helper type
`NotFunction` to restrict our recursive descent */
type NotFunction<T> = T extends Function ? false : true;

type DeepReadonly<T> = NotFunction<T> extends true
  ? {
      readonly [Key in keyof T]: T[Key] extends object
        ? DeepReadonly<T[Key]>
        : T[Key];
    }
  : T;
