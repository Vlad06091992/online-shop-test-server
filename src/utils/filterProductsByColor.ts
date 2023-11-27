import {ProductType} from "../types";

export const filterProductsByColor = (colors:string[], products:ProductType[]) => {
    return products.filter(p => {
        if (!colors.length) return true
        return isSubarray(colors,p.colors)
    })
}

function isSubarray(subArray:string[],mainArray:string[]) {
    if (subArray.length > mainArray.length) {
        return false;
    }

    const mainArrayCopy = [...mainArray];
    const subArrayCopy = [...subArray];

    for (let i = 0; i < subArray.length; i++) {
        const index = mainArrayCopy.indexOf(subArrayCopy[i]);
        if (index === -1) {
            return false;
        }
        mainArrayCopy.splice(index, 1);
    }
    return true;
}