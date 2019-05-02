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
var Categori = /** @class */ (function () {
    function Categori() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: [true, 'Requerido nombre'] },
            _shop: { type: mongoose_1.Schema.Types.ObjectId, ref: "Shop" },
        }, {
            timestamps: true
        });
    }
    return Categori;
}());
var categori = new Categori();
exports.default = mongoose_1.default.model('Categori', categori.schema);
