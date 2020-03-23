import React, { useState } from 'react';
// import { Cell, CardGrid, Card, Header } from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import reactHtmlParser from 'react-html-parser';
import "./SheetGuide.css";

const SheetGuide = props => {
    const [ open, setOpen ] = useState(false);
    const { guide } = props;
    return (
        <div className="SheetGuide" onClick = { () => setOpen(!open) }>
            <div className="SheetGuide-controls">
                <p className="SheetGuide-controls-text">
                    Инструкция
                    { open ? (
                        <Icon16Cancel className="SheetGuide-controls-icon" />
                    ) : (
                        <Icon16Dropdown className="SheetGuide-controls-icon" />
                    ) }
                </p>
            </div>
            { open ? (
                <div className="SheetGuide-body">
                    { reactHtmlParser(guide) }
                </div>
            ) : null }
        </div>
    )
}

export default SheetGuide;