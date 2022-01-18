import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e90ff",
        alignItems: "center",
        justifyContent: "center",
    },
    loginContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 5,
        paddingLeft: 15,
        marginTop: 10,
        borderRadius: 5,
        width: "90%",
        height: 40,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        marginTop: 15,
        width: "89%",
    },
    userBtn: {
        backgroundColor: "#ffff00",
        padding: 10,
        width: "35%",
        borderRadius: 5,
    },
    btnText: {
        textAlign: "center",
        fontSize: 18,
    },
});
