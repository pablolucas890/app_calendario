
import { StyleSheet } from 'react-native';
import { color } from '../../util/color';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
    },
    top:{
        flexDirection: 'row',
    },
    textoModal:{
        fontSize: 20,
        textAlign: 'left',
    },
    modal:{
        backgroundColor: 'white',
        marginTop: '45%',
        marginLeft: 40,
        marginRight: 40,
        padding: 20,
        borderRadius: 20,
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    eventoFormal:{
        backgroundColor: '#0095FF',
        textAlign: 'center',
        marginBottom: 10,
        paddingBottom: 5,
        paddingTop: 5,
        color: 'white',
    },
    eventoInformal:{
        backgroundColor: '#FF7A00',
        textAlign: 'center',
        marginBottom: 10,
        paddingBottom: 5,
        paddingTop: 5,
        color: 'white',
    },
    titulo:{
        fontSize: 30,
        marginBottom: 10,
    }, 
    horario:{
        marginBottom: 10,
    }

});
