import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Splash3 from './imeges/brad.png'
import Icon from 'react-native-vector-icons/FontAwesome';
// import map from './imeges/map.jpg'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Feather from 'react-native-vector-icons/Feather'
import { Looper } from './utils/Looper';
import Button from './containers/Button';
const Doctorsdetails = (props) => {

    const [items, setItems] = useState([
        { title: 'profile', state: false },
        { title: 'contact', state: true },
        { title: 'review', state: false },
    ])
    const [active, setactive] = useState('contact')
    const handleTab = (title) => {
        setactive(title)
        let newTab = []
        items.forEach(tab => {

            if (tab.title === title) {
                let v = { ...tab, state: true }
                newTab.push(v)
                return v; //gets everything that was already in item, and updates "done"
            }
            else {
                let v = { ...tab, state: false }
                newTab.push(v)
                return v;
            }

        });

        setItems(newTab)

    }

    function HeaderComponent(props) {
        return (
            <View className="flex px-2  border-slate-100 border-b">
                <Text className="text-center text-primary-100 font-bold text-2xl">{props.title}</Text>
            </View>

        )
    }
    function Profile() {
        return (
            <View className="mt-2 px-6">
                <HeaderComponent title="Profile Information" />
                {/* <View className="flex flex-row gap-x-4 p-2" >
                    <FontAwesome6 name="location-dot" size={20} color="#2e2e2e" />
                    <Text className="text-slate-500 text-xl font-semibold">Kitale District Hospital</Text>

                </View> */}
                <View className="w-full flex flex-row">
                    <View className="flex p-2 h-20 w-1/3">
                        <View className="flex bg-primary-100 h-full  rounded-xl justify-center items-center w-full flex-col">
                            <Text className="font-bold text-xl">10k</Text>
                            <Text>Patients</Text>
                        </View>
                    </View>
                    <View className="flex p-2 h-20 w-1/3">
                        <View className="flex bg-secondary-200 h-full  rounded-xl justify-center items-center w-full flex-col">
                            <Text className="font-bold text-xl">20+ years</Text>
                            <Text>Experience</Text>
                        </View>
                    </View>
                    <View className="flex p-2 h-20 w-1/3">
                        <View className="flex bg-secondary-100 h-full  rounded-xl justify-center items-center w-full flex-col">
                            <Text className="font-bold text-xl">59</Text>
                            <Text>Age</Text>
                        </View>
                    </View>
                </View>
                <View className="flex items-start px-2">
                    <Text className="text-slate-600 text-xl font-semibold">About</Text>
                    <Text className="text-slate-500 text-justify text-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Text>
                </View>

            </View>
        )
    }
    function Contact() {
        return (
            <View className="mt-2 px-6 ">
                <HeaderComponent title="Contact Information" />
                <View className="flex flex-row items-center gap-x-2 px-2 py-5">
                    <FontAwesome6 name="phone" size={20} color="#2e2e2e" />
                    <View className="flex flex-row pl-10">
                        <Text className="text-slate-500 text-2xl font-semibold">0700356129</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center gap-x-2 px-2 pb-5">
                    <Feather name="mail" size={20} color="#2e2e2e" />
                    <View className="flex flex-row pl-10">
                        <Text className="text-slate-500 text-2xl font-semibold">0700356129</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center gap-x-2 px-2 pb-5">
                    <FontAwesome6 name="location-arrow" size={20} color="#2e2e2e" />
                    <View className="flex flex-row pl-10">
                        <Text className="text-slate-500 text-2xl font-semibold">0700356129</Text>
                    </View>
                </View>
            </View>
        )
    }
    function Reviews() {
        return (
            <ScrollView className="mt-2 px-6">
                <HeaderComponent title="Dr's Reviews" />
                <Looper column times={20}>
                    <View className="flex  flex-row items-between justify-between rounded-md py-2">
                        <View className="flex flex-row">
                            <View className="w-10 h-10 bg-primary-100 rounded-full"></View>
                            <View className=" h-10  px-2 flex flex-col justify-center">
                                <Text className="text-slate-600 font-bold">Kennedy Makokha</Text>
                                <Text className="text-slate-700 font-thin">Awesome work Dr wafula loved ... </Text>
                            </View>
                        </View>
                        <View className=" h-10  px-2 flex flex-col items-center justify-center">
                            <Looper times={5}>
                                <MaterialIcons name="star-rate" size={15} color="yellow" />
                            </Looper>
                        </View>
                    </View>
                </Looper>
            </ScrollView>
        )
    }
    return (
        <View className="flex h-screen w-screen bg-slate-600">
            <View className="flex h-[25%] w-full justify-center">
                <View className=" w-full  shadow-3xl py-2 px-2 rounded-lg ">
                    <View className="flex flex-row p-6">
                        <View className="flex items-center justify-center border border-2 border-white w-[70px] h-[70px] rounded-full">
                            <Icon name="user" size={60} color="white" />
                        </View>
                        <View className="flex flex-col px-8 justify-center">
                            <Text className="text-3xl font-bold text-slate-100">Dr. Wafula Makokha</Text>
                            <Text className="text-xl text-white capitalize">Neorology</Text>
                            <View className="flex flex-row items-center justify-start my-2">
                                <Looper times={3}>
                                    <MaterialIcons name="star-rate" size={10} color="yellow" />
                                </Looper>
                                <Text className="text-white font-semibold">4.8 (1.6k Reviews)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-full h-[75%] bg-white py-5 px-2 rounded-t-[20px]">
                <View className=" w-full flex-row  h-10% ">
                    {items.map((item, i) => (<View className="w-1/3 px-[0.6px] ">
                        <TouchableOpacity key={i} activeOpacity={1} onPress={() => handleTab(item.title)} className={` 
                        ${item.state === true ? "bg-white" : 'bg-slate-50'} 
                        ${item.state === true && "border-b border-b-2 border-slate-400"} w-full  rounded-md h-[50px] flex items-center justify-center `}>
                            <Text className={`${item.state === true ? "text-primary-100" : 'text-slate-600'} capitalize font-bold text-[16px]`}>{item.title}</Text>
                        </TouchableOpacity >
                    </View>))}
                </View>
                <View className="h-[80%]">
                    {active === "profile" && <Profile />}
                    {active === "contact" && <Contact />}
                    {active === "review" && <Reviews />}
                </View>

                <View className="w-full h-10 bg-red-100">
                    <Button primary title="Book an appointment" />
                </View>
            </View>

        </View>
    )
}

export default Doctorsdetails