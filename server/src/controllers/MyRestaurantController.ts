import { Request, Response} from "express";
import Restaurant from "../model/restaurant";
import cloudinary from "cloudinary"
import mongoose from "mongoose"
import Order from "../model/order";

const getRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurant = await Restaurant.findOne({ user: req.userid });
      if (!restaurant) {
        return res.status(404).json({ message: "restaurant not found" });
      }
      res.json(restaurant);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
  };

const createMyRestaurant = async (req: Request, res: Response) => {
    try {
      const existingRestaurant = await Restaurant.findOne({ user: req.userid });
  
      if (existingRestaurant) {
        return res
          .status(409)
          .json({ message: "User restaurant already exists" });
      }
  
      const imageUrl = await uploadImage(req.file as Express.Multer.File);
  
      const restaurant = new Restaurant(req.body);
      restaurant.imageUrl = imageUrl;
      restaurant.user = new mongoose.Types.ObjectId(req.userid);
      restaurant.lastUpdated = new Date();
      await restaurant.save();
  
      res.status(201).send(restaurant);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
const updateMyRestaurant = async (req: Request, res: Response) => {
    try {
       const restaurant = await Restaurant.findOne({ user: req.userid });
  
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      restaurant.menuItems = req.body.menuItems;
      restaurant.cuisines = req.body.cuisines;
      restaurant.estimatedDeliveryTime = req.body.estimatedDeliveryTime;
      restaurant.deliveryPrice = req.body.deliveryPrice;
      restaurant.city = req.body.city;
      restaurant.country = req.body.country;
      restaurant.restaurantName = req.body.restaurantName;
      restaurant.lastUpdated = new Date();

      if (req.file) {
        const imageUrl = await uploadImage(req.file as Express.Multer.File);
        restaurant.imageUrl = imageUrl;
    }
    await restaurant.save();
    res.status(200).json(restaurant);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
  const getMyRestaurantOrders = async (req: Request, res: Response) => {
    try {
      const restaurant = await Restaurant.findOne({ user: req.userid });
      if (!restaurant) {
        return res.status(404).json({ message: "restaurant not found" });
      }
  
      const orders = await Order.find({ restaurant: restaurant._id })
        .populate("restaurant")
        .populate("user");
  
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
  };
  
  const updateOrderStatus = async (req: Request, res: Response) => {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
  
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: "order not found" });
      }
  
      const restaurant = await Restaurant.findById(order.restaurant);
  
      if (restaurant?.user?._id.toString() !== req.userid) {
        return res.status(401).send();
      }
  
      order.status = status;
      await order.save();
  
      res.status(200).json(order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "unable to update order status" });
    }
  };
  


export default{
    createMyRestaurant, 
    getRestaurant,
    updateMyRestaurant,
    getMyRestaurantOrders,
    updateOrderStatus
}

const uploadImage = async (file: Express.Multer.File) => {
    const image = file;
    const base64Image = Buffer.from(image.buffer).toString("base64");
    const dataURI = `data:${image.mimetype};base64,${base64Image}`;
  
    const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
    return uploadResponse.url;
  };