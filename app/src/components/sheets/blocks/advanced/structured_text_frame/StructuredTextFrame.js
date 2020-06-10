import React, { useState, useEffect } from 'react';
import { FormLayout, Textarea } from '@vkontakte/vkui';
import appConfig from '../../../../../config/appConfig';
import './StructuredTextFrame.css';

const StructuredTextFrame = props => {
    const dataField = appConfig.DEFAULT_DATA_FIELD;
    const { params, data, updateFunction } = props;
    const [ value, setValue ] = useState(data ? data[dataField] : "");

    useEffect(() => {
        updateFunction(value, dataField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dataField])

    return (
        <div className="StructuredTextFrame">
            <FormLayout>
                <div className="StructuredTextFrame-header">
                    { params.imageURL && (
                        <div className="StructuredTextFrame-header-image">
                            <img src={ params.imageURL } alt="" />
                        </div>
                    ) }
                    <div className="StructuredTextFrame-header-text">
                        { params.title ? (<h2>{ params.title }</h2>) : null }
                        { params.desc ? (<h3>{ params.desc }</h3>) : null }
                    </div>
                </div>
                { params.items && params.items.map(i => {
                    return (
                        <div className="StructuredTextFrame-textarea-wrap"> 
                            <div className="StructuredTextFrame-item-header">{ i.desc }</div>
                            <Textarea 
                                className="StructuredTextFrame-textarea"
                                value={ value }
                                onChange={ e => setValue(e.target.value) }
                            />
                        </div>
                    )
                }) }
            </FormLayout>
        </div>
    )
}

export default StructuredTextFrame