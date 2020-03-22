import React from 'react'
import { Cell, List } from '@vkontakte/vkui';
import NewSheetSnippet from './NewSheetSnippet';
import "./NewSheetList.css";

const NewSheetList = props => {
    const { blueprints } = props;
    return (
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
    );
}

export default NewSheetList