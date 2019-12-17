import React from 'react';
import { action } from '@storybook/addon-actions';
import TextFrame from '../src/components/sheets/TextFrame';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default {
    title: 'TextFrame',
  };

export const basic = () => (
    <TextFrame />
);