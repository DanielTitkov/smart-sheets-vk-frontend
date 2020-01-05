import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFrame from '../../components/sheets/TextFrame';
import SheetTitle from '../../components/sheets/SheetTitle';
import { setActivePanel } from '../../store/actions/panelActions';
import { updateActiveSheetData } from '../../store/actions/sheetsActions';

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
    const { setActivePanel, updateActiveSheetData } = props;
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
                <SheetTitle text="foo" updateFunction={(data) => updateActiveSheetData(1, data)} /> 
                <TextFrame updateFunction={(data) => updateActiveSheetData(2, data)} />
            </Div>
        </Panel>
    )
}

Editor.propTypes = {
	id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (Editor);