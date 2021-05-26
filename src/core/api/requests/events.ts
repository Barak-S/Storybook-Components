import {
  ApiDataResp,
  ApiReqHandler,
  Event,
  EventCreate,
  EventSchema,
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

  return { list, get, create, modify, remove };
};
