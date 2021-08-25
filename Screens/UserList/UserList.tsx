import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, filterUsers } from '../../ReduxActions/users';
import UserPill from '../../Components/UserPill/UserPill';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import ActionBar from '../../Components/ActionBar/ActionBar';
import style from './style';
import Colors from '../../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import InputText from '../../Components/InputText/InputText';
import { NativeModules } from 'react-native';

const UserList = (props: any) => {
    const {
        navigation,
        users,
        getUsers,
        filterUsers,
    } = props;

    const [filterOption, setFilterOption] = useState("");

    const [showSearch, setshowSearch] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        filterUsers(filterOption);
    }, [filterOption])

    const handleUser = (user: object) => {
        navigation.navigate("UserForm", { user: user });
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
                        <Text style={style.title}>Our Users</Text>
                    </View>
                    <TouchableOpacity style={style.rightColumn}
                        onPress={() => { setshowSearch(!showSearch) }}
                    >
                        <Icon name={showSearch ? "close" : "search"} size={35} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                {
                    showSearch && (
                        <View>
                            <InputText
                                title={"Search"}
                                onChange={setFilterOption}
                                placeHolder={"Enter here to search user"}
                                pattern={/./}
                                current={filterOption}
                            />
                        </View>
                    )
                }
                <View style={{ flex: 1, }}>
                    <ScrollView style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                    }}>
                        {
                            users.users.map((user, key) => {
                                return (
                                    <UserPill
                                        key={key}
                                        user={user}
                                        handleEvent={() => { handleUser(user) }}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <ActionBar
                    leftIcon={<Icon name="restore" size={25} color={Colors.white} />}
                    leftAction={() => {
                        NativeModules.CustomToast.MyToast("Screen will refresh.");
                        setFilterOption("");
                        getUsers();
                    }}
                    middleIcon={<Icon3 name="plus" size={25} color={Colors.white} />}
                    middleAction={() => {
                        navigation.navigate("UserForm");
                    }}
                    rightIcon={<Icon2 name="home" size={23} color={Colors.white} />}
                    rightAction={() => {
                        NativeModules.CustomToast.MyToast("Going back to home.");
                        navigation.navigate("Home");
                    }}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

UserList.propTypes = {
    users: PropTypes.object,
    getUsers: PropTypes.func
}


const mapStateToProps = (state: any) => ({
    state: state,
    users: state.users
})

export default connect(mapStateToProps, { getUsers, filterUsers })(UserList)
