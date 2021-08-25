import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ImageBackground, AsyncStorage, NativeModules, TouchableOpacity } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Colors from '../../Constants/Colors';
import { useAsyncStorage, useUsername } from '../../Auth/Auth';
import { UserName } from '../../Constants/AsyncStorageConst';
import ActionBar from '../../Components/ActionBar/ActionBar';
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props: any) => {

    const {
        navigation
    } = props;

    const username = useAsyncStorage(UserName);

    useEffect(() => {
        console.log(AsyncStorage.getItem(UserName));
    }, [])

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                blurRadius={75}
                source={require("../../Assets/Images/splashscreen.png")}
            >
                <View style={style.row}>
                    <View style={style.leftColumn}>
                        <Text style={style.title}>Welcome,</Text>
                        <Text style={style.subTitle}>Test User</Text>
                    </View>
                    <View style={style.rightColumn}>
                        <Icon name="home" size={35} color={Colors.white} />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 20, }}>
                    <ScrollView style={{ flex: 1, }}>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                            <TouchableOpacity style={[style.block, style.blockLeft]} onPress={() => {
                                navigation.navigate("UserList")
                            }}>
                                <Icon name="account-circle" size={45} color={Colors.pink} />
                                <Text style={[style.blockTitle]}>View Users</Text>
                            </TouchableOpacity>
                            <View style={[style.block, style.blockRight]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                            <View style={[style.block, style.blockLeft]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                            <View style={[style.block, style.blockRight]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                            <View style={[style.block, style.blockLeft]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                            <View style={[style.block, style.blockRight]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                            <View style={[style.block, style.blockLeft]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                            <View style={[style.block, style.blockRight]}>
                                <Icon name="error" size={45} color={Colors.dark} />
                                <Text style={[style.blockTitle]}>Sample Block</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <ActionBar
                    leftIcon={<Icon name="west" size={23} color={Colors.white} />}
                    leftAction={() => {
                        NativeModules.CustomToast.MyToast("Going back.");
                        navigation.goBack();
                    }}
                    middleIcon={<Icon name="list" size={25} color={Colors.white} />}
                    middleAction={() => {
                        NativeModules.CustomToast.MyToast("Viewing all users.");
                        navigation.navigate("UserList");
                    }}
                    rightIcon={<Icon name="logout" size={25} color={Colors.white} />}
                    rightAction={() => {
                        NativeModules.CustomToast.MyToast("Good bye.");
                        navigation.navigate("Splash");
                    }}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}


export default Home;
