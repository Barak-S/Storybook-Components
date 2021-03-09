import { FC } from 'react';

export type StoryFC<P> = FC<Partial<P>>;

export interface StoryConf<P> {
  title?: string;
  component: FC<P>;
  args?: Partial<P>;
  argTypes?: StoryConfArgTypes<P>;
}

type StoryConfArgTypes<P> = {
  [key in keyof P]?: StoryConfArgType;
};

interface StoryConfArgType {
  control?: StoryControlType;
  defaultValue?: unknown;
  min?: number;
  max?: number;
  step?: number;
  options?: unknown[];
  separator?: string;
}

type StoryControlType =
  | 'array'
  | 'boolean'
  | 'number'
  | 'range'
  | 'object'
  | 'radio'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'select'
  | 'multi-select'
  | 'text'
  | 'color'
  | 'date';
