import React, { useEffect } from "react";
import { AsyncStorage, Dimensions, SafeAreaView, Text } from "react-native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import style from "./style";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { useAuthentication } from "../../Auth/Auth";

const Splash = (props) => {
    const {
        navigation
    } = props;

    const { authState } = useAuthentication();

    const handleNavigate = () => {
        if (authState) {
            navigation.navigate("Home");
        } else {
            navigation.navigate("Login");
        }
    }

    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <ImageBackground
                style={{ flex: 1 }}
                source={require("../../Assets/Images/splashscreen.png")}
            >
                <View
                    style={style.container}
                >
                    <Text style={style.title}>Welcome!</Text>
                    <Text style={style.subTitle}>Are you ready?</Text>
                    <TouchableOpacity
                        style={style.getStartedbtn}
                        onPress={() => handleNavigate()}>
                        <Text style={style.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

Splash.propTypes = {
    navigation: PropTypes.any
}

export default Splash;