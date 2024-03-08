


import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Mog from './imeges/brad.jpg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Splash3 from './imeges/brad.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Looper } from './utils/Looper';
import Popup from './containers/Modal'
import { truncateString } from './utils/debounce';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useGetTriageByPatientQuery } from '../feaures/slices/triageSlice';
import { useGetuserQuery, useGetusersQuery } from '../feaures/slices/userApiSlice';
let width = Dimensions.get('window').width
const Dashboard = ({ navigation }) => {
  const [time, setTime] = useState("")
  const { userInfo } = useSelector((state) => state.auth)
  var today = new Date()
  var curHr = today.getHours()
  const { data: users, isFetching, refetch } = useGetusersQuery("Dr")
  const { data: Triage } = useGetTriageByPatientQuery(userInfo._id)

  useEffect(() => {
    if (curHr < 12) {
      setTime('good morning')
    } else if (curHr < 18) {
      setTime('good afternoon')
    } else {
      setTime('good evening')
    }
  })
  const UpcomingEvent = (props) => {
    return (
      <View className="w-1/2  p-2">
        <View className=" w-full bg-white shadow-3xl py-4 px-2 rounded-lg bg-primary-800 ">
          <View className="flex flex-row px-2 pb-4">
            <View className="flex items-center justify-center border border-2 border-slate-300 bg-slate-200 w-[50px] h-[50px] rounded-full">
              {/* <Image source={Splash3} className="w-full h-full rounded-full" /> */}
              <Image source={Splash3} style={{ objectFit: 'cover' }} className="w-full object-fit   h-full rounded-full" />
            </View>
            <View className="flex flex-col px-2 justify-center">
              <Text className="text-2xl font-bold text-slate-600">{props.obj?.name}</Text>
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

  const TriageComponent = (props) => {
    return (
      <View className={`w-[100px]  rounded-full flex px-1  items-center justify-center `}>
        <View style={{ borderWidth: 4 }} className={`h-16 w-full mb-3 bg-primary-900  border border-slate-300 rounded-md flex items-center justify-center `}>
          <Text className="text-slate-600 text-xl font-bold">{props.value}</Text>
          <Text className="text-slate-600 font-semibold">{props.unit}</Text>
        </View>
        <Text className="text-slate-600 font-bold capitalize truncate">{props.title}</Text>
      </View>
    )
  }

  return (
    <>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

        <View className="flex flex-row pb-10   justify-between">
          <View className="flex flex-row">
            <View className="flex items-center justify-center bg-slate-200 border border-2 border-slate-300 w-[100px] h-[100px] rounded-full">
              <Image source={Splash3} className="w-full h-full rounded-full" />
            </View>
            <View className="flex flex-col px-2 justify-center">
              <Text className="text-xl text-primary-100 capitalize">{time}</Text>
              <Text style={{ fontFamily: 'futura' }} className="text-2xl font-bold text-slate-600">{userInfo?.name}</Text>
            </View>
          </View>

        </View>
      </LinearGradient>
      <ScrollView className="bg-slate-100 px-5">
        <View className=" w-full  flex items-between px-2 flex-row justify-between">
          <Text className="text-slate-600 font-bold capitalize text-[15px]">Upcomming appointments</Text>
          <Text className="text-slate-600 font-bold uppercase text-[16px]">See all</Text>
        </View>
        <ScrollView className=" bg-slate-50 rounded-md shadow-xl  p-3  flex-row gap-x-2 overflow-x-auto mb-5 space-x-20 w-full" horizontal>
          {users?.map((ar, i) => (<UpcomingEvent key={i} obj={ar} />))}
        </ScrollView>

        <View className=" w-full my-5   flex items-between px-2 flex-row justify-between">
          <Text className="text-slate-600 font-bold capitalize text-[15px]">Last Triage results </Text>
        </View>

        <ScrollView horizontal className=" bg-slate-50 rounded-md shadow-xl  p-3  flex-row gap-x-2 overflow-x-auto mb-5 space-x-5 w-full ">


          <TriageComponent unit="Mm Hg" title="Blood Pressure" value={`${Triage?.bloodPressure?.lowerValue}/${Triage?.bloodPressure?.upperValue}`} />
          <TriageComponent unit="Kg" title="Weight" value={Triage?.weight} />

          <TriageComponent unit="Feet" title="Height" value={Triage?.height} />
          <TriageComponent unit="" title="Temperature" value={Triage?.temp} />
        </ScrollView>
        {/* 
         <View className=" w-full my-5   flex items-between px-2 flex-row justify-between">
        <Text className="text-slate-600 font-bold capitalize text-[15px]">Find Your Doctor</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Doctors')}><Text className="text-slate-600 font-bold uppercase text-[16px]">See all</Text></TouchableOpacity>
      </View>

      <ScrollView horizontal className=" bg-slate-50 rounded-md shadow-xl  p-3  flex-row gap-x-2 overflow-x-auto mb-5 space-x-5 w-full ">
        {users?.map((ar, i) => (
          <View key={i} className={`  rounded-full flex items-center justify-center `}>
            <View key={i} style={{ borderWidth: 4 }} className={`h-16 w-16 mb-3 bg-slate-200  border border-slate-300 rounded-full flex items-center justify-center `}>
              <Image source={Splash3} style={{ objectFit: 'cover' }} className="w-full object-fit   h-full rounded-full" />
            </View>
            <Text className="text-slate-600 font-bold capitalize truncate">{truncateString(ar.name, 10)}</Text>
          </View>
        ))}
      </ScrollView> */}


      </ScrollView>
    </>
  )
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // borderBottomRadius: 5
  },
 
});
export default Dashboard