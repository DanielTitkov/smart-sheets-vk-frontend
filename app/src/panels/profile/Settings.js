import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Footer, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';

const osname = platform();

const Settings = props => {
    const dispatch = useDispatch();
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => dispatch(setActivePanel("home")) }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Profile Settings
            </PanelHeader>
            <Footer>Тут пока ничего нет</Footer>
        </Panel>
    )
}

Settings.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Settings;