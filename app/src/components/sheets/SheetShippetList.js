import React from 'react';
import { List, Group, Cell } from '@vkontakte/vkui';
import SheetSnippet from './SheetSnippet';


const SheetSnippetList = props => {
    // const { sheets } = props;
    const sheets = [
        {
            id: 1,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            updateTime: "10.12.2019 12:45",
            structure: [
                {
                    id: 1,
                    type: "SheetTitle",
                    params: {
                        title: "Назовите проблему",
                    },
                },
                {
                    id: 2,
                    type: "TextFrame",
                    params: {
                        title: "Плюс",
                        desc: "Тут опишите, что вам хорошо и славно",
                        imageURL: "",
                    },
                },
                {
                    id: 3, 
                    type: "TextFrame",
                    params: {
                        title: "Минус",
                        desc: "Тут опишите, что вам плохо и не очень",
                        imageURL: "",
                    },
                },
                {
                    id: 4,
                    type: "TextFrame",
                    params: {
                        title: "Интересно",
                        desc: "Тут опишите, что не вошло в предыдущие поля",
                        imageURL: "",
                    },
                },
            ],
            data: {
                1: "Кто СИЛЬНЕЕ: акула ИЛИ медведь?"
            },
        },
        {
            id: 2,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            updateTime: "10.12.2019 12:45",
            structure: [
                {
                    id: 1,
                    type: "SheetTitle",
                    params: {
                        title: "Назовите проблему",
                    },
                },
                {
                    id: 2,
                    type: "TextFrame",
                    params: {
                        title: "Плюс",
                        desc: "Тут опишите, что вам хорошо и славно",
                        imageURL: "",
                    },
                },
                {
                    id: 3, 
                    type: "TextFrame",
                    params: {
                        title: "Минус",
                        desc: "Тут опишите, что вам плохо и не очень",
                        imageURL: "",
                    },
                },
                {
                    id: 4,
                    type: "TextFrame",
                    params: {
                        title: "Интересно",
                        desc: "Тут опишите, что не вошло в предыдущие поля",
                        imageURL: "",
                    },
                },
            ],
            data: {
                1: "НАХУЙ так ЖИТЬ?"
            },
        },
    ]
    return (
        <List>
            { sheets ? sheets.map(sheet => {
                return (
                    <SheetSnippet
                        key={ sheet.id }
                        sheet={ sheet }
                    />
                )
            })
             : (
                <Cell>No sheets yet</Cell>
            ) }
        </List>
    )
}

export default SheetSnippetList