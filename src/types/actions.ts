import { Expense } from "./Expense";

export const ADD_EXPENSE = "ADD_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const SET_EXPENSE = "SET_EXPENSE"

export interface SetExpenseAction {
    type: typeof SET_EXPENSE;
    expenses : Expense[];
}
export interface EditExpenseAction {
    type : typeof EDIT_EXPENSE;
    expense: Expense;
}


export interface RemoveExpenseAction {
    type : typeof REMOVE_EXPENSE;
    id: string;
}

export interface AddExpenseAction {
    type : typeof ADD_EXPENSE;
    expense: Expense;
}


export type ExpenseActionType = SetExpenseAction|EditExpenseAction|RemoveExpenseAction|AddExpenseAction
export type AppAction = ExpenseActionType; 