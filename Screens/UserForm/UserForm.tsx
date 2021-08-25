import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, SafeAreaView, ScrollView, NativeModules, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ActionBar from '../../Components/ActionBar/ActionBar';
import InputText from '../../Components/InputText/InputText';
import style from './style';
import Colors from '../../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { registerWebUser, updateWebUser } from '../../ReduxActions/users';

const UserForm = (props: any) => {

    const {
        navigation,
        route,
    } = props;

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        if (route?.params?.user) {
            setFname(route?.params?.user?.firstName || "");
            setLname(route?.params?.user?.lastName || "");
            setUname(route?.params?.user?.userName || "");
            setPhone(route?.params?.user?.phoneNumber || "");
            setMail(route?.params?.user?.email || "");
            setUserId(route?.params?.user?.id || 0);
        }
    }, [route?.params?.user])

    const handleUser = async () => {
        if (route?.params?.user) {
            let requestBody = {
                "FirstName": fname,
                "LastName": lname,
                "MobileNumber": phone,
                "UserName": phone,
                "Email": mail,
                "UserId": userId,
                "UserTypeId": 7,
            }
            await updateWebUser(requestBody).then((response) => {
                if (response.data.status == 200) {
                    console.log(response);
                    NativeModules.CustomToast.MyToast("Update successful.");
                    navigation.navigate("UserList");
                } else {
                    NativeModules.CustomToast.MyToast("Something went wrong. Please try again.");
                }
            }).catch((error) => {
                NativeModules.CustomToast.MyToast("Something went wrong. Please try again.");
            })
        } else {
            let requestBody = {
                "FirstName": fname,
                "LastName": lname,
                "Mobile": phone,
                "UserName": phone,
                "Email": mail,
                "Password": pass,
                "UserTypeId": 7,
            }
            await registerWebUser(requestBody).then((response) => {
                if (response.data.status == 2) {
                    NativeModules.CustomToast.MyToast("Registration successful.");
                    navigation.navigate("UserList");
                } else {
                    NativeModules.CustomToast.MyToast("Something went wrong. Please try again.");
                }
            }).catch((error) => {
                NativeModules.CustomToast.MyToast("Something went wrong. Please try again.");
            })
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                blurRadius={75}
                source={require("../../Assets/Images/splashscreen.png")}
            >
                <View style={style.row}>
                    <View style={style.leftColumn}>
                        <Text style={style.title}>Manage User</Text>
                    </View>
                    <View style={style.rightColumn}>
                        <Icon name="create" size={35} color={Colors.white} />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <ScrollView style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                    }}>
                        <View>
                            <InputText
                                title={"First Name"}
                                onChange={setFname}
                                placeHolder={"Enter details here"}
                                pattern={/\w/}
                                current={fname}
                            />
                        </View>
                        <View>
                            <InputText
                                title={"Last Name"}
                                onChange={setLname}
                                placeHolder={"Enter details here"}
                                pattern={/\w/}
                                current={lname}
                            />
                        </View>
                        <View>
                            <InputText
                                title={"Phone Number"}
                                onChange={setPhone}
                                placeHolder={"Enter details here"}
                                pattern={/[0-9]{9}/}
                                current={phone}
                            />
                        </View>
                        <View>
                            <InputText
                                title={"Email Address"}
                                onChange={setMail}
                                placeHolder={"Enter details here"}
                                pattern={/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i}
                                current={mail}
                            />
                        </View>
                        {
                            !route?.params?.user && (
                                <View>
                                    <InputText
                                        title={"Password"}
                                        onChange={setPass}
                                        placeHolder={"Enter details here"}
                                        pattern={/./}
                                        current={pass}
                                    />
                                </View>
                            )
                        }
                        <View>
                            <TouchableOpacity
                                style={style.btnPrimary}
                                onPress={handleUser}
                            >
                                <Text style={style.btnText}>
                                    {
                                        route?.params?.user ?
                                            "Update User" :
                                            "Register User"
                                    }
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <ActionBar
                    leftIcon={<Icon name="west" size={25} color={Colors.white} />}
                    leftAction={() => {
                        NativeModules.CustomToast.MyToast("Screen will refresh.");
                        navigation.goBack();
                    }}
                    middleIcon={<Icon name="restore" size={25} color={Colors.white} />}
                    middleAction={() => {
                        setFname("");
                        setLname("");
                        setUname("");
                        setPhone("");
                        setMail("");
                        setPass("");
                        setUserId(route?.params?.user?.id || 0);
                    }}
                    rightIcon={<Icon2 name="list" size={23} color={Colors.white} />}
                    rightAction={() => {
                        NativeModules.CustomToast.MyToast("Going back to the list.");
                        navigation.navigate("UserList");
                    }}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default connect()(UserForm)
