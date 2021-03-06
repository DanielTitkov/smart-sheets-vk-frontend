import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, Group, PanelHeader, Div, Button, Footer } from '@vkontakte/vkui';
import { setActivePanel } from '../store/actions/panelActions';
import { useSelector, useDispatch } from 'react-redux';
import ErrorSnackbar from '../components/interface/ErrorSnackbar';
import UserSnippet from '../components/user/UserSnippet';
import SheetList from '../components/sheets/SheetList';
import ActiveSheetSnippet from '../components/sheets/ActiveSheetSnippet';
import { getRecentSheets } from '../store/actions/sheetsActions';

const Home = (props) => {
	const { id } = props;

	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.user.currentUser);
	const recentSheetsLoading = useSelector(state => state.sheets.loading);
	const recentSheets = useSelector(state => state.sheets.recentSheets);
	const sheetsError = useSelector(state => state.sheets.error);
	const [snackbar, setSnackbar] = useState(null);
	
	useEffect(() => {
		const errorSnackbar = <ErrorSnackbar onClose={() => setSnackbar(null)} error={sheetsError} />
		if (sheetsError) {
			setSnackbar(errorSnackbar)
		}
	}, [sheetsError])

	useEffect(() => {
		dispatch(getRecentSheets());
	}, [dispatch])

	return (
		<Panel id={id}>
			<PanelHeader>Умные Листочки</PanelHeader>
			<UserSnippet currentUser={ currentUser } />
			<ActiveSheetSnippet />
            <Group>
				<Div>
					<Button 
						size="xl" 
						mode="secondary"
						onClick={ () => dispatch(setActivePanel("rubrics")) } 
					>
						{ "Add new Smart Sheet" } 
					</Button>
				</Div>
				<SheetList sheets={ recentSheets } loading={ recentSheetsLoading } />
            </Group>	
			<Footer>Write for happiness</Footer>
			{ snackbar }
		</Panel>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;