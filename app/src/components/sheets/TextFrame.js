import React, { useState, useEffect } from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import './TextFrame.css';

const TextFrame = props => {
    const [ value, setValue ] = useState(null);
    const { title, desc, imageURL, updateFunction } = props

    const handleChange = e => {
        setValue(e.target.value);
        updateFunction(value);
    } 

    return (
        <div className="TextFrame">
            <FormLayout>
                <div className="TextFrame-header">
                    { imageURL && (
                        <div className="TextFrame-header-image">
                            <img src={ imageURL } />
                        </div>
                    ) }
                    <div className="TextFrame-header-text">
                        <h2>{ title }</h2>
                        <h3>{ desc }</h3>
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