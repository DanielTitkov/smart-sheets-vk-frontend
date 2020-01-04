import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFrame from '../../components/sheets/TextFrame';
import SheetTitle from '../../components/sheets/SheetTitle';
import { setActivePanel } from '../../store/actions/panelActions';

const osname = platform();

const mapStateToProps = (state) => {
	return {
        activeSheet: state.sheets.activeSheet,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		setActivePanel: (panel) => dispatch(setActivePanel(panel)),
    }
}

const Editor = props => {
    const { setActivePanel } = props;
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => setActivePanel("home") } data-to="home">
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Sheets Editor
            </PanelHeader>
            <Div>
                <SheetTitle />
                <TextFrame />
            </Div>
        </Panel>
    )
}

Editor.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (Editor);