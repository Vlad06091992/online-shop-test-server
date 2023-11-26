import {productsRepository} from "../repository/products.repository";
import {QueryProductModel} from "../model/QueryProductModel";
import {filterProductsByColor} from "../../../utils/filterProductsByColor";
import {sortProducts} from "../../../utils/sortProducts";


export const productsService = { //business(application) layer
    async getProducts(params: QueryProductModel) {
        const {sortBy,sortOrder, colors} = params
        const colorsArray = colors?.split(',') || []
        const products = await productsRepository.getProducts()
        return sortProducts(filterProductsByColor(colorsArray, products),sortBy,sortOrder)
    },
}
