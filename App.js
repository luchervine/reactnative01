import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllObjects from "./screens/AllObjects";
import ExpensesContextProvider from "./store/expense-context";
import OneObject from "./screens/OneObject";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#3e04c3" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="AllObjects"
              component={AllObjects}
              options={{
                title: "FIFA World Cup Kits",
              }}
            />
            <Stack.Screen
              name="OneObject"
              component={OneObject}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
