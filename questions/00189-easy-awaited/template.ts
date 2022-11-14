/* assuming it is legal to use `PromiseLike`: */
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

/* note: if there was no error expected on MyAwaited<number> we could get by
with just: */
type MyAwaited2<T> = T extends PromiseLike<infer U> ? MyAwaited2<U> : T;
