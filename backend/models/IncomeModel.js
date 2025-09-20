const mongoose=require('mongoose');

const incomeSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        maxLength:10
    },
    type: {
        type: String,
        default: 'income',
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        maxLength: 20,
        trim: true
    },
});

module.exports=mongoose.model('Income', incomeSchema);