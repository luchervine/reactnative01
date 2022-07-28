import { useContext, useLayoutEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ExpensesContext } from "../store/expense-context";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import { STORE } from "../util/Store";

function OneObject({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  expensesCtx.expenses = STORE;

  const editedExpenseId = route.params?.expenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  return (
    <View style={styles.deleteContainer}>
      <View>
        <Image
          source={{ uri: "../util/maillot-exterieur-2023.jpg" }}
          style={styles.image}
        />
        <Text style={styles.text}>{selectedExpense.id}</Text>
        <Text style={styles.text}>{selectedExpense.description}</Text>
        <Text style={styles.text}>{selectedExpense.marque}</Text>
        <Text style={styles.text}>{selectedExpense.prix}</Text>
      </View>
    </View>
  );
}

export default OneObject;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    //backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#a281f0",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
