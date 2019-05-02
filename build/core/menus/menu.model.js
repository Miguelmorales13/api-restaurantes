"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var Menu = /** @class */ (function () {
    function Menu() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: [true, 'Requerido nombre'] },
            price: { type: Number, required: [true, 'Requerido precio'] },
            description: { type: String, required: [true, 'Requerido descripcion'] },
            status: { type: String, default: "Activo" },
            _categori: { type: mongoose_1.Schema.Types.ObjectId, ref: "Categori" },
            _shop: { type: mongoose_1.Schema.Types.ObjectId, ref: "Shop" },
        }, {
            timestamps: true
        });
    }
    return Menu;
}());
var shop = new Menu();
exports.default = mongoose_1.default.model('Menu', shop.schema);
