import React, { useEffect } from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, Div, IOS, Button } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import { updateActiveSheetData, postActiveSheet } from '../../store/actions/sheetsActions';
import { buildSheetStructure, getElementMapping } from '../../utils/sheetsBuilder';
import SheetGuide from '../../components/sheets/SheetGuide';
import SheetHeader from '../../components/sheets/SheetHeader';
import appConfig from '../../config/appConfig';
import "./Editor.css";


const osname = platform();

const Editor = props => {
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    const sheetBody = buildSheetStructure(
        activeSheet.blueprint.structure,
        activeSheet.data,
        (id, data, field) => dispatch(updateActiveSheetData(id, data, field)),
        getElementMapping(),
    )

    useEffect(() => {
        const interval = setInterval(
            () => {
                dispatch(postActiveSheet())
            },
            appConfig.EDITOR_SAVE_INTERVAL);
        return () => {
            clearInterval(interval);
            dispatch(postActiveSheet())
        };
    }, [dispatch]);

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={ () => dispatch(setActivePanel("home")) } >
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Sheets Editor
            </PanelHeader>
            <div className="Editor-header-wrap">
                <SheetHeader params={ { "imageURL": activeSheet.blueprint.imageUrl } } />
                <SheetGuide params={ { "guide": activeSheet.blueprint.guide, "example": activeSheet.blueprint.example} } />
            </div>
            <Div className="Editor-sheet-wrap">
                {sheetBody}
            </Div>
            <Div>
                <Button 
                    stretched 
                    size="xl"
                    onClick={ () => dispatch(setActivePanel("home")) }
                >
                    Сохранить и вернуться
                </Button> 
            </Div>
        </Panel>
    )
}

Editor.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Editor;