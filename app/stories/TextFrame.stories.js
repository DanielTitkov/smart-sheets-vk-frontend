import React from 'react';
import { action } from '@storybook/addon-actions';
import TextFrame from '../src/components/sheets/TextFrame';
import '@vkontakte/vkui/dist/vkui.css';

export default {
    title: 'TextFrame',
  };

export const basic = () => (
    <TextFrame
        title="Красная шляпа"
        desc="Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия."
    />
);

export const withImage = () => (
    <TextFrame
        title="Красная шляпа"
        desc="Напишите о своих чувствах, связанных с темой обсуждения. Любые чувства. Хоть хорошие, хоть плохие. Хоть эмоции, хоть предчувствия."
        imageURL="http://personage.kz/images/detailed/9/shlyapa-krasnaya-vzroslaya-19748.jpg" 
    />
);