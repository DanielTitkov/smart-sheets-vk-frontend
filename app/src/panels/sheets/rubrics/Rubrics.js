import React, { useEffect, useState } from 'react';
import {Panel, PanelHeader, PanelHeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ErrorSnackbar from '../../../components/interface/ErrorSnackbar';
import { setActivePanel } from '../../../store/actions/panelActions';
import { getSheetRubrics } from '../../../store/actions/sheetsActions';
import RubricsList from '../../../components/sheets/rubrics/RubricsList';

const osname = platform();

const Rubrics = props => {   
    const dispatch = useDispatch();
    const rubrics = useSelector(state => state.sheets.rubrics);
    const sheetsError = useSelector(state => state.sheets.error);

    useEffect(() => {
        dispatch(getSheetRubrics());
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
                left={<PanelHeaderButton onClick={ () => dispatch(setActivePanel("home")) }>
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Sheets Rubrics
            </PanelHeader>
            <RubricsList rubrics={ rubrics } />
            { snackbar }
        </Panel>
    )
}

Rubrics.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Rubrics;