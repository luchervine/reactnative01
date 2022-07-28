import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Item({ id, description, marque, prix }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("OneObject", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <Image
          source={{ uri: "../util/maillot-exterieur-2023.jpeg" }}
          style={styles.image}
        />
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{marque}</Text>
          <Text style={styles.textBase}>{prix}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>View Details</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Item;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    //backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#3e04c3",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "black",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: "blue",
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: "100%",
  },
});
