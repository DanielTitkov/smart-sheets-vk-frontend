import React, { useEffect, useState } from 'react';
import {Panel, PanelHeader, platform, IOS, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import NewSheetList from '../../components/sheets/NewSheetList';
import { setActivePanel } from '../../store/actions/panelActions';
import { getSheetBlueprints, setActiveRubric } from '../../store/actions/sheetsActions';
import ErrorSnackbar from '../../components/interface/ErrorSnackbar';

const osname = platform();

const Catalog = props => {   
    const dispatch = useDispatch();
    const sheetBlueprints = useSelector(state => state.sheets.sheetBlueprints);
    const sheetsError = useSelector(state => state.sheets.error);
    const activeRubric = useSelector(state => state.sheets.activeRubric);
    const [snackbar, setSnackbar] = useState(null);

    const handleGoBack = () => {
        dispatch(setActivePanel("rubrics"));
        dispatch(setActiveRubric(null));     
    }

    useEffect(() => {
        dispatch(getSheetBlueprints());
    }, [dispatch])

	useEffect(() => {
        const errorSnackbar = <ErrorSnackbar onClose={() => setSnackbar(null)} error={sheetsError} />
		if (sheetsError) {
			setSnackbar(errorSnackbar)
		}
	}, [sheetsError])

    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={ handleGoBack }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Каталог | { activeRubric ? activeRubric.title : "Все листочки" }
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