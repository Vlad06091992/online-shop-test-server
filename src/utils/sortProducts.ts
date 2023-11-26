import {ProductType, SortingFieldType, SortingOptionType} from "../types";

export const sortProducts = (products: ProductType[], sortField: SortingFieldType, sortOption?: SortingOptionType,) => {
    return products.sort((p1, p2) => {
        if (sortField == 'price' && sortOption === 'asc') {
            return p1[sortField] - p2[sortField]
        } else {
            return p2[sortField] - p1[sortField]
        }
    })
}