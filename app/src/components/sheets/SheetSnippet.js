import React from 'react';
import { Cell, Avatar, Icon24MoreHorizontal, Group } from '@vkontakte/vkui';
import SheetSnippetControls from './SheetSnippetControls';

const SheetSnippet = props => {
    const { sheet } = props;
    return (
        <div className="SheetSnippet">
            <Cell
                before={
                    sheet.imageURL && <Avatar 
                        type="image"
                        src={ sheet.imageURL } 
                    />
                }
                description={ sheet.type + " | " + sheet.updateTime }
                asideContent={
                    <SheetSnippetControls />
                }
            >
                { sheet.title }
            </Cell>
        </div>
    )
}

export default SheetSnippet