import React, { useEffect } from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { setActivePanel } from '../../store/actions/panelActions';
import { updateActiveSheetData, postActiveSheet } from '../../store/actions/sheetsActions';
import { buildSheetStructure, getElementMapping } from '../../utils/sheetsBuilder';

const osname = platform();

const mapStateToProps = (state) => {
	return {
        activeSheet: state.sheets.activeSheet,
		sheetsError: state.sheets.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveSheetData: (id, data) => dispatch(updateActiveSheetData(id, data)),
    }
}

const Editor = props => {
    const { 
        updateActiveSheetData
    } = props;
    const dispatch = useDispatch();
    const activeSheet = useSelector(state => state.sheets.activeSheet);
    const sheetBody = buildSheetStructure(
        activeSheet.blueprint.structure,
        activeSheet.data,
        updateActiveSheetData,
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