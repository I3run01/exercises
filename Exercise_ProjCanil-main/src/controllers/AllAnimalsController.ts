import { Request, Response } from "express";
import {Animals} from "../models/Animals";

export const home = (req: Request, res: Response ) => {
    let animals = Animals.getAll()
    
    res.render('pages/home', {
        animals,
    })
}

export const dogs = (req: Request, res: Response ) => {
    let DogList = Animals.getDog()
    res.render('pages/dogs', {
        DogList,
    })
}

export const cats = (req: Request, res: Response ) => {
    let CatList = Animals.getCat()
    res.render('pages/cats', {
        CatList,
    })
}

export const fishes = (req: Request, res: Response ) => {
    let FishList = Animals.getFish()
    res.render('pages/fish', {
        FishList,
    })
}

export const name = (req: Request, res: Response) => {

    let AniamalReq:string = req.query.animal as string

    let AnimalName = Animals.getName(AniamalReq)
    res.render('pages/name', {
        AnimalName,
    })
}