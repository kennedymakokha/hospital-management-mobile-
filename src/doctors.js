


import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Mog from './imeges/brad.jpg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Splash3 from './imeges/brad.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Looper } from './utils/Looper';
import Popup from './containers/Modal'
import { TextInput } from 'react-native-gesture-handler';
import Search from './containers/search';
import { debounce } from './utils/debounce';
import { useGetusersQuery } from '../feaures/slices/userApiSlice';
const Doctors = ({ navigation }) => {
    const [doctors, setDoctors] = useState([{ title: 'dentist', image: '', rate: 4, name: "Moris Wambilianga", color: 'green', icon: '' },
    { rate: 5, name: 'Moses Gitaru', title: "dentist", color: 'green', icon: '' },
    { rate: 1, image: '', name: 'Mosoti James', title: "nuerologist", color: 'green', icon: '' }, { rate: 3, name: 'Aluku Jerald', title: "pieditrician", color: 'green', icon: '' },
    ])
    const [visible, setVisible] = useState(false);

    const openPopup = () => {
        setVisible(true);
    }
    const { data, isFetching, refetch } = useGetusersQuery("Dr")
  

    useEffect(() => {

    })
    return (
        <ScrollView className="bg-slate-100 px-5">

            <View className=" w-full my-5   flex items-between px-2 flex-row ">
                <Search placeholder="Type doctors name" onChange={e => handleSearch(e)} />
            </View>
            <View className="flex ">
                {data?.map((doc, i) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('doctor')} key={i} className=" w-full  p-2">
                        <View className=" w-full bg-white shadow-xl py-2  px-2 rounded-lg bg-slate-50 ">
                            <View className="flex flex-row p-2">
                                <View className="flex items-center justify-center border border-2 border-primary-100 w-[40px] h-[40px] rounded-full">
                                    {doc.image === "" ? <Image source={Splash3} className="w-full h-full rounded-full" /> :
                                        <Icon name="user" size={30} color="#82c7fe" />}
                                </View>
                                <View className="flex flex-col px-4 justify-center">
                                    <Text className="text-xl  text-slate-600">{doc.name}</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            {/* <Popup
                visible={visible}
                transparent={true}
                dismiss={closePopup}
                margin={"25%"}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        marginTop: 150, height: '10px', width: '19px'
                    }}
                >

                </View>
            </Popup> */}
        </ScrollView>
    )
}


export default Doctors