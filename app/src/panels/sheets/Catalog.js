import React, { useEffect, useState } from 'react';
import {Panel, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import NewSheetList from '../../components/sheets/NewSheetList';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetBlueprints } from '../../store/actions/sheetsActions';
import ErrorSnackbar from '../../components/interface/ErrorSnackbar';

const osname = platform();

const Catalog = props => {   
    const dispatch = useDispatch();
    const sheetBlueprints = useSelector(state => state.sheets.sheetBlueprints);
    const sheetsError = useSelector(state => state.sheets.error);

    useEffect(() => {
        dispatch(getSheetBlueprints());
    }, [dispatch])

    const [snackbar, setSnackbar] = useState(null);
	
	useEffect(() => {
        const errorSnackbar = <ErrorSnackbar onClose={() => setSnackbar(null)} error={sheetsError} />
		if (sheetsError) {
			setSnackbar(errorSnackbar)
		}
	}, [sheetsError])

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<HeaderButton onClick={ () => dispatch(setActivePanel("home")) }>
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

export default Catalog;