import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('')
    const [numero, setNumero] = useState('0');

    // Usamos useRef para guardar el boton de operacion que hemos pulsado, usamos esto en vez del useState porque no tiene ningun impacto visual en la aplicacion y asi no renderizamos la pantalla cada vez que pulsamos un boton de operaciona
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('');
    }

    const construirNumero = ( numeroTexto: string ) => {
        // No aceptar doble punto
        if( numero.includes('.') && numeroTexto === '.') return;

        // Max. 10 cifras
        if( numero.length >= 10 ) return;

        // Si el numero empieza por 0 o -0
        if( numero.startsWith('0') || numero.startsWith('-0') ) {
                // Si la entrada es un punto, añadir (validamos doble punto antes del if)
            if ( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto )

                // Si el string ya tiene un punto, añadir entrada al string
            } else if( numero.includes('.') ) {
                setNumero( numero + numeroTexto );

                // Si el string no tiene un punto (es simplemente 0), sustituir
            } else if ( numero === '0') {
                setNumero( numeroTexto )
            }
        
        // Si no empieza por 0 o -0, añadir numero al string
        } else {
            setNumero( numero + numeroTexto )
        }
    }

    const positivoNegativo = () => {
        if( numero.includes('-') ) {
            setNumero( numero.replace('-', '') );
        } else {
            setNumero( '-' + numero)
        }
    }

    const btnDelete = () => {
        (numero.length == 1 || numero.length == 2 && numero.startsWith('-'))
        ? setNumero('0')
        : setNumero(numero.slice(0, -1))
    }

    const cambiarNumPorAnterior = () => {
        // Comprobar si el numero termina con un punto para eliminarlo
        if( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0, -1) );
        } else {
            setNumeroAnterior( numero );
        }

        setNumero('0');
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number( numeroAnterior );
        const num2 = Number( numero );

        switch ( ultimaOperacion.current ) {
            case Operadores.dividir:
                // 0/0
                if( num1 == 0 && num2 == 0 ) { break }

                setNumero( `${ num1 / num2 }` );
                break;
            
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` );
                break;

            case Operadores.restar:
                setNumero( `${ num1 - num2 }` );
                break;

            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` );
                break;
            
            default:
                break;
        }

        setNumeroAnterior('')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        construirNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}

