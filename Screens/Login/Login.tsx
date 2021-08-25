import { NavigationRouteContext } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground, Text, TouchableOpacity, NativeModules } from 'react-native';
import { UpdateAsyncStorage, useAuthentication } from '../../Auth/Auth';
import InputText from '../../Components/InputText/InputText';
import { UserName } from '../../Constants/AsyncStorageConst';
import style from './style';


const Login = (props: any) => {

    const {
        navigation
    } = props;

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { authState } = useAuthentication();

    const handleLogin = async () => {
        if (userName && password) {
            NativeModules.CustomToast.MyToast("Login in...");
            await UpdateAsyncStorage(UserName, userName);
            navigation.navigate("Home");
        } else {
            NativeModules.CustomToast.MyToast("Unable to login. Try Again.");
        }
    }

    useEffect(() => {
        if (authState) {
            navigation.navigate("Home")
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                blurRadius={75}
                source={require("../../Assets/Images/splashscreen.png")}
            >
                <View style={style.container}>
                    <View style={style.formContainer}>
                        <Text style={style.title}>Login</Text>
                        <InputText
                            title={"Username"}
                            onChange={setUserName}
                            placeHolder={"Enter Your Username"}
                            pattern={/\w+/}
                            current={userName}
                        />
                        <InputText
                            title={"Password"}
                            onChange={setPassword}
                            placeHolder={"Enter Your Password"}
                            pattern={/\w+/}
                            password={true}
                            current={password}
                        />
                        <TouchableOpacity style={style.btnMain} onPress={handleLogin}>
                            <Text style={style.btnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Login;
