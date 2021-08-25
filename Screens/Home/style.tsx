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

    subTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.darkGrey,
    },

    block: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        minHeight: 150,
        borderRadius: 15,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 80,
            height: 30,
        },
        shadowOpacity: 0.34,
        shadowRadius: 87.27,
        elevation: 10,
    },

    blockLeft: {
        marginHorizontal: 15,
    },

    blockRight: {
        marginRight: 15,
    },

    blockTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: Colors.dark
    },
})