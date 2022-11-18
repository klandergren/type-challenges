/* step 1: notice the ts-expect-error and add a type constraint `K extends
keyof T` */

/* step 2: notice the `MyReadonly2<Todo1>` case (no `K` supplied) and use a
default argument for K with `K extends keyof T = keyof T` */

/* step 3: create two different types and take their intersection: one where
the member types of `K` are marked readonly and the second where those _not_
member types of `K` are treated as normal. */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in keyof T as Key extends K ? Key : never]: T[Key];
} & {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

/* debug cases */

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

type T00 = MyReadonly2<Todo1>;
type T01 = MyReadonly2<Todo1, "title" | "description">;
type T02 = MyReadonly2<Todo2, "title" | "description">;
