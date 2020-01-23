import React, { useEffect, useState } from 'react';
import {Panel, PanelHeader, HeaderButton, platform, Div, IOS, Button, Group, List, Cell } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewSheetList from '../../components/sheets/NewSheetList';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetBlueprints } from '../../store/actions/sheetsActions';
import ErrorSnackbar from '../../components/interface/ErrorSnackbar';

const osname = platform();

const mapStateToProps = (state) => {
	return {
        sheetBlueprints: state.sheets.sheetBlueprints,
		sheetsError: state.sheets.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActivePanel: (panel) => dispatch(setActivePanel(panel)),
        getSheetBlueprints: () => dispatch(getSheetBlueprints()),
    }
}

const Catalog = props => {
    const { setActivePanel, sheetBlueprints, getSheetBlueprints, sheetsError } = props;
    
    useEffect(() => {
        getSheetBlueprints();
    }, [])

    const [snackbar, setSnackbar] = useState(null);
	const errorSnackbar = <ErrorSnackbar onClose={() => setSnackbar(null)} error={sheetsError} />

	useEffect(() => {
		if (sheetsError) {
			setSnackbar(errorSnackbar)
		}
	}, [sheetsError])

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => setActivePanel("home") } data-to="home">
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >
                Sheets Catalog
            </PanelHeader>
            <NewSheetList blueprints={ sheetBlueprints } />
            { snackbar }
        </Panel>
    )
}

Catalog.propTypes = {
	id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps) (Catalog);