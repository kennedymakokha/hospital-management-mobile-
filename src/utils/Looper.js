import { View } from "react-native";

export function Looper({ children, times, column }) {
    const keys = [...Array(times).keys()];
    return (
        <View className={`flex ${column ? "flex-col" : "flex-row"}
       ${column ? "gap-y-2" : "items-center  px-2 py-1  justify-center"}    px-2 py-1 rounded-md  `}>
            {keys.map((item) => (
                <View key={item}>{children}</View>
            ))}
        </View>
    );
}