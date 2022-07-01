import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

export function RegisterEventButton({...rest}:TouchableOpacityProps){
    return(
        <TouchableOpacity style={styles.botao}>
               <Feather name="plus" color="white" size={40} />
        </TouchableOpacity>
    );
}