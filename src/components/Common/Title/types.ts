import { MergeStyleVal, Style } from 'styles';
import { HeadingTypes } from './components/Heading/types';

export interface TitleProps {
  className?: string;
  style?: Style | MergeStyleVal[];
  size?: number | string;
  bold?: boolean;
  color?: string;
  content?: string;
  type?: HeadingTypes;
}
