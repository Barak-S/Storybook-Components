// Socials

export interface Social {
  id: string;
  name: string;
  url: string;
}

export type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'custom';

export const socialTypeArr: SocialType[] = ['facebook', 'twitter', 'linkedin', 'instagram', 'custom'];

export interface Props {
  items: Social[];
  onChange?: (newItems: Social[]) => void;
}
