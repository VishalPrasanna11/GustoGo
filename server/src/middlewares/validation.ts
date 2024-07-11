import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';


const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
    ) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }


export const validateUserRequest = [
    body('name').isString().notEmpty().withMessage('Name is must be a string'),
    body('addressLine1').isString().notEmpty().withMessage('Address Line 1 is must be a string'),
    body('addressLine2').isString().optional(),
    body('city').isString().notEmpty().withMessage('City is must be a string'),
    body('state').isString().notEmpty().withMessage('State is must be a string'),
    body('zipCode').isString().notEmpty().withMessage('Zip Code is must be a string'),
    body('country').isString().notEmpty().withMessage('Country is must be a string'),
    body('phone').isString().notEmpty().withMessage('Phone is must be a string'),
    handleValidationErrors
];

export const validateMyRestaurantRequest = [
  body('restaurantName').notEmpty().withMessage('Restaurant name is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('country').notEmpty().withMessage('Country is required'),
  body('deliveryPrice')
    .isFloat({ min: 0 })
    .withMessage('Delivery price must be a positive number'),
  body('estimatedDeliveryTime')
    .isInt({ min: 0 })
    .withMessage('Estimated delivery time must be a positive integer'),
  body("cusines").isArray().withMessage("Cuisines must be an array").not().isEmpty().withMessage("Cuisines array cannot be empty"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuitems.*.name").notEmpty().withMessage("Menu  item name ia reuired"),
  body("menuItems.*.price")
    .isFloat({min: 0})
    .withMessage("Menu  item price is required and must be a positve number"),
  handleValidationErrors,    
  



];