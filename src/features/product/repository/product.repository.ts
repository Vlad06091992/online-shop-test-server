import db from "../../../db";
import {ProductType} from "../../../types";

export const productRepository = { // data access layer
    async getProductById(id: number) {
        const product: ProductType | null | undefined = db.products.find(el => el.id == id)
        return product
    },

}