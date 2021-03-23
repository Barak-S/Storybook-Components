import { Story } from '@storybook/react';
import { FC, ReactNode } from 'react';

import { Styles } from 'styles';

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
  chromatic?: StoryMetaChromaticParameter;
  backgrounds?: StoryMetaBackgroundsParameter;
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

interface StoryMetaChromaticParameter {
  /** Disables Chromatic for this story */
  disable?: boolean;
  /** This helps you define one or more viewport sizes to capture */
  viewports?: number[];
  /** Notifies Chromatic to pause the animations when they finish for the specific story. */
  pauseAnimationAtEnd?: boolean;
  /**
   * Use story-level delay to ensure a minimum amount of time (in milliseconds) has
   * passed before Chromatic takes a screenshot.
   */
  delay?: boolean;
  /**
   * The diffThreshold parameter allows you to fine tune the threshold for visual
   * change between snapshots before they’re flagged by Chromatic
   */
  diffThreshold?: number;
}

interface StoryMetaBackgroundsParameter {
  default?: string;
  disable?: boolean;
  values?: StoryMetaBackgroundsParameterValue[];
}

interface StoryMetaBackgroundsParameterValue {
  name: string;
  value: string;
}

// Utils

export const sbAutoDetectActionProps: StoryMetaActionsParameter = {
  argTypesRegex: '^on.*',
};

export const sbStyles: Styles = {
  mt10: {
    marginTop: 10,
  },
  mb10: {
    marginBottom: 10,
  },
  mb30: {
    marginBottom: 30,
  },
};

export const sbChromaticDefViewports: StoryMetaChromaticParameter = {
  viewports: [375, 1194, 1800],
};

// Exports

export { Story };
