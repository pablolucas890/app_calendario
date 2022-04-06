import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style';

export function Buttom() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.texto}>
                    Me Clique ...
                </Text>
            </TouchableOpacity>
        </View>
    );
}
