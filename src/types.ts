import {Request} from "express";

export type RootDBType = {
    products:ProductType[]
}

export type ThemeColors = 'black' | 'blue' | 'green' | 'purple' | 'gray' | 'white'


export type ProductType = {
    id: number;
    name: string;
    price: number;
    image: string;
    colors: ThemeColors[];
    popularity: number;
    desc: string;
};

export type SortOrderType = 'asc' | 'desc'
export type SortByType = 'price' | 'popularity'

export type RequestWithQuery<T> = Request<{}, {}, {}, T>
export type RequestWithBody<T> = Request<{}, {}, T, {}>
export type RequestWithParams<T> = Request<T, {}, {}, {}>
export type RequestWithParamsAndBody<T,D> = Request<T, {}, D, {}>