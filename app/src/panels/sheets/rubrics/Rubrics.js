import React, { useEffect, useState } from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, IOS, Spinner } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ErrorSnackbar from '../../../components/interface/ErrorSnackbar';
import { setActivePanel } from '../../../store/actions/panelActions';
import { getSheetRubrics, setActiveRubric } from '../../../store/actions/sheetsActions';
import RubricsList from '../../../components/sheets/rubrics/RubricsList';

const osname = platform();

const Rubrics = props => {   
    const dispatch = useDispatch();
    const rubrics = useSelector(state => state.sheets.rubrics);
    const loading = useSelector(state => state.sheets.loading);
    const sheetsError = useSelector(state => state.sheets.error);
    const activeRubric = useSelector(state => state.sheets.activeRubric);
    const activePanel = useSelector(state => state.panel.activePanel);
    const [snackbar, setSnackbar] = useState(null);

    const handleGoBack = () => {
        if (activeRubric && (activeRubric.hasChildren || activeRubric.parent)) {
            if (activeRubric.parent) {
                dispatch(setActiveRubric(activeRubric.parent));
            } else {
                dispatch(setActiveRubric(null));
            }
            dispatch(setActivePanel("rubrics"));
        } else {
            dispatch(setActivePanel("home"));
        }
    }

    useEffect(() => {
        if (activeRubric && (activeRubric.hasChildren || activeRubric.parent)) {
            dispatch(getSheetRubrics(activeRubric));
        } else {
            dispatch(getSheetRubrics());
        }
    }, [dispatch, activeRubric, activePanel])

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
                Sheets Rubrics | { activeRubric ? activeRubric.title : "все" }
            </PanelHeader>
            { loading ? (
                <Spinner size="large" className="SheetList-spinner" />
            ) : (
                <RubricsList rubrics={ rubrics } />
            ) }
            { snackbar }
        </Panel>
    )
}

Rubrics.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Rubrics;