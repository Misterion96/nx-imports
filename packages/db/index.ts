import { Wrapper } from '@my-lib2/local';

export const DB = {
  header: new Wrapper('My header'),
  description: new Wrapper('My description'),
} as const;
