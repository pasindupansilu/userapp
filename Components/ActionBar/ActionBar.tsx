import React from "react";
import { View, TouchableOpacity } from "react-native";
import style from "./style";
import PropTypes from "prop-types";

const ActionBar = (props: any) => {

    const {
        leftIcon,
        leftAction,
        middleIcon,
        middleAction,
        rightIcon,
        rightAction
    } = props

    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.column}>
                    <TouchableOpacity
                        onPress={leftAction}
                    >
                        {
                            leftIcon
                        }
                    </TouchableOpacity>
                </View>
                <View style={style.column}>
                    <TouchableOpacity
                        style={style.primaryButton}
                        onPress={middleAction}
                    >
                        {
                            middleIcon
                        }
                    </TouchableOpacity>
                </View>
                <View style={style.column}>
                    <TouchableOpacity
                        onPress={rightAction}
                    >
                        {
                            rightIcon
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

ActionBar.propTypes = {
    leftIcon: PropTypes.any,
    leftAction: PropTypes.func,
    middleIcon: PropTypes.any,
    middleAction: PropTypes.func,
    rightIcon: PropTypes.any,
    rightAction: PropTypes.func
}

export default ActionBar;