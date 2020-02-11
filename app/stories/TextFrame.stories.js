import React from 'react';
import { action } from '@storybook/addon-actions';
import TextFrame from '../src/components/sheets/TextFrame';
import '@vkontakte/vkui/dist/vkui.css';

export default {
    title: 'TextFrame',
};


const clgFunction = data => {
    console.log("FROM UPDATE FUNCTION: ", data);
}

export const basic = () => (
    <TextFrame
        params={{
            title: "Красная шляпа",
            desc: "Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия."
        }}
        updateFunction={ data => clgFunction(data) }
    />
);

export const withImage = () => (
    <TextFrame
        params={{
            title: "Красная шляпа",
            desc: "Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия.",
            imageURL: "http://personage.kz/images/detailed/9/shlyapa-krasnaya-vzroslaya-19748.jpg" 
        }}
        updateFunction={ data => clgFunction(data) }
    />
);