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
    events: '/dashboard/events',
    analytics: '/dashboard/analytics',
    users: '/dashboard/users',
    profile: '/dashboard/profile',
    notes: '/dashboard/notes',
  },
  policy: '/policy',
  terms: '/terms',
};
