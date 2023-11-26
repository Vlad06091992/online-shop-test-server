import express,{Response} from "express";
import {productsService} from "./domain/products.service";
import {RequestWithQuery,ProductType} from "../../types";
import {QueryProductModel} from "./model/QueryProductModel";


export const getProductsRouter = () => {
    const router = express.Router()
    router.get('/', async (req: RequestWithQuery<QueryProductModel>, res: Response<ProductType[]>) => {
        let foundedProducts = await productsService.getProducts(req.query)
        res.status(200).send(foundedProducts)
    })
    return router
}



