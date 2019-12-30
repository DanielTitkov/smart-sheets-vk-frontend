import React from 'react'
import { Div, Button, Cell, List, Group } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    // const { sheet } = props;
    const sheets = [
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