import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import NewSheetSnippet from '../src/components/sheets/NewSheetSnippet';

export default {
    title: 'NewSheetSnippet',
};

const blueprint = {
    "id": 2,
    "type": "Плюс-минус-интересно",
    "desc": "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
    "titleElementId": 1,
    "structure": [
        {
            "id": 1,
            "type": "SheetTitle",
            "params": {
                "title": "Назовите проблему"
            }
        },
        {
            "id": 2,
            "type": "TextFrame",
            "params": {
                "desc": "Тут опишите, что вам хорошо и славно",
                "title": "Плюс",
                "imageURL": ""
            }
        },
        {
            "id": 3,
            "type": "TextFrame",
            "params": {
                "desc": "Тут опишите, что вам плохо и не очень",
                "title": "Минус",
                "imageURL": ""
            }
        },
        {
            "id": 4,
            "type": "TextFrame",
            "params": {
                "desc": "Тут опишите, что не вошло в предыдущие поля",
                "title": "Интересно",
                "imageURL": ""
            }
        }
    ]
}

export const basic = () => (
    <NewSheetSnippet 
        blueprint={blueprint}
    />
);

export const withImage = () => (
    <NewSheetSnippet 
        blueprint={ {
            ...blueprint, 
            imageUrl: "https://unsplash.it/800/600?image=59",
        } }
    />
);