"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var menu_controller_1 = __importDefault(require("./menu.controller"));
var MenusRouter = /** @class */ (function () {
    function MenusRouter() {
        this.router = express_1.Router();
        this.config();
    }
    MenusRouter.prototype.config = function () {
        this.router.get('/', menu_controller_1.default.getAll);
        this.router.get('/:id', menu_controller_1.default.get);
        this.router.post('/', menu_controller_1.default.add);
        this.router.put('/:id', menu_controller_1.default.update);
        this.router.delete('/:id', menu_controller_1.default.delete);
    };
    return MenusRouter;
}());
var router = new MenusRouter();
exports.default = router.router;
