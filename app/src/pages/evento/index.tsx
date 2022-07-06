import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { Title } from "../../components/Title";
import { RootStackParamList } from "../../global/props";

type Props = NativeStackScreenProps<RootStackParamList>;

export function evento({ navigation } : Props){
    return (
        <View>
            <Title title="Cadastrar " sizeReturn={35} />
            <Title title="Evento" sizeReturn={35}/>
        </View>
    );
}