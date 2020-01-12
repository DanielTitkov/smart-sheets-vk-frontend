import React from 'react'
import { Div, Button, Cell, List, Group } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    const { blueprints } = props;
    return (
        <Group>
            <List className="NewSheetList">  
                { blueprints ? (
                    blueprints.map(blueprint => {
                        return (
                            <NewSheetSnippet 
                                key={ blueprint.type }
                                sheet={ blueprint }
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