import "dotenv/config";
import express, {json} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {getProductsRouter} from "./features/products/products.router";
import {getProductRouter} from "./features/product/product.router";

const app = express();
const port = process.env.PORT || 7542;

export const Routes = {
  products: '/products',
  product: '/product',
}


app.use(json());
app.use(cors());
app.use(bodyParser())
app.use(Routes.products, getProductsRouter())
app.use(Routes.product, getProductRouter())

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
