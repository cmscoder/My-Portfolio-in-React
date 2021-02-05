import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";
// use push
// attach then callback
// dispatch action
// redirect

// components calls action generator
// action generator returns funcion
// component dispatches funciont (?)
// function runs (has the ability to dispatch others actions and do whatever ir wants)
// ADD_EXPENSE

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
