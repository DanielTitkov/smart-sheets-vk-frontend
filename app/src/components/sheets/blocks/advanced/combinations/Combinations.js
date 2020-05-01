import React, { useState, useEffect } from 'react';
import { Textarea, Div, Button, FormLayout, FormLayoutGroup, Input, Select } from '@vkontakte/vkui';
import appConfig from '../../../../../config/appConfig';
import './Combinations.css';

const Combitaions = props => {
    const dataField = appConfig.DEFAULT_DATA_FIELD;
    const { params, data, updateFunction } = props;
    const [ value, setValue ] = useState(data ? data[dataField] : "");
    const [ inputs, setInputs ] = useState(['input0', 'input1']);


    useEffect(() => {
        updateFunction(value, dataField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, dataField])

    return (
        <div className="Combitaions">
            <div className="Combitaions-header-text">
                { params.title ? (<h2>{ params.title }</h2>) : null }
                { params.desc ? (<h3>{ params.desc }</h3>) : null }
            </div>
            <FormLayout>
                <FormLayoutGroup id="combinations-inputs" top="Добавьте, сколько хотите">
                    { inputs.map(input => <Input type="text" key={input} />) }
                </FormLayoutGroup>
                <FormLayoutGroup id="combinations-number" top="Максимальное количество в одной комбинации">
                    <Select >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </Select>
                </FormLayoutGroup>
                <Div>
                    <Button size="xl" mode="secondary">Update combinations</Button>
                </Div>
            </FormLayout>
        
        </div>
    )
}

export default Combitaions;