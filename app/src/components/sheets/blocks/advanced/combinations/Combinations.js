import React, { useState, useEffect } from 'react';
import { Textarea, Div, Button, FormLayout, FormLayoutGroup, Input, Select } from '@vkontakte/vkui';
import appConfig from '../../../../../config/appConfig';
import './Combinations.css';

const Combitaions = props => {
    const dataField = appConfig.DEFAULT_DATA_FIELD;
    const inputsDataField = "inputs";
    const { params, data, updateFunction } = props;
    const [ inputValues, setInputValues ] = useState(data && data[inputsDataField] ? data[inputsDataField] : {});
    const [ value, setValue ] = useState(data ? data[dataField] : "");
    const filledInputs = data && data[inputsDataField] ? Object.keys(data[inputsDataField]) : null;
    const [ inputs, setInputs ] = useState( filledInputs || ['input0', 'input1']);
    const combinationsNumber = params.combinationsNumber || [2, 3];
    console.log("DATA", data);
    console.log("IV", inputValues);

    // useEffect(() => {
    //     updateFunction(value, dataField);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [value, dataField])

    useEffect(() => {
        updateFunction(inputValues, inputsDataField);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValues, inputsDataField])

    const appendInput = () => {
        let newInput = `input${inputs.length}`;
        setInputs(inputs.concat([newInput]));
    }

    const handleInputChange = (e) => setInputValues({
        ...inputValues,
        [e.currentTarget.name]: e.currentTarget.value
    })

    return (
        <div className="Combitaions">
            <div className="Combitaions-header-text">
                { params.title ? (<h2>{ params.title }</h2>) : null }
                { params.desc ? (<h3>{ params.desc }</h3>) : null }
            </div>
            <FormLayout>
                <FormLayoutGroup id="combinations-inputs" top="Добавьте, сколько хотите">
                    { inputs.map(
                        input => <Input 
                            type="text" 
                            key={ input }
                            name={ input }
                            value={ inputValues[input] || "" }
                            onChange={ handleInputChange }
                        />
                    ) }
                    <Button size="m" mode="secondary" onClick={ appendInput }>+</Button>
                </FormLayoutGroup>
                <FormLayoutGroup id="combinations-number" top="Максимальное количество в одной комбинации">
                    <Select >
                        { combinationsNumber.map( n => <option key={n} value={n}>{n}</option> ) }
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