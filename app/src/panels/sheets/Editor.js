import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import { updateActiveSheetData } from '../../store/actions/sheetsActions';
import { buildSheetStructure, getElementMapping } from '../../utils/sheetsBuilder';

const osname = platform();

const mapStateToProps = (state) => {
	return {
        activeSheet: state.sheets.activeSheet,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePanel: (panel) => dispatch(setActivePanel(panel)),
        updateActiveSheetData: (id, data) => dispatch(updateActiveSheetData(id, data)),
    }
}

const Editor = props => {
    const { activeSheet, setActivePanel, updateActiveSheetData } = props;
    const sheetBody = buildSheetStructure(
        activeSheet.structure,
        activeSheet.data,
        updateActiveSheetData,
        getElementMapping(),
    )

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => setActivePanel("home") } >
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Sheets Editor
            </PanelHeader>
            <Div>
                {sheetBody}
            </Div>
        </Panel>
    )
}

Editor.propTypes = {
	id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (Editor);