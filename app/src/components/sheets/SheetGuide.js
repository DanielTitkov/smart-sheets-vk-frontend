import React, { useState } from 'react';
import { Switch, Cell } from '@vkontakte/vkui';
import SheetGuideBlock from './SheetGuideBlock';
import "./SheetGuide.css";

const SheetGuide = props => {
    const { guide, example } = props.params;
    const [ guideOpen, setGuideOpen ] = useState(false);
    const [ exampleOpen, setExampleOpen ] = useState(false);
    return (
        <div className="SheetGuide">
            <Cell 
                className="SheetGuide-controls" 
            >
                <div className="SheetGuide-controls-inner-wrap">
                    <p className="SheetGuide-controls-text">Инструкция</p>
                    <Switch 
                        className="SheetGuide-switch" 
                        checked={ guideOpen } 
                        onChange={ () => setGuideOpen(!guideOpen) } 
                    />
                    <p className="SheetGuide-controls-text">Пример</p>
                    <Switch 
                        className="SheetGuide-switch" 
                        checked={ exampleOpen } 
                        onChange={ () => setExampleOpen(!exampleOpen) } 
                    />
                </div>
            </Cell>
            { guideOpen ? (
                <SheetGuideBlock
                    title={ "Инструкция" }
                    text={ guide }
                    onButtonClick={ () => setGuideOpen(!guideOpen) }
                />
            ) : null }
            { exampleOpen ? (
                <SheetGuideBlock
                    title={ "Пример" }
                    text={ example }
                    onButtonClick={ () => setExampleOpen(!exampleOpen) }
                />
            ) : null }
        </div>
    )
}

export default SheetGuide;