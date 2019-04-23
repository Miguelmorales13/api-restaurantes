
import ShopModel from "./shop.model";
import { Request, Response } from "express";
class ShopCtrl {
    public static instance:ShopCtrl
    private constructor(){}
    static getInstance():ShopCtrl{
        if (!ShopCtrl.instance ) ShopCtrl.instance=new ShopCtrl()
        return ShopCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const shops =await  ShopModel.find()
            res.json(shops)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const shop = ShopModel.findById(req.params.id)
            res.json(shop)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const shop:any = await ShopModel.create(req.body)
            res.status(201).json(shop)

        } catch (error) {
            res.status(500).json(error)

        }
    }
    async update(req: Request, res: Response) {
        try {
            const user:any= await ShopModel.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body
                },{new:true})
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async delete(req: Request, res: Response) {
        try {
            await ShopModel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:'Deleting successfull'})
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default ShopCtrl.getInstance()
