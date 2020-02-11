import React from 'react';
import { action } from '@storybook/addon-actions';
import SheetTitle from '../src/components/sheets/SheetTitle';
import '@vkontakte/vkui/dist/vkui.css';

export default {
    title: 'SheetTitle',
};

const clgFunction = data => {
    console.log("FROM UPDATE FUNCTION: ", data);
}

export const basic = () => (
    <SheetTitle 
        data="Кто сильнее - акула или медведь?"
        params={{title: "Default title"}}
        updateFunction={ data => clgFunction(data) }
    />
);