import {ProductType, SortingFieldType} from "../types";

export const sortProducts = (sortField:SortingFieldType,products:ProductType[]) =>{
    return  products.sort((p1,p2)=>{
        console.log(sortField)
        return p1[sortField] - p2[sortField]
    })
}