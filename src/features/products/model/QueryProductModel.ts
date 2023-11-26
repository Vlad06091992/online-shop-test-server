import {SortingFieldType, SortingOptionType} from "src/types";

export type QueryProductModel = {
    /**
     * title required for course search
     */
    colors?:string
    sortingOptions?:SortingOptionType
    sortField:SortingFieldType
}
