export interface TeamMemberInvite {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  userGroup: string;
  companyType: string;
  message: string;
}

export const isTeamMemberInvite = (val: unknown): val is TeamMemberInvite => true;

export interface TeamMember {
  firstName: string;
  lastName: string;
  email: string;
}
