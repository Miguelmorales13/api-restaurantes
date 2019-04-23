"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("./users/user.controller"));
var table_controller_1 = __importDefault(require("./tables/table.controller"));
var shop_controller_1 = __importDefault(require("./shops/shop.controller"));
var order_controller_1 = __importDefault(require("./orders/order.controller"));
var menu_controller_1 = __importDefault(require("./menus/menu.controller"));
var auth_controller_1 = __importDefault(require("./auth/auth.controller"));
var auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.users();
        this.tables();
        this.shops();
        this.orders();
        this.menus();
        this.auth();
        this.static();
    }
    Routes.getInstance = function () {
        if (!Routes.instance)
            Routes.instance = new Routes();
        return Routes.instance;
    };
    Routes.prototype.users = function () {
        this.router.get('/users/', auth_middleware_1.default.auth, user_controller_1.default.getAll);
        this.router.get('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.get);
        this.router.post('/users/', user_controller_1.default.add);
        this.router.put('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.update);
        this.router.delete('/users/:id', auth_middleware_1.default.auth, user_controller_1.default.delete);
    };
    Routes.prototype.tables = function () {
        this.router.get('/tables/', auth_middleware_1.default.auth, table_controller_1.default.getAll);
        this.router.get('/tables/:id', auth_middleware_1.default.auth, table_controller_1.default.get);
        this.router.post('/tables/', auth_middleware_1.default.auth, table_controller_1.default.add);
        this.router.put('/tables/:id', auth_middleware_1.default.auth, table_controller_1.default.update);
        this.router.delete('/tables/:id', auth_middleware_1.default.auth, table_controller_1.default.delete);
    };
    Routes.prototype.shops = function () {
        this.router.get('/shops/', auth_middleware_1.default.auth, shop_controller_1.default.getAll);
        this.router.get('/shops/:id', auth_middleware_1.default.auth, shop_controller_1.default.get);
        this.router.post('/shops/', auth_middleware_1.default.auth, shop_controller_1.default.add);
        this.router.put('/shops/:id', auth_middleware_1.default.auth, shop_controller_1.default.update);
        this.router.delete('/shops/:id', auth_middleware_1.default.auth, shop_controller_1.default.delete);
    };
    Routes.prototype.orders = function () {
        this.router.get('/orders/', auth_middleware_1.default.auth, order_controller_1.default.getAll);
        this.router.get('/orders/process', auth_middleware_1.default.auth, order_controller_1.default.getAllProcess);
        this.router.get('/orders/:id', auth_middleware_1.default.auth, order_controller_1.default.get);
        this.router.post('/orders/', auth_middleware_1.default.auth, order_controller_1.default.add);
        this.router.put('/orders/:id', auth_middleware_1.default.auth, order_controller_1.default.update);
        this.router.delete('/orders/:id', auth_middleware_1.default.auth, order_controller_1.default.delete);
    };
    Routes.prototype.menus = function () {
        this.router.get('/menus/', auth_middleware_1.default.auth, menu_controller_1.default.getAll);
        this.router.get('/menus/:id', auth_middleware_1.default.auth, menu_controller_1.default.get);
        this.router.post('/menus/', auth_middleware_1.default.auth, menu_controller_1.default.add);
        this.router.put('/menus/:id', auth_middleware_1.default.auth, menu_controller_1.default.update);
        this.router.delete('/menus/:id', auth_middleware_1.default.auth, menu_controller_1.default.delete);
    };
    Routes.prototype.auth = function () {
        this.router.get('/auth/:id', auth_controller_1.default.logout);
        this.router.post('/auth/', auth_controller_1.default.login);
    };
    Routes.prototype.static = function () {
    };
    return Routes;
}());
exports.default = Routes.getInstance().router;
