import { Pressable, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick} activeOpacity={1} className={`flex items-center justify-center h-16 rounded-md shadow-2xl
         ${props.primary ? "bg-primary-100" : "bg-slate-600"}
         ${props.outline && "bg-transparent border"}
         ${props.primary && " border-primary-100 border-2"} `

        }>
            <Text className={`font-[900] text-[14px] tracking-widest
              ${props.outline && "text-primary-100"} uppercase`}>{props.title}</Text>
        </TouchableOpacity >
    )
}

export default Button