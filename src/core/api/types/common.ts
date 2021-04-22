// Socials

export interface Social {
  type: SocialType;
  name?: string;
  url: string;
}

export type SocialType = 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'custom';

export const socialTypeArr: SocialType[] = ['facebook', 'twitter', 'linkedin', 'instagram', 'custom'];
