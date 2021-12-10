import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black'
    },

    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },

    resultado: {
        color: 'white',
        fontSize: 80,
        textAlign: 'right',
        fontWeight: '100',
        // fontFamily: 'san-francisco'
    },

    resultadoPequeno: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '300',
        // fontFamily: 'san-francisco'
    },

    botonesContainer: {
        paddingBottom: 10
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 10
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8
    },

    botonTexto: {
        textAlign: 'center',
        fontSize: 35,
        color: 'white',
        fontWeight: '300',
        // fontFamily: 'san-francisco'
    }
});