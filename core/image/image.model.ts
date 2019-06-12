import mongoose, { Schema } from "mongoose";
class Image {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: [true, 'Requerido nombre'] },
            link: { type: String, required: [true, 'Requerido link'] },
        }, {
                timestamps: true
            })
    }
}
const image = new Image()
export default mongoose.model('Image', image.schema)