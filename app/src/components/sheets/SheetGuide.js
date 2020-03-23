import React, { useState } from 'react';
import { Switch, Cell } from '@vkontakte/vkui';
import reactHtmlParser from 'react-html-parser';
import "./SheetGuide.css";

const SheetGuide = props => {
    const [ open, setOpen ] = useState(false);
    const style = {
        "display": open ? "block" : "none"
    };
    const { guide } = props;
    return (
        <div className="SheetGuide">
            <Cell 
                className="SheetGuide-controls" 
                asideContent={ 
                    <Switch 
                        checked= {open } 
                        onClick={ () => setOpen(!open)} 
                    />
                }
            >
                <p className="SheetGuide-controls-text">Инструкция</p>
            </Cell>
            <div className="SheetGuide-body-wrap" style={ style }>
                <div className="SheetGuide-body">
                    { reactHtmlParser(guide) }
                </div>
            </div>
        </div>
    )
}

export default SheetGuide;