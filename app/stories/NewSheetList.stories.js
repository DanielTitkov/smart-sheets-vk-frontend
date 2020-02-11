import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import NewSheetList from '../src/components/sheets/NewSheetList';

// TODO https://alligator.io/react/storybook-with-redux/

const blueprints = [
    {
        "id": 2,
        "type": "Плюс-минус-интересно",
        "desc": "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
        "imageUrl": "https://unsplash.it/800/600?image=59",
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
    },
    {
        "id": 3,
        "type": "Плюс-минус-интересно",
        "desc": "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
        "imageUrl": "https://unsplash.it/800/600?image=59",
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
]

export default {
    title: 'NewSheetList',
  };

export const basic = () => (
    <NewSheetList
        blueprints={ blueprints }
    />
);

export const empty = () => (
    <NewSheetList />
);