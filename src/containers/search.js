import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Search = (props) => {
    return (
       
            <TextInput
                // style={styles.inputContainer}
                className="border-slate-200 border rounded-md w-full text-slate-500 px-5 text-[20px] "
                onChangeText={props.onChange}
                // value={props.value}
                placeholder="Type doctors name"
                placeholderTextColor="gray"

            /> 
             
       
    )
}

export default Search