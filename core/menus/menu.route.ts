import { Router } from "express";
import Ctrl from './menu.controller'
class MenusRouter {
    public router:Router
    constructor() {
        this.router=Router()
        this.config()
    }
    config(){
        this.router.get('/',Ctrl.getAll)
        this.router.get('/:id',Ctrl.get )
        this.router.post('/',Ctrl.add )
        this.router.put('/:id',Ctrl.update )
        this.router.delete('/:id',Ctrl.delete )
    }
}
const router = new MenusRouter()
export default router.router