import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import SheetSnippet from '../src/components/sheets/SheetSnippet';

export default {
    title: 'SheetSnippet',
};

const sheet = {
    id: 5,
    title: "Кто сильнее - акула или медведь?",
    type: "Шесть шляп мышления",
    updateTime: "12.11.2019 14:42"
}

export const basic = () => (
    <SheetSnippet 
        sheet={sheet}
    />
);

export const withImage = () => (
    <SheetSnippet 
        sheet={ {
            ...sheet, 
            imageURL: "https://unsplash.it/800/600?image=59",
        } }
    />
);