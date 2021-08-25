import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native';
import { View, Text } from 'react-native'
import { UserName, UserId, DisplayName } from '../Constants/AsyncStorageConst';

export const useAuthentication = () => {

    const [authState, setAuthState] = useState(false);
    const anchor = useAsyncStorage(UserName);

    useEffect(function () {
        if (anchor !== null && typeof anchor !== "object") {
            setAuthState(true);
        } else {
            setAuthState(false);
        }
    }, []);

    return { authState };
}


export const useAsyncStorage = async (constant: string) => {
    let current = await AsyncStorage.getItem(constant);
    if (current) {
        return { current };
    } else {
        return { current };
    }
}

export const UpdateAsyncStorage = async (constant: string, value: any) => {
    if (typeof value == "string") {
        await AsyncStorage.setItem(constant, value);
    } else {
        await AsyncStorage.setItem(constant, JSON.stringify(value));
    }
}


export const useUsername = async () => {

    const current = await useAsyncStorage(UserName);
    const { authState } = useAuthentication();

    if (authState && typeof current !== "object") {
        return { current };
    } else {
        return { current };
    }
}


export const useDisplayName = async () => {

    const current = await useAsyncStorage(DisplayName);
    const { authState } = useAuthentication();

    if (authState) {
        return { current };
    } else {
        return { current };
    }
}


export const useUserId = async () => {

    const current = await useAsyncStorage(UserId);
    const { authState } = useAuthentication();

    if (authState && typeof current !== "object") {
        return { current };
    } else {
        return { current };
    }
}
