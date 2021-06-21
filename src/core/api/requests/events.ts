import {
  ApiDataResp,
  ApiReqHandler,
  Event,
  EventCreate,
  EventProfile,
  EventProfileSchema,
  EventProfileUpdate,
  EventRegistration,
  EventRegistrationSchema,
  EventRegistrationUpdate,
  EventSchema,
  EventSession,
  EventSessionSchema,
  EventSessionUpdate,
  EventSettings,
  EventSettingsSchema,
  EventSettingsUpdate,
  EventUpdate,
  getRespArrSchema,
  getRespSchema,
} from '../types';

export const getEventsRequests = (apiReq: ApiReqHandler) => {
  const list = async (orgId: string): Promise<ApiDataResp<Event[]>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events`, schema: getRespArrSchema(EventSchema) });

  const get = async (orgId: string, eventId: string): Promise<ApiDataResp<Event>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events/${eventId}`, schema: getRespSchema(EventSchema) });

  const create = async (orgId: string, data: EventCreate): Promise<ApiDataResp<Event>> =>
    apiReq({
      auth: true,
      method: 'POST',
      path: `/orgs/${orgId}/events`,
      data,
      schema: getRespSchema(EventSchema),
    });

  const modify = async (orgId: string, eventId: string, data: EventUpdate): Promise<ApiDataResp<Event>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/events/${eventId}`,
      data,
      schema: getRespSchema(EventSchema),
    });

  const remove = async (orgId: string, eventId: string): Promise<void> =>
    apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}/events/${eventId}` });

  const getProfile = async (orgId: string, eventId: string): Promise<ApiDataResp<EventProfile | undefined>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events/${eventId}/profile`, schema: getRespSchema(EventProfileSchema) });

  const modifyProfile = async (orgId: string, eventId: string, data: EventProfileUpdate): Promise<ApiDataResp<EventProfile>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/events/${eventId}/profile`,
      data,
      schema: getRespSchema(EventProfileSchema),
    });

  const getSettings = async (orgId: string, eventId: string): Promise<ApiDataResp<EventSettings | undefined>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events/${eventId}/settings`, schema: getRespSchema(EventSettingsSchema) });

  const modifySettings = async (orgId: string, eventId: string, data: EventSettingsUpdate): Promise<ApiDataResp<EventSettings>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/events/${eventId}/settings`,
      data,
      schema: getRespSchema(EventSettingsSchema),
    });

  const getRegistration = async (orgId: string, eventId: string): Promise<ApiDataResp<EventRegistration | undefined>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events/${eventId}/registration`, schema: getRespSchema(EventRegistrationSchema) });

  const modifyRegistration = async (
    orgId: string,
    eventId: string,
    data: EventRegistrationUpdate,
  ): Promise<ApiDataResp<EventRegistration>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/events/${eventId}/registration`,
      data,
      schema: getRespSchema(EventRegistrationSchema),
    });

  const listSessions = async (orgId: string, eventId: string): Promise<ApiDataResp<EventSession[]>> =>
    apiReq({ auth: true, path: `/orgs/${orgId}/events/${eventId}/sessions`, schema: getRespArrSchema(EventSessionSchema) });

  const getSession = async (orgId: string, eventId: string, sessionId: string): Promise<ApiDataResp<EventSession>> =>
    apiReq({
      auth: true,
      path: `/orgs/${orgId}/events/${eventId}/sessions/${sessionId}`,
      schema: getRespSchema(EventSessionSchema),
    });

  const modifySession = async (
    orgId: string,
    eventId: string,
    sessionId: string,
    data: EventSessionUpdate,
  ): Promise<ApiDataResp<EventSession>> =>
    apiReq({
      auth: true,
      method: 'PUT',
      path: `/orgs/${orgId}/events/${eventId}/sessions/${sessionId}`,
      data,
      schema: getRespSchema(EventSessionSchema),
    });

  const removeSession = async (orgId: string, eventId: string, sessionId: string): Promise<void> =>
    apiReq({ auth: true, method: 'DELETE', path: `/orgs/${orgId}/events/${eventId}/sessions/${sessionId}` });

  return {
    list,
    get,
    create,
    modify,
    remove,
    getProfile,
    modifyProfile,
    getSettings,
    modifySettings,
    getRegistration,
    modifyRegistration,
    listSessions,
    getSession,
    modifySession,
    removeSession,
  };
};
