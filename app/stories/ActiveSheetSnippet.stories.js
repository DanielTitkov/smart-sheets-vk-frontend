import React from 'react';
import { action } from '@storybook/addon-actions';
import '@vkontakte/vkui/dist/vkui.css';
import ActiveSheetSnippet from '../src/components/sheets/ActiveSheetSnippet';

export default {
    title: 'ActiveSheetSnippet',
};

const sheet =  {
    "id": 38,
    "created": "2020-02-02T21:06:39.258445Z",
    "updated": "2020-02-02T21:06:39.258466Z",
    "deleted": false,
    "blueprint": {
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
    "data": {
        1: "Awwwww",
        2: "Fooo",
        3: "Baaaar",
        4: "Moooo",
    }
}

export const basic = () => (
    <ActiveSheetSnippet
        activeSheet={sheet} // TODO
    />
);
