import React, { useState } from 'react';
import { Switch, Cell, Button } from '@vkontakte/vkui';
import reactHtmlParser from 'react-html-parser';
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
                <div className="SheetGuide-body-wrap">
                    <div className="SheetGuide-body">
                        <p><b>Инструкция</b></p>
                        <p>{ guide ? reactHtmlParser(guide) : "Пока нет инструкции для этого листочка" }</p>
                        <Button 
                            size="m" 
                            stretched 
                            level="outline"
                            onClick={ () => setGuideOpen(!guideOpen) }
                        >
                            Свернуть
                        </Button>
                    </div>
                </div>
            ) : null }
            { exampleOpen ? (
                <div className="SheetGuide-body-wrap">
                    <div className="SheetGuide-body">
                        <p><b>Пример</b></p>
                        <p>{ example ? reactHtmlParser(example) : "Пока нет примера для этого листочка" }</p>
                        <Button // DRY maybe??
                            size="m" 
                            stretched 
                            level="outline"
                            onClick={ () => setExampleOpen(!exampleOpen) } 
                        >
                            Свернуть
                        </Button>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default SheetGuide;