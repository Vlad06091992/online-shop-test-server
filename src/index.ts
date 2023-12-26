import "dotenv/config";
import express, {json} from "express";
import cors from "cors";
import {getProductsRouter} from "./features/products/products.router";
import {getProductRouter} from "./features/product/product.router";

const CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.1.4/swagger-ui.css";
const app = express();
const port = process.env.PORT || 7542;

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API Docs",
            version: '1.0.0'
        },
    },
    servers: [
        {
            url: "https://nodejs-swagger-api.vercel.app/",
            description: "My API Documentation",
        },
    ],
    apis: ['./**/*.js', './**/*.ts',"src/**/*.js",'dist/**/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);


export const Routes = {
    products: '/products',
    product: '/product',
}

app.use(json());
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.static('src'));
app.use('*.css', (req, res, next) => {
    res.set('Content-Type', 'text/css');
    next();
});

app.use("/",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {customCssUrl: CSS_URL})
);



app.use(Routes.products, getProductsRouter())
app.use(Routes.product, getProductRouter())

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
