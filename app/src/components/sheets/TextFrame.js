import React, { useState, useEffect } from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import appConfig from '../../config/appConfig';
import './TextFrame.css';

const TextFrame = props => {
    const dataField = appConfig.DEFAULT_DATA_FIELD;
    const { params, data, updateFunction } = props;
    const [ value, setValue ] = useState(data ? data[dataField] : "");

    const handleChange = e => {
        setValue(e.target.value);
    }

    useEffect(() => {
        updateFunction(value, dataField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dataField])

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
                <div className="TextFrame-textarea-wrap"> 
                    <Textarea
                        value={ value }
                        onChange={ handleChange }
                    />
                </div>
            </FormLayout>
        </div>
    )
}

export default TextFrame