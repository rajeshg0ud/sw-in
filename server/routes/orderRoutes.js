import express from 'express'
import { getMyOrders, placeOrder } from '../controllers/orderController.js';
import { protect } from '../controllers/protect.js';

const orderRouter = express.Router();

orderRouter.post('/placeorder', protect, placeOrder);
orderRouter.get('/',protect, getMyOrders);

export default orderRouter;