import React, { useState, useEffect, useCallback } from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import './TextFrame.css';

const TextFrame = props => {
    const { params, data, updateFunction } = props
    const [ value, setValue ] = useState(data ? data : "");

    const handleChange = e => {
        setValue(e.target.value);
    }

    // const updateFunctionCallback = useCallback((value) => updateFunction(value), []);

    useEffect(() => {
        updateFunction(value);
    }, [value])
    
    return (
        <div className="TextFrame">
            <FormLayout>
                <div className="TextFrame-header">
                    { params.imageURL && (
                        <div className="TextFrame-header-image">
                            <img src={ params.imageURL } alt="" />
                        </div>
                    ) }
                    <div className="TextFrame-header-text">
                        <h2>{ params.title }</h2>
                        <h3>{ params.desc }</h3>
                    </div>
                </div>
                <Textarea
                    value={ value }
                    onChange={ handleChange }
                />
            </FormLayout>
        </div>
    )
}

export default TextFrame