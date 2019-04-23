import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
class User {
    schema: Schema;
    constructor() {
        this.schema = new Schema({
            name: { type: String, required: true },
            phone: { type: String, required: true },
            user: { type: String, required: true, unique: true, index: true },
            password: { 
                type: String, 
                required: true,
                set: function(value:string){
                    if (!value) return ''
                    return bcrypt.hashSync(value, 10)
                }
             },
            status: { type: String, default: "Activo" },
            rol: { type: String, required: true },
            _shop: { type: Schema.Types.ObjectId, ref: 'Shop', required:[false,'es requerida la tienda'] },
        },{
            timestamps:true
        })
    }
}
const user = new User()
export default mongoose.model('User', user.schema)