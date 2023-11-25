import {productsRepository} from "../repository/products.repository";

export const productsService = { //business(application) layer
    getProducts() {
        return productsRepository.getProducts()
    },
}