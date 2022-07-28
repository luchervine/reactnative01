import { useContext } from "react";

import List from "../components/List";
import { ExpensesContext } from "../store/expense-context";
import { STORE } from "../util/Store";

function AllObjects() {
  const expensesCtx = useContext(ExpensesContext);
  console.log(expensesCtx);

  return (
    <>
      <List expenses={STORE} />
    </>
  );
}

export default AllObjects;
