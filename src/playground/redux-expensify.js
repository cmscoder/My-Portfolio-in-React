import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

// Expenses Reducer

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)
// 33400, 10, -203

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 300, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffe", amount: 500, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// console.log(expenseOne);
const demoState = {
  expenses: [
    {
      id: "pis",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
