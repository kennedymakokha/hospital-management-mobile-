import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Button from './containers/Button'
import Splash1 from './imeges/splash1.png'
import Splash2 from './imeges/splash2.png'
import Splash3 from './imeges/splash3.png'

const Splash = ({navigation}) => {
    const [items, setItems] = useState([
        { state: true, icon: Splash1, title: "Skilled Health care close to home" },
        { state: false, icon: Splash2, title: "Best Doctor patient" },
        { state: false, icon: Splash3, title: "Qualified  Doctors " }])
    const [active, setactive] = useState(0)

    const next = () => {
        try {
            for (let index = 0; index < items.length; index++) {
                if (index === active) {
                    items[active].state = false
                    items[index + 1].state = true
                    setactive(index + 1)
                }
                else if(items.findIndex(x => x.state === true) === items.length - 1){
                    navigation.navigate("Login")
                }

            }

        } catch (error) {
            console.log(error)
        }
    }
    const prev = () => {
        try {
            for (let index = 0; index < items.length; index++) {
                if (index === active) {
                    items[active].state = false
                    items[index - 1].state = true
                    setactive(index - 1)
                }

            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View className="flex h-screen w-screen bg-white flex-col items-center justify-center">
            <View style={{ height: 350 }} className="flex-col items-center justify-center">
                <Image style={{ objectFit: 'contain', height: 350, width: 400 }} source={items[active]?.icon} />
            </View>
            <View className="flex  w-full items-center justify-center flex-row mb-5">
                {items.map((item, i) => (
                    <Text key={i} className={`${item.state ? 'text-secondary-100' : 'text-primary-100'} text-7xl`}>.</Text>
                ))}

            </View>
            <View className="flex w-full  items-center justify-center mb-10">
                <View className="px-5">
                    <Text className="text-xl font-bold text-slate-600 text-center">{items[active]?.title}</Text>
                </View>
            </View>
            <View className="flex  w-full gap-y-2 items-center justify-center flex-col">
                <View className=" w-3/4">
                    <Button onClick={next} 
                    primary white title={items.findIndex(x => x.state === true) === items.length - 1 ? "Get Started" : "Next"} />
                </View>

                <View className=" w-3/4">
                    <Button onClick={prev} primary outline title="Previous" />
                </View>

            </View>
        </View>
    )
}

export default Splash