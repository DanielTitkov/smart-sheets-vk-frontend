import React from 'react';
import { List, Group, Cell } from '@vkontakte/vkui';
import SheetSnippetControls from './SheetSnippetControls';
import SheetSnippet from './SheetSnippet';


const SheetSnippetList = props => {
    // const { sheets } = props;
    const sheets = [
        {   
            "id": 1,
            "type": "Шесть шляп мышления",
            "title": "Какие носки выбрать?",
            "imageURL": "",
            "updateTime": "10.12.2019 12:45" 
        },
        {   
            "id": 2,
            "type": "Плюс-минус-интересно",
            "title": "Кто сильнее: акула или медведь?",
            "imageURL": "",
            "updateTime": "10.12.2019 12:45" 
        },
        {   
            "id": 3,
            "type": "Шесть шляп мышления",
            "title": "Хотелось бы оранжевые штаны...",
            "imageURL": "",
            "updateTime": "10.12.2019 12:45" 
        },
    ]
    return (
        <List>
            { sheets ? sheets.map(sheet => {
                return (
                    <SheetSnippet
                        key={ sheet.id }
                        type={ sheet.type }
                        title={ sheet.title }
                        imageURL={ sheet.imageURL }
                        updateTime={ sheet.updateTime }
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