import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import NewSheetList from '../src/components/sheets/NewSheetList';

// TODO https://alligator.io/react/storybook-with-redux/

const data = [
    {
        id: 1,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 2,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 3,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 4,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 5,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 6,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
    {
        id: 7,
        title: "Шесть шляп мышления",
        desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
        imageURL: "https://unsplash.it/800/600?image=59",      
    },
]

export default {
    title: 'NewSheetList',
  };

export const basic = () => (
    <NewSheetList
        sheets={ data }
    />
);

export const empty = () => (
    <NewSheetList />
);