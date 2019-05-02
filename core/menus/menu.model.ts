import mongoose, { Schema } from "mongoose";
class Menu {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: [true, 'Requerido nombre'] },
            price: { type: Number, required: [true, 'Requerido precio'] },
            description: { type: String, required: [true, 'Requerido descripcion'] },
            status: { type: String, default: "Activo" },
            _categori: { type: Schema.Types.ObjectId, ref: "Categori" },
            _shop: { type: Schema.Types.ObjectId, ref: "Shop" },
        }, {
                timestamps: true
            })
    }
}
const shop = new Menu()
export default mongoose.model('Menu', shop.schema)