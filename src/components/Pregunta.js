import React, { useState } from 'react';
import { Error } from './Error';
import PropTypes from 'prop-types';

export const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt( e.target.value ));
    };

    const agregarPresupuesto = e => {
        e.preventDefault();

        if ( isNaN( cantidad ) || cantidad < 1) {
            setError(true);
            return;
        }

        setError( false );

        setPresupuesto( cantidad );
        setRestante( cantidad );
        actualizarPregunta( false );

    };

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto" /> : null }

            <form
                onSubmit={ agregarPresupuesto }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto semanal"
                    onChange={ definirPresupuesto }
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    )
};


Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
};

