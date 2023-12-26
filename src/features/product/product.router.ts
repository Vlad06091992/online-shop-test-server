import express,{Response} from "express";
import {RequestWithParams,ProductType} from "../../types";
import {productService} from "./domain/product.service";
import {URIParamsProductIdModel} from "./model/URIParamsProductIdModel";
import {HTTP_STATUSES} from "../../http_statuses/http_statuses";

type NotFoundType = { message: string, error_code: 404 };
/**
 * @openapi
 * /product/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags:
 *       - Product
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the product
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       '200':
 *         description: Product details by ID
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Product 1"
 *               price: 20.5
 *               image: "/images/product1.jpg"
 *               colors: ["red", "blue"]
 *               popularity: 8
 *               desc: "Description of Product 1"
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 image:
 *                   type: string
 *                 colors:
 *                   type: array
 *                   items:
 *                     type: string
 *                 popularity:
 *                   type: number
 *                 desc:
 *                   type: string
 *       '404':
 *         description: Product not found
 *         content:
 *           application/json:
 *             example:
 *               message: "Product not found"
 *               error_code: 404
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error_code:
 *                   type: number
 */

export const getProductRouter = () => {
    const router = express.Router()
    router.get('/:id', async (req: RequestWithParams<URIParamsProductIdModel>, res: Response<ProductType | NotFoundType>) => {
        const product = await productService.getProductById(+req.params.id)
        if (product) {
            res.send(product)
        } else {
            res.status(HTTP_STATUSES.NOT_FOUND_404).send({
                message: "Product not found",
                error_code: 404
            })
        }
    })
    return router
}



