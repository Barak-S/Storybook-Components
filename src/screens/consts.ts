/* istanbul ignore file */
export const routes = {
  index: '/',
  auth: {
    index: '/auth',
    signup: '/auth/signup',
    signin: '/auth/signin',
    reset: '/auth/reset',
    recover: '/auth/recover',
  },
  dashboard: {
    index: '/dashboard',
    analytics: '/dashboard/analytics',
    contact: '/dashboard/contact',
    events: '/dashboard/events',
    faq: '/dashboard/faq',
    notes: '/dashboard/notes',
    profile: '/dashboard/profile',
    support: '/dashboard/support',
    users: '/dashboard/users',
    onboarding: {
      index: '/dashboard/onboarding',
      profile: '/dashboard/onboarding/profile',
      team: '/dashboard/onboarding/team',
      theme: '/dashboard/onboarding/theme',
      event: '/dashboard/onboarding/event',
    },
  },
  policy: '/policy',
  terms: '/terms',
};
