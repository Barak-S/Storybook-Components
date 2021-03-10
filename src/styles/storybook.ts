import { FC } from 'react';
import { Story } from '@storybook/react';

export interface StoryMeta<P> {
  title?: string;
  component?: FC<P>;
  subcomponents?: Record<string, FC>;
  args?: Partial<P>;
  argTypes?: StoryMetaArgTypes<P>;
  parameters?: StoryMetaParameters;
}

type StoryMetaArgTypes<P> = {
  [key in keyof P]?: StoryMetaArgType;
};

interface StoryMetaArgType {
  /** The name of the property */
  name?: string;
  type?: StoryMetaArgTypeDescr;
  defaultValue?: unknown;
  /** A Markdown description for the property */
  description?: string;
  table?: StoryMetaArgTable;
  control?: StoryControlType;
  min?: number;
  max?: number;
  step?: number;
  options?: unknown[];
  separator?: string;
}

interface StoryMetaArgTypeDescr {
  name?: string;
  /** The stories to be show, ordered by supplied name */
  required?: boolean;
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
  | 'date'
  | false;

interface StoryMetaArgTable {
  disable?: boolean;
  category?: string;
  subcategory?: string;
  type?: {
    /** A short version of the type */
    summary?: string;
    /** A long version of the type */
    detail?: string;
  };
  defaultValue?: {
    /** A short version of the default value */
    summary?: string;
    /** A long version of the default value */
    detail?: string;
  };
}

interface StoryMetaParameters {
  docs?: {
    inlineStories?: boolean;
    /** Description block */
    description?: {
      component?: string;
      story?: string;
    };
    /** Source code block */
    source?: {
      /**
       * Parameter that controls how source is auto-generated. Valid values include:
       * `auto` - Use dynamic snippets if the story is written using Args and the framework supports it.
       * `dynamic` - Dynamically generated snippet based on the output of the story function, e.g. JSX code for react.
       * `code` - Use the raw story source as written in the story file
       */
      type?: 'auto' | 'dynamic' | 'code';
      /** The source snippet that’s displayed for a stor */
      code?: string;
    };
  };
  /** Add component subtitle */
  componentSubtitle?: string;
}

export { Story };
