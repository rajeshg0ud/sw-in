import mongoose from "mongoose";

const orderSchema= mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    restaurantInfo:{
        id:{type: Number, required: true},
        resImageId:{type: String, required: true},
        resName:{type: String, required: true},
        area:{type: String, required: true},
        city:{type: String, required: true},
    }, 
    orderItems:[{
        itemId: {type: String, required: true},
        itemName:{type: String, required: true},
        imageUrl:{type: String, required: true},
        itemPrice:{type: Number, required: true},
        quantity: {type: Number, required: true},
    }],
    shippingAddress:{
        area:{type: String, required: true},
        city:{type: String, required: true},
        pincode:{type: Number, required: true},
        state:{type: String, required: true},
    },
    paymentMethod: {type: String, required: true},
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email: { type: String },
    },
    itemsPrice:{type: Number, required: true, default:0.0},
    charges:{type: Number, required: true, default:0.0},
    shippingPrice:{type: Number, required: true, default:0.0},
    totalPrice:{type: Number, required: true, default:0.0},
    isPaid:{type: Boolean, required: true, default:false},
    paidAt: {type: Date},
},{
    timeStamps: true
})


const Order= mongoose.model("Order", orderSchema);

export default Order;