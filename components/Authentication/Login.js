import React from "react";
import { styles } from "../Authentication/style";
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
} from "react-native";

const Login = ({ navigation }) => {
    // const navigateToRegistration = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Login To My App</Text>
                <TextInput style={styles.textInput} placeholder='Your Email' />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Password'
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text style={styles.btnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text
                            style={styles.btnText}
                            onPress={() => navigation.navigate("Registration")}
                        >
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
