import React from 'react';
import { List, Group, Cell } from '@vkontakte/vkui';
import SheetSnippet from './SheetSnippet';


const SheetSnippetList = props => {
    const { sheets } = props;
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