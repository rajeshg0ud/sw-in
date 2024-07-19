import express from 'express'
import { getAllRestaurants, getRestaurantById } from '../controllers/restaurantController.js';

const restaurantRouter= express.Router();

restaurantRouter.post('/:id', getRestaurantById);

restaurantRouter.post('/', getAllRestaurants);

export default restaurantRouter;