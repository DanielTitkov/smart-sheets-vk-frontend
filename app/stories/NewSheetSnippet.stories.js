import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import NewSheetSnippet from '../src/components/sheets/NewSheetSnippet';

export default {
    title: 'NewSheetSnippet',
  };

export const basic = () => (
    <NewSheetSnippet 
        title="Шесть шляп мышления"
        desc="Техника, которая помогает раскласть всякое по полочками и смешные шляпы"
    />
);

export const withImage = () => (
    <NewSheetSnippet 
        title="Шесть шляп мышления"
        desc="Техника, которая помогает раскласть всякое по полочками и смешные шляпы"
        imageURL="https://unsplash.it/800/600?image=59"
    />
);