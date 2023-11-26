import {SortingFieldType, SortingOptionType} from "../../../types";

export type QueryProductModel = {
    colors?:string
    sortingOption?:SortingOptionType
    sortField:SortingFieldType
}
