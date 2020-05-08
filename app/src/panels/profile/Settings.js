import React from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, Footer, IOS, PanelSpinner, Cell, Button, List } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import UserSettings from '../../components/user/UserSettings';

const osname = platform();

const Settings = props => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    console.log("CURRENT USER", currentUser);
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={ () => dispatch(setActivePanel("home")) }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Profile Settings
            </PanelHeader>{
                currentUser ? (
                    <UserSettings 
                        settings={ currentUser ? currentUser.settings : null } 
                    />
                ) : (
                    <PanelSpinner />
                )
            }
            <List>
                <Cell>
                    <Button 
                        stretched 
                        size="xl"
                        onClick={ () => dispatch(setActivePanel("home")) }
                    >
                        Назад
                    </Button> 
                </Cell>
            </List>
            <Footer>Шифрование пока не работает</Footer>
        </Panel>
    )
}

Settings.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Settings;