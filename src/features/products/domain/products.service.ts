import {productsRepository} from "../repository/products.repository";
import {QueryProductModel} from "../model/QueryProductModel";
import {filterColors} from "../../../utils/filterColors";
import {sortProducts} from "../../../utils/sortProducts";


export const productsService = { //business(application) layer
    async getProducts(params: QueryProductModel) {

        const {sortingOptions, sortField, colors} = params
        const colorsArray = colors?.split(',') || []
        const products = await productsRepository.getProducts()
        const filteredProducts = filterColors(colorsArray, products)
        const result = sortProducts(sortField, filteredProducts)
        return result
    },
}

// есть телефон, у телефона есть массив цветов, если хоть один из цветов телефона содержится в массиве цветов,
// то возвращем этот телефон