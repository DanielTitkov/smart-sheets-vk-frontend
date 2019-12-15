import React from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const osname = platform();
const mapStateToProps = (state) => {
	return {}
}

 const Catalog = props => {
    const { go } = props;
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={go} data-to="home">
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Sheets Catalog
            </PanelHeader>
        </Panel>
    )
}

Catalog.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default connect(mapStateToProps) (Catalog);