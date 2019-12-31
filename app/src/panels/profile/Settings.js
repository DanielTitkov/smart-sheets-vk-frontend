import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';

const osname = platform();

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
		setActivePanel: (panel) => dispatch(setActivePanel(panel)),
    }
}

const Settings = props => {
    const { setActivePanel } = props;
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => {setActivePanel("home")} }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Profile Settings
            </PanelHeader>
        </Panel>
    )
}

Settings.propTypes = {
	id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (Settings);