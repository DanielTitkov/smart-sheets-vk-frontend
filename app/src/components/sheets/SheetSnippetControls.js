import React from 'react';
import { Cell, Avatar, Icon24MoreHorizontal, Group } from '@vkontakte/vkui';
import Icon28Write from '@vkontakte/icons/dist/28/write';
import Icon28Delete from '@vkontakte/icons/dist/28/delete';
import "./SheetSnippetControls.css";

const SheetSnippetControls = props => {
    return (
        <div className="SheetSnippetControls">
            <a><Icon28Write fill="var(--accent)" /></a>
            <a><Icon28Delete fill="var(--accent)" /></a>
        </div>
    )
}

export default SheetSnippetControls
