


import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Mog from './imeges/brad.jpg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Splash3 from './imeges/brad.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Looper } from './utils/Looper';
import Popup from './containers/Modal'
import { truncateString } from './utils/debounce';
const Dashboard = ({ navigation }) => {
  const [time, setTime] = useState("")
  const [visible, setVisible] = useState(false);

  const openPopup = () => {
    setVisible(true);
  }

  const closePopup = () => {
    setVisible(false);
  }
  var today = new Date()
  var curHr = today.getHours()
  // console.log(curHr)
  useEffect(() => {
    if (curHr < 12) {
      setTime('good morning')
    } else if (curHr < 18) {
      setTime('good afternoon')
    } else {
      setTime('good evening')
    }
  })
  const UpcomingEvent = () => {
    return (
      <View className=" w-full  p-2">
        <View className=" w-full bg-white shadow-3xl py-4 px-2 rounded-lg bg-primary-800 ">
          <View className="flex flex-row px-2 pb-4">
            <View className="flex items-center justify-center border border-2 border-slate-300 bg-slate-200 w-[50px] h-[50px] rounded-full">
              {/* <Image source={Splash3} className="w-full h-full rounded-full" /> */}
              <Image source={Splash3} style={{objectFit:'cover'}}  className="w-full object-fit   h-full rounded-full" />
            </View>
            <View className="flex flex-col px-2 justify-center">
              <Text className="text-2xl font-bold text-slate-600"> Dr. Wafula Makokha</Text>
              <Text className="text-xl text-slate-400 capitalize">Neorology</Text>
            </View>
          </View>
          <View className="flex   flex-row items-center px-2 rounded-full">
            <View className="flex flex-row gap-x-1 w-1/2 mr-2  items-center bg-slate-600 px-3 py-2 rounded-full justify-center  ">
              <Icon name="calendar" size={10} color="white" />
              <Text>Mar, 10,2024</Text>
            </View>
            <View className="flex flex-row gap-x-1 w-1/2 items-center bg-slate-600 px-2 py-2 rounded-full justify-center  ">
              <Icon name="clock-o" size={15} color="white" />
              <Text>5:00PM to 5:24PM</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }

  const arr = [{ name: "Kennedy Makokha", title: "all", color: 'green', icon: '' }, { name: "Joyce Mayor", title: "all", color: 'green', icon: '' }, { name: "Wiliam Makokha", title: "dentist", color: 'green', icon: '' }, { name: "James Maina", title: "nuerologist", color: 'green', icon: '' }, { name: "Vincent Owalo", title: "pieditrician", color: 'green', icon: '' },
  ]
  const Doctors = [{ title: 'dentist', image: '', rate: 4, name: "Moris Wambiliafhhhdffhhnga", color: 'green', icon: '' },
  { rate: 5, name: 'Moses Gitaru', title: "dentist", color: 'green', icon: '' },
  { rate: 1, image: '', name: 'Mosoti James', title: "nuerologist", color: 'green', icon: '' },
  { rate: 1, image: '', name: 'Mosoti James', title: "nuerologist", color: 'green', icon: '' }, { rate: 1, image: '', name: 'Mosoti James', title: "nuerologist", color: 'green', icon: '' },
  { rate: 3, name: 'Aluku Jerald', title: "pieditrician", color: 'green', icon: '' },
  ]
  return (
    <ScrollView className="bg-slate-100 px-5">
      <View className="flex flex-row pb-10   justify-between">
        <View className="flex flex-row">
          <View className="flex items-center justify-center bg-slate-200 border border-2 border-slate-300 w-[100px] h-[100px] rounded-full">
            <Image source={Splash3} className="w-full h-full rounded-full" />
          </View>
          <View className="flex flex-col px-2 justify-center">
            <Text className="text-xl text-primary-100 capitalize">{time}</Text>
            <Text style={{fontFamily:'futura'}} className="text-2xl font-bold text-slate-600">Kennedy Makokha</Text>
          </View>
        </View>
    
      </View>
      <View className=" w-full  flex items-between px-2 flex-row justify-between">
        <Text className="text-slate-600 font-bold capitalize text-[15px]">Upcomming appointments</Text>
        <Text className="text-slate-600 font-bold uppercase text-[16px]">See all</Text>
      </View>

      <UpcomingEvent />
      <View className=" w-full my-5   flex items-between px-2 flex-row justify-between">
        <Text className="text-slate-600 font-bold capitalize text-[15px]">Find Your Doctor</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Doctors')}><Text className="text-slate-600 font-bold uppercase text-[16px]">See all</Text></TouchableOpacity>
      </View>
     
      <ScrollView horizontal className=" bg-slate-50 rounded-md shadow-xl  p-3  flex-row gap-x-2 overflow-x-auto mb-5 space-x-5 w-full ">
        {Doctors.map((ar, i) => (
          <View key={i} className={`  rounded-full flex items-center justify-center `}>
            <View key={i} style={{borderWidth:4}} className={`h-16 w-16 mb-3 bg-slate-200  border border-slate-300 rounded-full flex items-center justify-center `}>
              <Image source={Splash3} style={{objectFit:'cover'}}  className="w-full object-fit   h-full rounded-full" />
            </View>
            <Text className="text-slate-600 font-bold capitalize truncate">{truncateString(ar.name.split(' ')[1], 10)}</Text>
          </View>
        ))}
      </ScrollView>


    </ScrollView>
  )
}


export default Dashboard