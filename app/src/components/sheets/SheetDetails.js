import React from 'react';
import { List, Cell, Div, Button, InfoRow } from '@vkontakte/vkui';
import { backgroundImage } from '../../styles/inline';
import { setActiveSheet } from '../../store/actions/sheetsActions';
import { setActivePanel } from '../../store/actions/panelActions';
import { useDispatch } from 'react-redux';
import reactHtmlParser from 'react-html-parser';
import "./SheetDetails.css";


const SheetDetails = props => {
    const dispatch = useDispatch();
    const { blueprint } = props;
    return (
        blueprint ? (
            <React.Fragment>
                <Div className="SheetDetails-image-wrap" style={backgroundImage(blueprint.imageUrl)}></Div>
                <List>
                    <Cell>
                        <InfoRow title="Название">
                            { blueprint.type }
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow title="Описание" size='l'>
                            { blueprint.desc }
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow title="Инструкция" size='l'>
                            { reactHtmlParser(blueprint.guide) }
                        </InfoRow>
                    </Cell>
                    <Cell>
                        <Div>
                            <Button 
                                stretched 
                                size="xl"
                                onClick={ () => {
                                    dispatch(setActiveSheet(null));
                                    dispatch(setActivePanel("catalog"));
                                } }
                            >
                                Назад
                            </Button>
                        </Div>
                        <Div>
                            <Button 
                                stretched 
                                size="xl"
                                level="2" 
                                onClick={ () => {
                                    dispatch(setActivePanel("editor"));
                                } }
                            >
                                Выбрать!
                            </Button>
                        </Div>
                    </Cell>
                </List>
            </React.Fragment>
        ) : (
            null
        )
    )
}

export default SheetDetails;