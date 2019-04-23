
import OrderModel from "./order.model";
import TableModel from "../tables/table.model";
import { Request, Response } from "express";
class OrderCtrl {
    public static instance: OrderCtrl
    private constructor() { }
    static getInstance(): OrderCtrl {
        if (!OrderCtrl.instance) OrderCtrl.instance = new OrderCtrl()
        return OrderCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const orders = await OrderModel.find().populate('_shop').populate('_table')
            res.json(orders)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getAllProcess(req: Request, res: Response) {
        try {
            const orders = await OrderModel.find({status:'En proceso'}).populate('_shop').populate('_table')
            res.json(orders)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const order = OrderModel.findById(req.params.id).populate('_shop').populate('_table')
            res.json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const order: any = await OrderModel.create(req.body)
            const newTable=await TableModel.findByIdAndUpdate(req.body._table, { $set: { status: 'Ocupada' } },{new:true}).populate('_shop')
            const io=req.app.get('io')
            io.emit(`tables/${req.body._shop}/update`,newTable)
            const newOrder= await order.populate('_shop').populate('_table').execPopulate()
            io.emit(`orders/${req.body._shop}/add`,newOrder)
            res.status(201).json(newOrder)
        } catch (error) {
          console.log(error)
            res.status(500).json(error)

        }
    }
    async update(req: Request, res: Response) {
        try {
            const order: any = await OrderModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true }).populate('_shop').populate('_table')
            const io = req.app.get('io')
            if (req.body.status == 'Terminada') {
                const newTable=await TableModel.findByIdAndUpdate(order._table._id, { $set: { status: 'Desocupada' } },{new:true}).populate('_shop')
                io.emit(`tables/${req.body._shop}/update`,newTable)
            }
            io.emit(`orders/${req.body._shop}/update`,order)
            res.status(201).json(order)
        } catch (error) {
            res.status(500).json(error)

        }
    }
    async delete(req: Request, res: Response) {
        try {
            await OrderModel.findByIdAndDelete(req.params.id)
            const io = req.app.get('io')
            io.emit(`orders/delete`,{_id:req.params.id})
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default OrderCtrl.getInstance()
