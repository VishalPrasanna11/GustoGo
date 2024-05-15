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
]