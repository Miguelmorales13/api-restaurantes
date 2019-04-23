"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var User = /** @class */ (function () {
    function User() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            phone: { type: String, required: true },
            user: { type: String, required: true, unique: true, index: true },
            password: {
                type: String,
                required: true,
                set: function (value) {
                    if (!value)
                        return '';
                    return bcrypt_1.default.hashSync(value, 10);
                }
            },
            status: { type: String, default: "Activo" },
            rol: { type: String, required: true },
            _shop: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Shop', required: [false, 'es requerida la tienda'] },
        }, {
            timestamps: true
        });
    }
    return User;
}());
var user = new User();
exports.default = mongoose_1.default.model('User', user.schema);
