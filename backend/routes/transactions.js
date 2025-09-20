//require the functions u made from controllers folder
const {addExpense, getExpenses, deleteExpense} = require("../controllers/expense")
const {addIncome, getIncomes, deleteIncome} = require("../controllers/income")

const router = require("express").Router();

router.post("/add-expense", addExpense)
router.get("/get-expenses", getExpenses)
router.delete("/delete-expense/:id", deleteExpense)

router.post("/add-income", addIncome)
router.get("/get-incomes", getIncomes)
router.delete("/delete-income/:id", deleteIncome)

module.exports = router