import {productsRepository} from "../repository/products.repository";
import {QueryProductModel} from "../model/QueryProductModel";
import {filterColors} from "../../../utils/filterColors";
import {sortProducts} from "../../../utils/sortProducts";


export const productsService = { //business(application) layer
    async getProducts(params: QueryProductModel) {
        const {sortingOption, sortField, colors} = params
        const colorsArray = colors?.split(',') || []
        const products = await productsRepository.getProducts()
        return  sortProducts(filterColors(colorsArray, products),sortField,sortingOption)
    },
}
