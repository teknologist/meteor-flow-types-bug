//@flow
import type { TestType } from './types';

export const test = (): string => {
  const testTypeVar: TestType = { item: 'Hello World!' };
  return testTypeVar.item;
};
