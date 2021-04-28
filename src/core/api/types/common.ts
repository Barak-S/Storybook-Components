// Socials

import { isStr } from 'utils';

export interface Social {
  id: string;
  name: string;
  url: string;
}

export type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'google' | 'youtube' | 'custom';

export const socialTypeArr: SocialType[] = ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'];

export const isSocialType = (val: unknown): val is SocialType =>
  isStr(val) && ['facebook', 'twitter', 'linkedin', 'instagram', 'google', 'youtube', 'custom'].includes(val);

export interface Props {
  items: Social[];
  onChange?: (newItems: Social[]) => void;
}
