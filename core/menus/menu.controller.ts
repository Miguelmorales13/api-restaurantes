
import MenuModel from "./menu.model";
import { Request, Response } from "express";
class MenuCtrl {
    public static instance:MenuCtrl
    private constructor(){}
    static getInstance():MenuCtrl{
        if (!MenuCtrl.instance ) MenuCtrl.instance=new MenuCtrl()
        return MenuCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const menus =await  MenuModel.find().populate('_shop')
            res.json(menus)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const menu = MenuModel.findById(req.params.id).populate('_shop')
            res.json(menu)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const menu:any = await MenuModel.create(req.body)
            const newMenu=await menu.populate('_shop').execPopulate()
            const io=req.app.get('io')
            io.emit(`menus/${req.body._shop}/add`,newMenu)
            res.status(201).json(newMenu)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)

        }
    }
    async update(req: Request, res: Response) {
        try {
            const menu:any= await MenuModel.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body
                },{new:true}).populate('_shop')
                const io=req.app.get('io')
                console.log(`menus/${req.body._shop}/update`)
                io.emit(`menus/${req.body._shop}/update`,menu)
            res.status(201).json(menu)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async delete(req: Request, res: Response) {
        try {
            await MenuModel.findByIdAndDelete(req.params.id)
            const io=req.app.get('io')
            io.emit(`menus/delete`,{_id:req.params.id})
            res.status(200).json({message:'Deleting successfull'})
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default MenuCtrl.getInstance()
