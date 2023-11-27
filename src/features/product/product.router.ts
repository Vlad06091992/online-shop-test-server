import express,{Response} from "express";
import {RequestWithParams,ProductType} from "../../types";
import {productService} from "./domain/product.service";
import {URIParamsProductIdModel} from "./model/URIParamsProductIdModel";
import {HTTP_STATUSES} from "../../http_statuses/http_statuses";


export const getProductRouter = () => {
    const router = express.Router()
    router.get('/:id', async (req: RequestWithParams<URIParamsProductIdModel>, res: Response<ProductType | number>) => {
        const product = await productService.getProductById(+req.params.id)
        if (product) {
            res.send(product)
        } else {
            res.send(HTTP_STATUSES.NOT_FOUND_404)
        }
    })
    return router
}



