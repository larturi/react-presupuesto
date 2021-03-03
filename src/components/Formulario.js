import React, { useState } from 'react';
import { Error } from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types';

export const Formulario = ({ setGasto, setCrearGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if ( isNaN( cantidad ) || cantidad < 1 || nombre.trim() === '') {
            setError(true);
            return;
        }

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        setGasto(gasto);
        setCrearGasto(true);

        setNombre('');
        setCantidad(0);
        
    };

    return (
        <form 
            onSubmit={ agregarGasto }
        >

            <h2>Agrega tus gastos aqui</h2>

            {
                error ? <Error mensaje="Ambos campos son obligatorios" /> : null
            }

            <div className="campo">
                <label>Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    value={ nombre }
                    onChange={ e => setNombre(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Importe</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={ cantidad }
                    onChange={ e => setCantidad( parseInt(e.target.value) ) }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Guardar"
            />

        </form>
    )
};

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
};
