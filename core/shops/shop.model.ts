import mongoose, { Schema } from "mongoose";
class Shop {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: true },
            address: { type: String, required: true },
            status: { type: String, default: "Activo" },
        },{
            timestamps:true
        })
    }
}
const shop = new Shop()
export default mongoose.model('Shop', shop.schema)