import { ProductRequest } from './Interface/productRequest.interface';
var api_11st = require('../../../API/11st/dist/src/index.js');

export const callApp = async (data: ProductRequest) => {
    try {
        const result = await Promise.all([api_11st.index(data.title)]);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};
