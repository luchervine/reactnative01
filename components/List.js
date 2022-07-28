import { FlatList, Text } from "react-native";

import Item from "./Item";

function renderExpenseItem(itemData) {
  return <Item {...itemData.item} />;
}

function List({ expenses }) {
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default List;
