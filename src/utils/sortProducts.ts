import {ProductType, SortByType,SortOrderType} from "../types";

export const sortProducts = (products: ProductType[], sortBy:SortByType, sortOrder?: SortOrderType,) => {
    return products.sort((p1, p2) => {
        if (sortBy == 'price' && sortOrder === 'asc') {
            return p1[sortBy] - p2[sortBy]
        } else {
            return p2[sortBy] - p1[sortBy]
        }
    })
}