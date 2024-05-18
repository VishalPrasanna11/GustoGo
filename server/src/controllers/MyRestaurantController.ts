import { Request, Response} from "express";
import Restaurant from "../model/restaurant";

const createMyRestaurant = async(req: Request, res: Response) =>{
    try{
        const existingResaurant = await Restaurant.find ({user: req.userId});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Something went wrong"});

    }
    
};