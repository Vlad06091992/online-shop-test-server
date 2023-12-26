import express,{Response} from "express";
import {productsService} from "./domain/products.service";
import {RequestWithQuery,ProductType} from "../../types";
import {QueryProductModel} from "./model/QueryProductModel";
import {HTTP_STATUSES} from "../../http_statuses/http_statuses";

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Returns all products
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: colors
 *         description: Color of the product
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: sortOrder
 *         description: Sort order (asc or desc)
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *         required: false
 *       - in: query
 *         name: sortBy
 *         description: Sorting by property
 *         schema:
 *           type: string
 *           enum:
 *             - price
 *             - popularity
 *         required: false
 *     description: Get all products
 *     responses:
 *       '200':
 *         description: Ok
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Product 1"
 *                 price: 20.5
 *                 image: "/images/product1.jpg"
 *                 colors: ["red", "blue"]
 *                 popularity: 8
 *                 desc: "Description of Product 1"
 *               - id: 2
 *                 name: "Product 2"
 *                 price: 30.0
 *                 image: "/images/product2.jpg"
 *                 colors: ["green", "yellow"]
 *                 popularity: 5
 *                 desc: "Description of Product 2"
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   image:
 *                     type: string
 *                   colors:
 *                     type: array
 *                     items:
 *                       type: string
 *                   popularity:
 *                     type: number
 *                   desc:
 *                     type: string
 */
export const getProductsRouter = () => {
    const router = express.Router()
    router.get('/', async (req: RequestWithQuery<QueryProductModel>, res: Response<ProductType[]>) => {
        let foundedProducts = await productsService.getProducts(req.query)
        res.status(HTTP_STATUSES.OK_200).send(foundedProducts)
    })
    return router
}



