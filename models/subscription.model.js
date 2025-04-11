import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, 'Subscription Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    price:{
        type: Number, 
        required: [true, 'Subscription Price is required'],
        min: [0,'Price must be a positive number'],
    },
    currency:{
        type: String, 
        enum :['INR','USD', 'EUR', 'GBP'],
        default: 'INR',

    },
    frequency:{
        type: String, 
        enum :['daily', 'weekly','monthly','yearly'],
    },
    category:{
        type: String, 
        enum: ['sports', 'entertainment', 'education', 'news', 'gaming', 'technology', 'lifestyle', 'health', 'food', 'travel', 'other'],
        required: [true, 'Subscription Category is required'],
    },
    paymentMethod:{
        type: String,
        required: [true, 'Payment Method is required'],
        trim: true,
    }, 
    status:{
        type: String, 
        enum: ['active', 'canceled', 'expired'],
        default: 'active',
    },
    startDate:{
        type: Date,
        required: [true, 'Subscription Start Date is required'],
        validate:{
            validator: (value)=> value < new Date(),
            message: 'Start date must be in the past',

        }
    },
    endDate:{
        type: Date,
        required: [true, 'Subscription End Date is required'],
        validate:{
            validator:  function(value){
                return value > this.startDate,
            },
            message: 'End date must be in the future',
        }
    },
    
}, {timestamps: true} );