import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, Group, PanelHeader, Tabs, TabsItem, Div, Button } from '@vkontakte/vkui';
import { setActivePanel } from '../store/actions/panelActions';
import { connect } from 'react-redux';
import ErrorSnackbar from '../components/interface/ErrorSnackbar';
import UserSnippet from '../components/user/UserSnippet';
import SheetList from '../components/sheets/SheetList';
import ActiveSheetSnippet from '../components/sheets/ActiveSheetSnippet';
import { getRecentSheets } from '../store/actions/sheetsActions';

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
		userError: state.user.error,
		recentSheets: state.sheets.recentSheets,
		sheetsError: state.sheets.error,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		setActivePanel: (panel) => dispatch(setActivePanel(panel)),
		getRecentSheets: () => dispatch(getRecentSheets()),
    }
}

const Home = (props) => {
	const { 
		id, currentUser, userError,
		openPopout, closePopout,
		setActivePanel, 
		recentSheets, getRecentSheets, sheetsError,
	} = props;

	const [snackbar, setSnackbar] = useState(null);
	const errorSnackbar = <ErrorSnackbar onClose={() => setSnackbar(null)} error={sheetsError} />

	useEffect(() => {
		if (sheetsError) {
			setSnackbar(errorSnackbar)
		}
	}, [sheetsError])

	useEffect(() => {
		getRecentSheets();
	}, [])

	return (
		<Panel id={id}>
			<PanelHeader>Умные Листочки</PanelHeader>
			<UserSnippet currentUser={ currentUser } />
			<ActiveSheetSnippet />
            <Group>
				<Div>
					<Button 
						size="xl" 
						level="2" 
						onClick={ () => setActivePanel("catalog") } 
					>
						{ "Add new Smart Sheet" } 
					</Button>
				</Div>
				<SheetList sheets={ recentSheets } />
            </Group>	
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

export default connect(mapStateToProps, mapDispatchToProps) (Home);