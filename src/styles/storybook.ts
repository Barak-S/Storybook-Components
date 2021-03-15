import { Story } from '@storybook/react';
import { FC, ReactNode } from 'react';

import { Styles } from './types';

export interface StoryMeta<P = Record<string, unknown>> {
  title?: string;
  component?: FC<P>;
  subcomponents?: Record<string, FC>;
  args?: Partial<P> & { children?: ReactNode };
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
  /** action to be logged */
  action?: string;
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
  docs?: StoryMetaDocsParameter;
  /** Add component subtitle */
  componentSubtitle?: string;
  /** Component indents and position at the canvas */
  layout?: StoryMetaLayoutParameter;
  actions?: StoryMetaActionsParameter;
}

interface StoryMetaDocsParameter {
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
}

type StoryMetaLayoutParameter = 'centered' | 'fullscreen' | 'padded';

interface StoryMetaActionsParameter {
  /**
   * The following configuration automatically creates actions for each on argType
   * (which you can either specify manually or can be inferred automatically).
   * @example { argTypesRegex: '^on.*' }
   */
  argTypesRegex?: string;
  handles?: string[];
}

// Utils

export const sbAutoDetectActionProps: StoryMetaParameters = {
  actions: { argTypesRegex: '^on.*' },
};

export const sbStyles: Styles = {
  rowIndent: {
    marginTop: 14,
  },
};

// Exports

export { Story };
