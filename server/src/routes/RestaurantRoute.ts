import express from 'express';
import { Router } from 'express';
import { param } from 'express-validator';
import Restaurant from '../model/restaurant';
import RestaurantController from '../controllers/RestaurantController';

const router = express.Router();

//  /api/retaurants/SEARCH/londan

router.get('/search/:city', param('city').isString().trim().notEmpty().withMessage("City parameter must be a valid string"), RestaurantController.searchRestaurants);

export default router;