import * as rp from 'request-promise';
import { APISite } from '../product_search/src/option';
import { SiteRequest } from '../product_search/interface/SiteRequest.interface';

export const requestService = async (qs: SiteRequest) => {
    return rp.get({ url: APISite, qs, json: true, encoding: null });
};
