import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'



const inputcontainer = (props) => {
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height
    return (
        <View className="pb-10 w-full ">
            <View style={{ w: 3 / 4 * width }}>
                <View className="flex justify-between item-between  ">
                    <TextInput
                        style={styles.inputContainer}
                        className="border-slate-400 border text-slate-500 px-5 text-[20px] "
                        onChangeText={text => props.onChange(text)}
                        value={props.value}
                        placeholder={props.placeholder}
                        placeholderTextColor="gray"
                        secureTextEntry={props.secure}
                    // keyboardType={props.type}
                    />
                    {/* {props.secure && < Text className="text-black" > Secure</Text>} */}
                </View>
                {/*  <View style={{ width: 200, height: 200, backgroundColor: 'blue', position: 'absolute', left: 40, top: 40 }} /> */}
                <View style={styles.innerConainer} className=" flex items-center px-2 justify-center">
                    <Text className="text-primary-100 font-bold text-[18px]">{props.label}</Text>
                </View>
            </View>
        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
    inputContainer: {

        borderRadius: 6, height: 70,
        left: 0, top: 20
    },
    innerConainer: {
        // width: 100,
        height: 20,
        zIndex: 1000,
        backgroundColor: 'white',
        position: 'absolute',
        left: 10,
        top: 10
    }

});
export default inputcontainer