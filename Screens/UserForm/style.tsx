import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

export default StyleSheet.create({
    row: {
        flexDirection: "row",
        marginTop: 35,
        marginBottom: 10,
        marginHorizontal: 15,
    },

    leftColumn: {
        width: (Dimensions.get('window').width - 75),
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
    },

    rightColumn: {
        width: 38,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: Colors.white,
    },

    btnPrimary: {
        alignSelf: "center",
        backgroundColor: Colors.pink,
        paddingVertical: 15,
        paddingHorizontal: 30,
        margin: 15,
        borderRadius: 10,
    },

    btnText: {
        fontWeight: "bold",
        color: Colors.white,
    }
})