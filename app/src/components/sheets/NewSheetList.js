import React from 'react'
import { Cell, List, Group } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    const { blueprints } = props;
    console.log(blueprints);
    return (
        <Group>
            <List className="NewSheetList">  
                { blueprints && blueprints.length !== 0 ? (
                    blueprints.map(blueprint => {
                        return (
                            <NewSheetSnippet 
                                key={ blueprint.type }
                                blueprint={ blueprint }
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