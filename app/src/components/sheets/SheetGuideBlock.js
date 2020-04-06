import React from 'react';
import { Button, Separator } from '@vkontakte/vkui';
import reactHtmlParser from 'react-html-parser';
import "./SheetGuideBlock.css";

const SheetGuideBlock = props => {
    const { title, text, onButtonClick } = props;
    return (
        <div className="SheetGuideBlock-body-wrap">
            <div className="SheetGuideBlock-body">
                <p><b>{ title }</b></p>
                <Separator wide />
                <div className="SheetGuideBlock-text-wrap">{ text ? reactHtmlParser(text) : "Пока нет для этого листочка" }</div>
                <Button
                    size="m" 
                    stretched 
                    level="outline"
                    onClick={ onButtonClick } 
                >
                    Свернуть
                </Button>
            </div>
        </div>
    );
}

export default SheetGuideBlock;