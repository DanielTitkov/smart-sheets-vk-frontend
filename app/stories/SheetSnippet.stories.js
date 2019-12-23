import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import SheetSnippet from '../src/components/sheets/SheetSnippet';

export default {
    title: 'SheetSnippet',
  };

export const basic = () => (
    <SheetSnippet 
        title="Шесть шляп мышления"
        updateTime="12.13.2014 15:16"
    />
);

export const withImage = () => (
    <SheetSnippet 
        title="Шесть шляп мышления"
        updateTime="12.13.2014 15:16"
        imageURL="http://personage.kz/images/detailed/9/shlyapa-krasnaya-vzroslaya-19748.jpg"
    />
);