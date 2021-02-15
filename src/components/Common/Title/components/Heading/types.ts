import { Style } from 'styles';

export interface HeadingProps {
  type?: HeadingTypes;
  style?: Style;
  className?: string;
}

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
