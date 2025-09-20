const Expense = require("../models/ExpenseModel");

//controller for adding expense
exports.addExpense= async(req, res)=> {
    //we take the inputs from req.body
    const {title, amount, category, description, date}= req.body;
    const expense = new Expense({
        title,
        amount,
        category,
        description,
        date
    });
    //try and catch block
    try {
        //edge cases (invalid cases)
        if(!title || !amount || !category || !date){
            return res.status(400).json({error: "All fields are required"});
        }
        if(amount<=0 || !amount === 'number'){
            return res.status(400).json({error: "Amount cannot be negative"});
        }
        //save it if it passes all edge cases
        await expense.save();
        res.status(201).json({expense});
    } 
    catch (error) {
        res.status(500).json({error});
    }
    console.log(expense);
}

//get any expense (to check its details)
exports.getExpenses = async (req, res) =>{
    try {
        const expenses = await Expense.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

//delete any expense
exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    Expense.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}