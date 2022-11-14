/* initially had Length<T extends {length: number}> but saw that there was an
expected error for Length<'hello world'> so switched to Length<T extends any[]>
but then got errors on Length<typeof tesla> which was because they were
readonly types. */

/* the rationale is that `T extends any[]` for `typeof tesla` can be thought of
as saying "can `typeof tesla` be assignable to `any[]`? and it cannot because
`readonly` is a narrower form. */

/* getting the resulting number makes use of indexed access types ("lookup
types") where we know the property we want to look up on the type and return
its value */
type Length<T extends readonly any[]> = T["length"];
