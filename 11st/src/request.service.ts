import * as rp from 'request-promise';
import { APISite } from '../option';
import { SiteRequest } from '../interface/SiteRequest.interface';

export const requestService = async (qs: SiteRequest) => {
  return rp.get({ url: APISite, qs, json: true, encoding: null });
};
