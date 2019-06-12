import express, { Application } from "express";
import socket, { Socket } from "socket.io";
import http from "http";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { urlServer } from './core/Globales'
import multer from 'multer'
import cloudinary from 'cloudinary'
process.env.SECRET = process.env.SECRET || 'pepito'
import SocketIndex from "./sockets/socket";
import './db'
import Routes from "./core/Routes";
class Server {
    public app: Application;
    public io: any
    public server: http.Server;
    private _socket: any
    constructor() {
        this.app = express()
        this.server = http.createServer(this.app)
        this.io = socket(this.server)
        this._socket = SocketIndex(this.io)
        this.app.use(express.static(path.join(__dirname, '../dist/')));
        this.config()
        this.routes()
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3001)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(express.json())
        this.app.set('io', this.io)
        const storage = multer.diskStorage({
            destination: path.join(__dirname, 'public/uploads'),
            filename: (req: Request, file: any, cb: Function) => {
                cb(null, new Date().getTime() + path.extname(file.originalname))
            }
        })
        this.app.use(multer({ storage }).single('image'))
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME || 'restaurantix',
            api_key: process.env.CLOUDINARY_KEY || '641475478966957',
            api_secret: process.env.CLOUDINARY_SECRET || '_s4RpMISejAG6jIO8Zk2wyse3v0'
        })
    }
    routes(): void {
        this.app.use('/api', Routes)
        this.app.get(/.*/, (req, res) => {
            res.sendfile(path.join(__dirname, '../dist/index.html'))
        })
    }
    async start(): Promise<void> {
        await this.server.listen(this.app.get('port'))
        console.log('conection succesfull ')
    }
}
const server = new Server()
server.start()
