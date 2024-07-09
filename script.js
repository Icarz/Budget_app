"use strict";

/** defining the variables based on the query Selector (.class) */
const errorMessage = document.querySelector(".error_message");
const budgetInputEl = document.querySelector(".budget_input");
const expenseDelEl = document.querySelector(".expenses_input");
const expenseAmountEl = document.querySelector(".expenses_amount");
const tblRecordEl = document.querySelector(".tbl_data");
const cardsContainer = document.querySelector(".cards");

/* cards content variables */

const budgetCardEl = document.querySelector(".budget-card");
const expensesCardEl = document.querySelector(".expenses-card");
const balanceCardEl = document.querySelector(".balance-car");

let itemList = [];
let itemId = 0;

/**   ==== Button Events ==== */

function btnEvents() {
  const btnBudgetCal = document.querySelector("#btn_budget");
  const btnExpensesCal = document.querySelector("#btn_expenses");

  //* === budget Event ====*//
  btnBudgetCal.addEventListener("click", (e) => {
    e.preventDefault();
    budgetFun();
  });

  //* === budget Event ====*//
  btnExpensesCal.addEventListener("click", (e) => {
    e.preventDefault();
    budgetFun();
  });
}

/*** ==== calling the Events ====    */
document.addEventListener("DOMContentLoaded", btnEvents);

/** === Budget function ===  */
function budgetFun() {
  const budgetValue = budgetInputEl.value;
  if (budgetValue == "" || budgetValue < 0) {
    errorsAlert("Please enter budget value");
  } else {
    budgetCardEl.textContent = budgetValue;
    budgetInputEl.value = "";
    showBalance();
  }
}

/** ==== Show Balance function  ==== */
function showBalance() {
  const expenses = totalExpenses();
  const total = parseInt(budgetCardEl.textContent) - expenses;
}

/* ==== total Expenses ==== */
function totalExpenses() {}

/** ===error message==== */
function errorsAlert(message) {
  errorMessage.innerHTML = `<p>${message}</p>`;
  errorMessage.classList.add("error");
  setTimeout(() => {
    errorMessage.classList.remove("error");
  }, 2500);
}
