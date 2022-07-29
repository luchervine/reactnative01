import axios from "axios";

const BACKEND_URL =
  "https://reactnative01-20c1e-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      description: response.data[key].description,
      marque: response.data[key].marque,
      prix: response.data[key].prix,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/${id}`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/${id}`);
}
