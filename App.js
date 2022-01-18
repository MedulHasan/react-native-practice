import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Authentication/Login";
import Registration from "./components/Authentication/Registration";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Registration' component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
