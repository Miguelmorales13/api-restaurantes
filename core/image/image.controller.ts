
import ImageModel from "./image.model";
import { Request, Response } from "express";
import cloudinary from "cloudinary";
class ImageCtrl {
    public static instance: ImageCtrl
    private constructor() { }
    static getInstance(): ImageCtrl {
        if (!ImageCtrl.instance) ImageCtrl.instance = new ImageCtrl()
        return ImageCtrl.instance
    }
    async getAll(req: Request, res: Response) {
        try {
            const images = await ImageModel.find()
            res.json(images)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async get(req: Request, res: Response) {
        try {
            const image = ImageModel.findById(req.params.id)
            res.json(image)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async add(req: Request, res: Response) {
        try {
            const { name } = req.body;
            console.log(req.file);
            const fileRes = await cloudinary.v2.uploader.upload(req.file.path)
            const image: any = await ImageModel.create({ name, link: fileRes.secure_url })
            const io = req.app.get('io')
            io.emit(`images/${req.body._shop}/add`, image)
            res.status(201).json(image)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
    async update(req: Request, res: Response) {
        try {
            const image: any = await ImageModel.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                }, { new: true })
            const io = req.app.get('io')
            io.emit(`images/${req.body._shop}/update`, image)
            res.status(201).json(image)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await ImageModel.findByIdAndDelete(req.params.id)
            const io = req.app.get('io')
            io.emit(`images/delete`, { _id: req.params.id })
            res.status(200).json({ message: 'Deleting successfull' })
        } catch (error) {
            res.status(500).json(error)

        }
    }
}
export default ImageCtrl.getInstance()
