import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image } from 'react-native'
import Inputcontainer from './containers/inputcontainer'
import Logo from "./imeges/logo.png";
import CheckBox from '@react-native-community/checkbox';
import Button from './containers/Button';

const Login = ({ navigation }) => {
    const [isSelected, setSelection] = React.useState(true);
    const [item, onChangeText] = React.useState({ email: '', password: 'Test' });


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
                <Inputcontainer onChange={onChangeText} label="Email" value={item.email} placeholder="example@medicare.com" type="text" />
                <Inputcontainer onChange={onChangeText} label="Password" value={item.password} placeholder="password" secure type="password" />
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
                <View className="mt-20 "><Button onClick={() => navigation.navigate("Dashboard")} title="Log In" /></View>
            </View>
        </SafeAreaView>
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