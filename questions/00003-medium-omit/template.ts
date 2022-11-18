/* step 1: look at the expect error test case. anytime I see an expect error I
think: this probably needs a type constraint. so first addition is `K extends
keyof T` */

/* step 2: the resulting type in the example excludes some keys, so when I see
that I think: create a mapped type where the keys are checked with a
conditional type returning never on some condition */
type MyOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

/* debug cases */
interface Foo {
  title: string;
  description: string;
  completed: boolean;
}

type T0 = MyOmit<Foo, "description" | "completed">;
