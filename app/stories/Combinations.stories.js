import React from 'react';
import { action } from '@storybook/addon-actions';
import Combitaions from '../src/components/sheets/blocks/advanced/combinations/Combinations';

export default {
    title: 'Combinations',
};

const clgFunction = data => {
    console.log("FROM UPDATE FUNCTION: ", data);
}

export const basic = () => (
    <Combitaions
        params={{
            title: "Ваши области интереса",
            desc: "Области, в которых вы разбираетесь или хотите разобраться"
        }}
        updateFunction={ data => clgFunction(data) }
    />
);