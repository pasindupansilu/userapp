import Colors from "../../Constants/Colors";

export default {

    container: {
        marginTop: 15,
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: Colors.lightGrey,
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
    },

    leftColumn: {
        flex: 0.87,
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
    },

    rightColumn: {
        flex: 0.13,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontWeight: "bold",
        fontSize: 16,
    },

    completedTitle: {
        textDecorationLine: 'line-through',
    },

    subTitle: {
        marginTop: 5,
        color: Colors.darkGrey,
        fontSize: 13,
        fontWeight: "bold",
    },

    userHandler: {
        width: 25,
        height: 25,
        borderRadius: 25,
    },

    completedButton: {
        backgroundColor: Colors.purple,
        borderWidth: 0,
        padding: 2,
    }

}