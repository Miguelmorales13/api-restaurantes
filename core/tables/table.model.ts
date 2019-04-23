import mongoose, { Schema } from "mongoose";
class Table {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            number: { type: String, required: true },
            status: { type: String, default: "Desocupada" },
            _shop: { type: Schema.Types.ObjectId, ref:'Shop' },
        },{
            timestamps:true
        })
    }
}
const table = new Table()
export default mongoose.model('Table', table.schema)