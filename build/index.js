"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var http_1 = __importDefault(require("http"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
var multer_1 = __importDefault(require("multer"));
// import cloudinary from 'cloudinary'
process.env.SECRET = process.env.SECRET || 'pepito';
var socket_1 = __importDefault(require("./sockets/socket"));
require("./db");
var Routes_1 = __importDefault(require("./core/Routes"));
var App = /** @class */ (function () {
    function App() {
        var _a;
        dotenv_1.default.config();
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.Server(this.server, {
            cors: {
                origin: [(_a = process.env.HOST_FRONT) !== null && _a !== void 0 ? _a : 'http://localhost:8080'],
                credentials: true
            }
        });
        this._socket = socket_1.default(this.io);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../dist/')));
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.set('io', this.io);
        var storage = multer_1.default.diskStorage({
            destination: path_1.default.join(__dirname, 'public/uploads'),
            filename: function (req, file, cb) {
                cb(null, new Date().getTime() + path_1.default.extname(file.originalname));
                return;
            }
        });
        this.app.use(multer_1.default({ storage: storage }).single('image'));
        // cloudinary.config({
        //     cloud_name: process.env.CLOUDINARY_NAME || 'restaurantix',
        //     api_key: process.env.CLOUDINARY_KEY || '641475478966957',
        //     api_secret: process.env.CLOUDINARY_SECRET || '_s4RpMISejAG6jIO8Zk2wyse3v0'
        // })
    };
    App.prototype.routes = function () {
        this.app.use('/api', Routes_1.default);
        this.app.get(/.*/, function (req, res) {
            res.sendfile(path_1.default.join(__dirname, '../dist/index.html'));
        });
    };
    App.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.server.listen(this.app.get('port'))];
                    case 1:
                        _a.sent();
                        console.log('conection succesfull ');
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
var server = new App();
server.start();
