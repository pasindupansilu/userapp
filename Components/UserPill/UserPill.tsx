import React from "react";
import { Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import Colors from "../../Constants/Colors";
import { Alert } from "react-native";

const UserPill = (props) => {
    const { user, handleEvent } = props;

    const handleCall = (number: string) => {
        Alert.alert(
            'Call',
            'Are you sure you want to call this number? 0' + number,
            [
                {
                    text: 'Open dial',
                    onPress: () => {
                        let phoneNumber = number;
                        if (Platform.OS !== 'android') {
                            phoneNumber = `telprompt:${number}`;
                        }
                        else {
                            phoneNumber = `tel:${number}`;
                        }
                        Linking.canOpenURL(phoneNumber)
                            .then(supported => {
                                if (!supported) {
                                    Alert.alert('Phone number is not available');
                                } else {
                                    return Linking.openURL(phoneNumber);
                                }
                            })
                            .catch(err => console.log(err));
                    },
                    style: "default",
                },
            ],
            {
                cancelable: true
            }
        )
    }

    const handleDisplay = (user: object) => {
        Alert.alert(
            `${user.firstName}'s Profile`,
            `User Id : ${user.id} \nFirst Name : ${user.firstName} \nLast Name : ${user.lastName} \nPhone Number : ${user.phoneNumber}`,
        )
    }

    return (
        <View style={style.container}>
            <View style={style.row}>
                <View style={style.leftColumn}>
                    <TouchableOpacity
                        onPress={() => handleDisplay(user)}>
                        <Text style={[style.title]}>
                            <Icon name="account-circle" size={12} color={Colors.pink} />
                            {` ${user.firstName} ${user.lastName}`}
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => handleCall(user.phoneNumber)}
                        >
                            <Text
                                style={style.subTitle}
                            >
                                <Icon name="call" size={10} style={{ marginRight: 10 }} color={Colors.dark} />
                                {`  0${user.phoneNumber}  `}
                            </Text>
                        </TouchableOpacity>
                        <Text style={style.subTitle}>
                            <Icon name="lock" size={10} color={Colors.dark} />
                            {` ${user.id}`}
                        </Text>
                    </View>
                </View>
                <View style={style.rightColumn}>
                    <TouchableOpacity
                        onPress={handleEvent}
                        disabled={false}
                        style={[style.userHandler]}
                    >
                        <Icon name="edit" size={18} color={Colors.darkGrey} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

UserPill.propTypes = {
    user: PropTypes.object.isRequired,
    handleEvent: PropTypes.func,
}

export default UserPill
