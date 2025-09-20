const mongoose=require('mongoose');

const expenseSchema=new mongoose.Schema({
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
        default: 'expense',
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        maxLength: 20,
        trim: true
    },
});

module.exports=mongoose.model('Expense', expenseSchema);