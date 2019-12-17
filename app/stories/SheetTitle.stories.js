import React from 'react';
import { action } from '@storybook/addon-actions';
import SheetTitle from '../src/components/sheets/SheetTitle';
import '@vkontakte/vkui/dist/vkui.css';

export default {
    title: 'SheetTitle',
  };

export const basic = () => (
    <SheetTitle />
);