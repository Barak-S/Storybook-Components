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
    notes: '/dashboard/notes',
    profile: '/dashboard/profile',
    support: '/dashboard/support',
    users: '/dashboard/users',
    setupSession: '/dashboard/setup-session',
    onboarding: {
      index: '/dashboard/onboarding',
      profile: '/dashboard/onboarding/profile',
      team: '/dashboard/onboarding/team',
      theme: '/dashboard/onboarding/theme',
      event: '/dashboard/onboarding/event',
    },
  },
  terms: '/terms',
  policy: '/policy',
  faq: '/faq',
};
