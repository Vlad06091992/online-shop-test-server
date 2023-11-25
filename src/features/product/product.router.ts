import express from "express";
import {productService} from "./domain/product.service";
import {HTTP_STATUSES} from "../../http_statuses/http_statuses";


export const getProductRouter = () => {
    const router = express.Router()
    router.get('/:id', async (req: any, res: any) => {
        console.log(req.params.id)
        const product = await productService.getProductById(+req.params.id)
        if (product) {
            res.send(product)
        } else {
            res.send(HTTP_STATUSES.NOT_FOUND_404)
        }
    })
    return router
}



