import { ProductScrapResult } from '../interface/ProductScrapResult.interface';
import { SiteResponseDetail } from '../interface/SiteResponse.interface';

export const responseMapping = (
  input: SiteResponseDetail,
): ProductScrapResult => ({
  siteName: '11번가',
  productName: input.ProductName[0] ?? '',
  price: parseInt(input.SalePrice[0], 10) || -1,
  seller: input.Seller[0] ?? '',
  images: productScrapImagesMapping(input),
  rating: parseInt(input.Rating[0], 10) ?? -1,
  commentNum: parseInt(input.ReviewCount[0], 10) ?? -1,
  productLink: input.DetailPageUrl[0] ?? '',
});

const productScrapImagesMapping = (input: SiteResponseDetail): string[] => [
  input.ProductImage100[0],
  input.ProductImage110[0],
  input.ProductImage120[0],
  input.ProductImage130[0],
  input.ProductImage140[0],
  input.ProductImage150[0],
  input.ProductImage170[0],
  input.ProductImage200[0],
  input.ProductImage250[0],
  input.ProductImage270[0],
  input.ProductImage300[0],
  input.ProductImage[0],
];
