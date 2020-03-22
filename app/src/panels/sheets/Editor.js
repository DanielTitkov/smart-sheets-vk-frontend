import React, { useEffect } from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import { updateActiveSheetData, postActiveSheet } from '../../store/actions/sheetsActions';
import { buildSheetStructure, getElementMapping } from '../../utils/sheetsBuilder';
import "./Editor.css";


const osname = platform();

const Editor = props => {
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    // const sheetsError = useSelector(state => state.sheets.error);
    const sheetBody = buildSheetStructure(
        activeSheet.blueprint.structure,
        activeSheet.data,
        (id, data) => dispatch(updateActiveSheetData(id, data)),
        getElementMapping(),
    )

    useEffect(() => {
        return () => dispatch(postActiveSheet());
    }, [dispatch]);

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => dispatch(setActivePanel("home")) } >
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Sheets Editor
            </PanelHeader>
            <Div className="Editor-sheet-wrap">
                {sheetBody}
            </Div>
        </Panel>
    )
}

Editor.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Editor;