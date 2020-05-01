import React from 'react';
import { action } from '@storybook/addon-actions';
import Combitaions from '../src/components/sheets/blocks/advanced/combinations/Combinations';

export default {
    title: 'Combinations',
};

const clgFunction = data => {
    console.log("FROM UPDATE FUNCTION: ", data);
}

const data = { "inputs": { 
    input0: "inp 0", 
    input1: "inp 1", 
    input2: "inp 2",
} }

export const basic = () => (
    <Combitaions
        params={{
            title: "Ваши области интереса",
            desc: "Области, в которых вы разбираетесь или хотите разобраться"
        }}
        updateFunction={ data => clgFunction(data) }
    />
);

export const prefiled = () => (
    <Combitaions
        params={{
            title: "Ваши области интереса",
            desc: "Области, в которых вы разбираетесь или хотите разобраться"
        }}
        data={ data }
        updateFunction={ data => clgFunction(data) }
    />
);