import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import SheetDetails from '../../components/sheets/SheetDetails';
import { setActiveSheet } from '../../store/actions/sheetsActions';

const osname = platform();

const Details = props => {   
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={
                    <HeaderButton 
                        onClick={ 
                            () => {
                                dispatch(setActiveSheet(null));
                                dispatch(setActivePanel("catalog"));
                            }
                        }
                    >
                        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>
                }
            >
                Sheet Details
            </PanelHeader>
            <SheetDetails blueprint={ activeSheet ? activeSheet.blueprint : null } />
        </Panel>
    )
}

Details.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Details;