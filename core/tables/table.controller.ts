
import TableModel from "./table.model";
import { Request, Response } from "express";
class TableCtrl {
    public static instance: TableCtrl
    private constructor() { }
    static getInstance(): TableCtrl {
        if (!TableCtrl.instance) TableCtrl.instance = new TableCtrl()
        return TableCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const tables = await TableModel.find().populate('_shop')
            res.json(tables)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const table = TableModel.findById(req.params.id).populate('_shop')
            res.json(table)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const table: any = await TableModel.create(req.body)
            const newTable =await table.populate('_shop').execPopulate()
            const io=req.app.get('io')
            io.emit(`tables/${req.body._shop}/add`,newTable)
            res.status(201).json()
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async update(req: Request, res: Response) {
        try {
            const table: any = await TableModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true }).populate('_shop')
                const io=req.app.get('io')
                io.emit(`tables/${req.body._shop}/update`,table)
            res.status(201).json(table)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async delete(req: Request, res: Response) {
        try {
            await TableModel.findByIdAndDelete(req.params.id)
            const io=req.app.get('io')
            io.emit(`tables/delete`,{_id:req.params.id})
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default TableCtrl.getInstance()
