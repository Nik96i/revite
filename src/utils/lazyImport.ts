import { lazy } from "react";
import type { ComponentType } from "react";

// Named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
export function lazyImport<
  T extends ComponentType<unknown>,
  I extends { [K2 in K]: T },
  K extends keyof I,
>(
  factory: () => Promise<I>,
  name: K,
): I {
  return Object.create({ [name]: lazy(async () => factory().then((module) => ({ default: module[name] }))) }) as I;
}
