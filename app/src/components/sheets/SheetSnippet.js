import React from 'react';
import { Cell, Avatar, Icon24MoreHorizontal, Group } from '@vkontakte/vkui';
import SheetSnippetControls from './SheetSnippetControls';

const SheetSnippet = props => {
    const { type, title, updateTime, imageURL } = props;
    return (
        <div className="SheetSnippet">
            <Cell
                before={
                    imageURL && <Avatar 
                        type="image"
                        src={ imageURL } 
                    />
                }
                description={ type + " | " + updateTime }
                asideContent={
                    <SheetSnippetControls />
                }
            >
                { title }
            </Cell>
        </div>
    )
}

export default SheetSnippet