import {ProductType} from "../types";

export const filterColors = (colors:string[], products:ProductType[]) => {
    return products.filter(p => {
        if (!colors.length) return true
        let res = false
        for (let color of p.colors) {
            if (colors.includes(color)) res = true
        }
        return res
    })
}