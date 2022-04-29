
import { StyleSheet } from 'react-native';
import { color } from '../../util/color';

export const styles = StyleSheet.create({
    botao: {
        backgroundColor: color.verde,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    texto: {
        color: 'white',
        fontSize: 26
    },
});
