import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacityProps ,TouchableOpacity} from "react-native";
import { styles } from "./style";

export function RegisterEventButton({...rest}:TouchableOpacityProps){
    return(
        <TouchableOpacity style={styles.botao} {...rest}>
               <Feather name="plus" color="white" size={40} />
        </TouchableOpacity>
    );
}