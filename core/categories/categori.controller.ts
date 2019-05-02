
import CategoriModel from "./categori.model";
import { Request, Response } from "express";
class CategoriCtrl {
    public static instance: CategoriCtrl
    private constructor() { }
    static getInstance(): CategoriCtrl {
        if (!CategoriCtrl.instance) CategoriCtrl.instance = new CategoriCtrl()
        return CategoriCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const categories = await CategoriModel.find().populate('_shop')
            res.json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const categori = CategoriModel.findById(req.params.id).populate('_shop')
            res.json(categori)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const categori: any = await CategoriModel.create(req.body)
            const newCategori = await categori.populate('_shop').execPopulate()
            const io = req.app.get('io')
            io.emit(`categories/${req.body._shop}/add`, newCategori)
            res.status(201).json(newCategori)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const categori: any = await CategoriModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true }).populate('_shop')
            const io = req.app.get('io')
            io.emit(`categories/${req.body._shop}/update`, categori)
            res.status(201).json(categori)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async delete(req: Request, res: Response) {
        try {
            await CategoriModel.findByIdAndDelete(req.params.id)
            const io = req.app.get('io')
            io.emit(`categories/delete`, { _id: req.params.id })
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default CategoriCtrl.getInstance()
