import db from "../../../db";

export const productsRepository = { // data access layer
    // async getProducts(title: string | null) {
    async getProducts() {
        // let filter = {}
        // if (title) {
        //     filter = {"title": {$regex: "title"}}
        // }
        let result = db.products
        return result
    },

    // async getProductsById(id: number) {
    //     const user: UserType | null = await usersCollection.findOne({id})
    //     if (user) {
    //         return (getUserViewModel(user))
    //     }
    //     return null
    // },

}