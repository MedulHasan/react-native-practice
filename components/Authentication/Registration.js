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

const Registration = ({ navigation }) => {
    // const handleRegistration = () => {};
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Welcome to Our App</Text>
                <TextInput style={styles.textInput} placeholder='Your Name' />
                <TextInput style={styles.textInput} placeholder='Your Email' />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Password'
                    secureTextEntry
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirm Password'
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text
                            style={styles.btnText}
                            onPress={() => navigation.goBack()}
                        >
                            Log in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Registration;
