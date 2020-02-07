import React from 'react';
import { List, Spinner, Group, Cell } from '@vkontakte/vkui';
import SheetSnippet from './SheetSnippet';
import "./SheetList.css";


const SheetList = props => {
    const { sheets, loading } = props;
    return (
        <List>
            { loading ? (
                <Spinner size="large" className="SheetList-spinner" />
            ) : (
                null
            ) }
            
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

export default SheetList