//placing orders using cod
import orderModel from "../models/orderModel.js";
const placeOrder = async(req,res) =>{
    try {
        const {userId,items,amount,address}= req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            PaymentMethod:'COD',
            payment:false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:'Order Placed'});
    } catch (error) {
        console.log(error);
        res.json({success:false,message: error.message});
        
    }
}

//using stripe

const placeOrderStripe = async(req,res) =>{
    
}

//using razorpay
const placeOrderRazorpay = async(req,res) =>{
    
}


// all order data for admin panel
const allOrders = async(req,res)=>{

}

// for user data in frontend
const userOrders = async(req,res)=>{
    
}

//update status of order from admin
const updateStatus = async(req,res)=>{
    
}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};