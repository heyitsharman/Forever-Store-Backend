//placing orders using cod
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async(req,res) =>{
    try {
        const {userId,items,amount,address,paymentMethod}= req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod,
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
    try {
        const orders = await orderModel.find({});
        res.json({success:true,orders});
    } catch (error) {
          console.log(error);
        res.json({success:false,message: error.message});
    }
}

// for user data in frontend
const userOrders = async(req,res)=>{
    try {
         const {userId} = req.body;
         const orders = await orderModel.find({userId})
         res.json({success: true,orders});
    } catch (error) {
         console.log(error);
        res.json({success:false,message: error.message});
        
    }
}

//update status of order from admin
const updateStatus = async(req,res)=>{
    
}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};