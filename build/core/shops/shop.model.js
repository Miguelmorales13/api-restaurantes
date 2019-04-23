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
var Shop = /** @class */ (function () {
    function Shop() {
        this.schema = new mongoose_1.Schema({
            name: { type: String, required: true },
            address: { type: String, required: true },
            status: { type: String, default: "Activo" },
        }, {
            timestamps: true
        });
    }
    return Shop;
}());
var shop = new Shop();
exports.default = mongoose_1.default.model('Shop', shop.schema);
