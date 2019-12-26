import React from 'react'
import { Div, Button, Cell, List, Group } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    const { sheets } = props;
    return (
        <Group>
            <List className="NewSheetList">  
                { sheets ? (
                    sheets.map(sheet => {
                        return (
                            <NewSheetSnippet 
                                key={ sheet.id }
                                title={ sheet.title }
                                desc={ sheet.desc }
                                imageURL={ sheet.imageURL }
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