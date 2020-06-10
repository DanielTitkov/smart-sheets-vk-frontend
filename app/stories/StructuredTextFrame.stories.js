import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import StructuredTextFrame from '../src/components/sheets/blocks/advanced/structured_text_frame/StructuredTextFrame';

export default {
    title: 'StructuredTextFrame',
};


const clgFunction = data => {
    console.log("FROM UPDATE FUNCTION: ", data);
}

export const basic = () => (
    <StructuredTextFrame
        params={{
            title: "Красная шляпа",
            desc: "Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия.",
            items: [
                {
                    desc: "Хорошие чувства"
                },
                {
                    desc: "Плохие чувства"
                },
                {
                    desc: "Промежуточные чувства"
                },
            ],
        }}
        updateFunction={ data => clgFunction(data) }
    />
);
 
export const withImage = () => (
    <StructuredTextFrame
        params={{
            title: "Красная шляпа",
            desc: "Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия.",
            imageURL: "http://personage.kz/images/detailed/9/shlyapa-krasnaya-vzroslaya-19748.jpg" 
        }}
        updateFunction={ data => clgFunction(data) }
    />
);