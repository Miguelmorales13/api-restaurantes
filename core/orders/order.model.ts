import mongoose, { Schema } from "mongoose";
class Order {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            menu: [{ 
                cantidad:{
                    type:Number,
                    required:[true,'Requerido cantidad']
                },
                observations:String,
                plate:{
                    type: Schema.Types.ObjectId,
                    ref: 'Menu'
                },
            }],
            _table:{
                type: Schema.Types.ObjectId,
                ref: 'Table'
            },
            total: { type: Number, required: [true,'Requerido precio'] },
            _shop: { 
                type: Schema.Types.ObjectId, 
                ref: 'Shop' 
            },
            status: { type: String, default: "En proceso" },
            // En proceso, Terminada, Cancelada
        },{
            timestamps:true
        })
    }
}
const shop = new Order()
export default mongoose.model('Order', shop.schema)