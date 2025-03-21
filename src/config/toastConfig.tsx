import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"

//third party libraries
import Toast from "react-native-toast-message";

export const toastConfig = {
    empty: () => <></>,
    error: ({ props, ...rest }: any) => (
        <View style={{
            marginHorizontal: 15,
            paddingHorizontal: 15,
            paddingVertical: 13,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#FF5757",
            borderRadius: 10,
            flexDirection: 'row',
        }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, color: 'white' }}>{props.message}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => Toast.hide()}
            >
                <Ionicons name="close" size={20} color="white" />
            </TouchableOpacity>
        </View>
    )
};

