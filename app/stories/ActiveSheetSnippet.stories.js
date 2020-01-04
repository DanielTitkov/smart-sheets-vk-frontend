import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import ActiveSheetSnippet from '../src/components/sheets/ActiveSheetSnippet';

export default {
    title: 'ActiveSheetSnippet',
};

const sheet = {
    id: 5,
    title: "Кто сильнее - акула или медведь?",
    type: "Шесть шляп мышления",
    updateTime: "12.11.2019 14:42"
}

export const basic = () => (
    <ActiveSheetSnippet 

    />
);
