export type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

export type AnyFunction = (...args: any[]) => any;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

// tslint:disable-next-line
export type StringMap<T> = { [key: string]: T };
