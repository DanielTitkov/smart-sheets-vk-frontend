import React from 'react'
import { Div, Button, Cell, List, Group } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    // const { sheets } = props;
    const sheets = [
        {
            id: 1,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
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
            data: null,
        },
        {
            id: 2,
            type: "Шесть шляп мышления",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1, 
            structure: [],
            data: null,
        },
        {
            id: 3,
            type: "Шесть шляп мышления",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            structure: [],
            data: null,
        },
    ]
    return (
        <Group>
            <List className="NewSheetList">  
                { sheets ? (
                    sheets.map(sheet => {
                        return (
                            <NewSheetSnippet 
                                key={ sheet.id }
                                sheet={ sheet }
                            />
                        )
                    })
                ) : (
                    <Cell>
                        <h3>No Sheet Blueprints =(</h3>
                    </Cell>
                ) }
            </List> 
        </Group>
    );
}

export default NewSheetList