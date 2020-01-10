export interface ProductResponse {
    // 상품이름
    name: string;
    // 상품가격
    price: number;
    // 상품 이미지 링크
    images: string;
    // 상품의 본 링크
    origin_url: string;
    // 상품의 site 이름 => 나중에 코드로 표현할 수 있을 거 같아가지고
    site: string;
    // 설명
    detail: string;
    // 기타
    etc: object;
}
