import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    formContainer: {
        width: '100%',
        padding: 15,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        paddingVertical: 15,
        color: Colors.white,
        borderBottomWidth: 0.2,
        borderBottomColor: Colors.white,
        marginHorizontal: 15,
        marginVertical: 10,
    },

    btnMain: {
        width: 200,
        marginVertical: 10,
        padding: 15,
        backgroundColor: Colors.purple,
        alignSelf: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
    },

    btnText: {
        color: Colors.white,
    }
})