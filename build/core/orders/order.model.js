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
var Order = /** @class */ (function () {
    function Order() {
        this.schema = new mongoose_1.Schema({
            menu: [{
                    cantidad: {
                        type: Number,
                        required: [true, 'Requerido cantidad']
                    },
                    observations: String,
                    plate: {
                        type: mongoose_1.Schema.Types.ObjectId,
                        ref: 'Menu'
                    },
                }],
            _table: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Table'
            },
            total: { type: Number, required: [true, 'Requerido precio'] },
            _shop: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Shop'
            },
            status: { type: String, default: "En proceso" },
        }, {
            timestamps: true
        });
    }
    return Order;
}());
var shop = new Order();
exports.default = mongoose_1.default.model('Order', shop.schema);
