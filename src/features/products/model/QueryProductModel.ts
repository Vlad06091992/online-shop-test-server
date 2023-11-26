import {SortByType,SortOrderType} from "../../../types";

export type QueryProductModel = {
    colors?:string
    sortOrder?:SortOrderType
    sortBy:SortByType
}
