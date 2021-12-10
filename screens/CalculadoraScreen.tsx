import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { numero, numeroAnterior, limpiar, construirNumero, positivoNegativo, btnDelete, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
            <Text
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit={ true }
            >
                { numero }
            </Text>

            {/* Botones container */}
            <View style={ styles.botonesContainer }>
                {/* Fila de botones */}
                <View style={ styles.fila }>
                    <BotonCalc texto="C" color="#A5A5A5" accion={ limpiar }/>
                    <BotonCalc texto="+/-" color="#A5A5A5" accion={ positivoNegativo }/>
                    <BotonCalc texto="del" color="#A5A5A5" accion={ btnDelete }/>
                    <BotonCalc texto="÷" color="#F1A43C" accion={ btnDividir }/>
                </View>

                {/* Fila de botones */}
                <View style={ styles.fila }>
                    <BotonCalc texto="7" accion={ construirNumero }/>
                    <BotonCalc texto="8" accion={ construirNumero }/>
                    <BotonCalc texto="9" accion={ construirNumero }/>
                    <BotonCalc texto="×" color="#F1A43C" accion={ btnMultiplicar }/>
                </View>

                {/* Fila de botones */}
                <View style={ styles.fila }>
                    <BotonCalc texto="4" accion={ construirNumero }/>
                    <BotonCalc texto="5" accion={ construirNumero }/>
                    <BotonCalc texto="6" accion={ construirNumero }/>
                    <BotonCalc texto="-" color="#F1A43C" accion={ btnRestar }/>
                </View>

                {/* Fila de botones */}
                <View style={ styles.fila }>
                    <BotonCalc texto="1" accion={ construirNumero }/>
                    <BotonCalc texto="2" accion={ construirNumero }/>
                    <BotonCalc texto="3" accion={ construirNumero }/>
                    <BotonCalc texto="+" color="#F1A43C" accion={ btnSumar }/>
                </View>

                {/* Fila de botones */}
                <View style={ styles.fila }>
                    <BotonCalc texto="0" ancho  accion={ construirNumero }/>
                    <BotonCalc texto="." accion={ construirNumero }/>
                    <BotonCalc texto="=" color="#F1A43C" accion={ calcular }/>
                </View>
            </View>
        </View>
    )
}

/*
Gris: #A5A5A5
Gris osucro: #2D2D2D
Naranja: #FF9427
*/