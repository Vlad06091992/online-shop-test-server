import {productRepository} from "../repository/product.repository";

export const productService = { //business(application) layer
    getProductById(id: number) {
        return productRepository.getProductById(id)
    },
}