import express,{Response} from "express";
import {productsService} from "./domain/products.service";
import {RequestWithQuery,ProductType} from "../../types";
import {QueryProductModel} from "./model/QueryProductModel";
import {HTTP_STATUSES} from "../../http_statuses/http_statuses";


export const getProductsRouter = () => {
    const router = express.Router()
    router.get('/', async (req: RequestWithQuery<QueryProductModel>, res: Response<ProductType[]>) => {
        let foundedProducts = await productsService.getProducts(req.query)
        res.status(HTTP_STATUSES.OK_200).send(foundedProducts)
    })
    return router
}



