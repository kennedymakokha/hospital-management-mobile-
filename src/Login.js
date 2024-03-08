import React, { useState } from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image } from 'react-native'
import Inputcontainer from './containers/inputcontainer'
import Logo from "./imeges/logo.png";
import CheckBox from '@react-native-community/checkbox';
import Button from './containers/Button';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../feaures/slices/userApiSlice';
import { setCredentials } from '../feaures/slices/authSlice';
import Popup from './containers/Modal'
import { getData } from './utils/AsyncStorageMethods';
const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isSelected, setSelection] = React.useState(true);
    const [login, { isLoading }] = useLoginMutation();

    const [item, onChangeText] = React.useState({ ID_no: '', password: 'Test', token: getData("FCMToken") });

    const submit = async () => {
        const { ID_no, password } = item
        try {
            const res = await login({ ID_no, password }).unwrap();

            dispatch(setCredentials({ ...res }))

            navigation.navigate("Dashboard")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <SafeAreaView className="flex h-screen w-screen  bg-primary-100">
            <View className="w-full h-1/4 flex items-center justify-center bg-primary-100">
                <Image source={Logo} className="h-[300px] w-[300px] " />
            </View>
            <View className="w-full h-3/4 bg-white p-10 rounded-t-[20px]">
                <View className="flex w-full  items-center justify-center flex-col">
                    <Text className="text-primary-100 text-5xl  font-bold">Medicare</Text>
                    <Text className="text-slate-500 text-xl ">Your Wellness, Our Priority </Text>
                </View>
                <Inputcontainer type="number-pad" onChange={(e) => onChangeText(prevState => ({
                    ...prevState, ID_no: e
                }))} label="Identification No" value={item.ID_no} placeholder="3254984644" />
                <Inputcontainer onChange={(e) => onChangeText(prevState => ({
                    ...prevState, password: e
                }))} label="Password" value={item.password} placeholder="password" secure type="default" />
                <View className="flex  flex-row  items-between justify-between">
                    <View className="flex flex-row items-center justify-center">
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            className="bg-red-100 text-red-100"
                            style={styles.checkbox}
                        />
                        <Text className="text-slate-600 text-[16px]">Remember Me ?</Text>
                    </View>
                    <View className="flex items-center justify-center">
                        <Text className="text-slate-600  text-[16px]">Forgot Password</Text>
                    </View>

                </View>
                <View className="mt-20 "><Button onClick={() => submit()} title="Log In" /></View>
            </View>

            <Popup
                visible={isLoading}
                transparent={true}
                // dismiss={closePopup}
                margin={"25%"}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 150, height: '10px', width: '19px'
                    }}
                >
                    <View className="px-3 py-2 h-10 w-28 rounded-md bg-slate-100 items-center justify-center spin"><Text className="text-slate-600 font-bold">Submting ...</Text></View>
                </View>
            </Popup>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Login