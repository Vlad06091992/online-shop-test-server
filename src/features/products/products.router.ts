import express from "express";
import {productsService} from "./domain/products.service";


export const getProductsRouter = () => {
    const router = express.Router()
    // router.get('/', async (req: RequestWithQuery<QueryProductModel>, res: Response<ProductsViewModel[]>) => {
    router.get('/', async (req:any,res:any) => {
        // debugger
        console.log(req.query)
        let foundedProducts = await productsService.getProducts()
        res.status(200).send(foundedProducts)
    })
    return router
}



