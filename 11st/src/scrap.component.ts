import { APIkey } from '../option';
import { requestService } from './request.service';
import * as iconv from 'iconv-lite';
import { parseStringPromise } from 'xml2js';
import {
  SiteResponse,
  SiteResponseDetail,
} from '../interface/SiteResponse.interface';
import { responseMapping } from './responseMapping';

export const scrapComponent = async (keyWord: string) => {
  const query_string = makeQuery(keyWord);
  const response = await requestService(query_string);
  const xml_string = iconv.decode(Buffer.from(response), 'EUC-KR').toString();
  const product_list: SiteResponse = await parseStringPromise(xml_string);
  const product_detail_list: SiteResponseDetail[] =
    product_list.ProductSearchResponse.Products[0].Product;
  const mapping_to_form = product_detail_list.map(responseMapping);
  return mapping_to_form;
};

const makeQuery = (keyword: string) => ({
  key: APIkey,
  apiCode: 'ProductSearch',
  keyword,
  pageNum: '1',
});
