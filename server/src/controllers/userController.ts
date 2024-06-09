import { Request, Response} from "express";
import User from "../model/userModel";


declare global {
    namespace Express {
        interface Request {
            auth0id: string;
            userid: string;
        }
    }
}


const createCurrentUser = async(req: Request, res: Response) =>{
//1. check if the user exists
//2. create the user if it doesn't exit
//3. return the user object to the calling client
try{
    const {auth0id} = req.body;
    const existingUser = await User.findOne({auth0id});
if(existingUser){
    return res.status(200).send();
}
const newUser = new User(req.body);
await newUser.save();


res.status(201).json(newUser.toObject());
 } catch(error){
        console.log(error);
        res.status(500).json({message: "Error creating user"});
    }



};
const getCurrentUser = async(req: Request, res: Response) =>{
    try {
        const user = await User.findOne({ _id: req.userid });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching user" });
    }
}




const updateUser = async(req: Request, res: Response) =>{
    try {
        const { name, addressLine1, addressLine2, city, state, country, zipCode, phone } = req.body;
        const user = await User.findOne({ _id: req.userid });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.addressLine2 = addressLine2;
        user.city = city;
        user.state = state;
        user.zipCode = zipCode;
        user.country = country;
        user.phone = phone;

        await user.save();

        // Add a response to indicate successful update
        res.status(200).json({ message: "User updated successfully" });
        console.log("User updated successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating user" });
    }
}   
export default{
    createCurrentUser,
    updateUser,
    getCurrentUser,
}

