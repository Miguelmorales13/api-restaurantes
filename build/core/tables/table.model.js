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
var Table = /** @class */ (function () {
    function Table() {
        this.schema = new mongoose_1.Schema({
            number: { type: String, required: true },
            status: { type: String, default: "Desocupada" },
            _shop: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Shop' },
        }, {
            timestamps: true
        });
    }
    return Table;
}());
var table = new Table();
exports.default = mongoose_1.default.model('Table', table.schema);
