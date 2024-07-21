import asyncHandler from "../asyncHandler.js";
import Order from "../models/orderModel.js";


const placeOrder=asyncHandler(async(req, res)=>{
    const {restaurantInfo, orderItems, paymentMethod, shippingAddress,itemsPrice, charges, totalPrice}=req.body;

    if(orderItems && orderItems.length===0 ){
        res.status(400)
        .json("No items found, please add the items")
    }
    else{ 
    const newOrder= await Order.create({
        restaurantInfo , 
        orderItems:orderItems.map(item => ({
            itemId: item.itemId,
            itemName: item.itemName,
            imageUrl: item.imageUrl,
            itemPrice: item.itemPrice,
            quantity: item.quantity
        })),
        shippingAddress,
        user: req.user._id,
        paymentMethod,
        itemsPrice,
        charges,
        totalPrice
    })

    const orderPlaced= await newOrder.save();
    
    res.status(201).json({ message: "Order has been placed successfully", order: orderPlaced });
}
})


const getMyOrders= asyncHandler(async(req, res)=>{
    const myOrders= await Order.find({user: req.user._id});

    console.log(myOrders)
      console.log("  console.log(myOrders)")
    res.status(200).json(myOrders)
})


export {placeOrder, getMyOrders}