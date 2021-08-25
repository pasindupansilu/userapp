import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    getStartedbtn: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width * 0.5,
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    btnText: {
        color: Colors.purple,
        fontWeight: "bold",
    },

    title: {
        fontSize: 28,
        marginBottom: 15,
        color: Colors.lightGrey,
    },

    subTitle: {
        fontSize: 21,
        marginBottom: 50,
        color: Colors.darkGrey
    }

})