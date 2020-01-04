import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, Group, PanelHeader, Tabs, TabsItem, Div, Button } from '@vkontakte/vkui';
import { setActivePanel } from '../store/actions/panelActions';
import { connect } from 'react-redux';
import ErrorSnackbar from '../components/interface/ErrorSnackbar';
import UserSnippet from '../components/user/UserSnippet';
import SheetSnippetList from '../components/sheets/SheetShippetList';
import ActiveSheetSnippet from '../components/sheets/ActiveSheetSnippet';

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
		userError: state.user.error,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		setActivePanel: (panel) => dispatch(setActivePanel(panel)),
    }
}

const Home = (props) => {
	const { 
		id, currentUser, userError,
		openPopout, closePopout,
		setActivePanel,
	} = props;

	const [activeTab, setActiveTab] = useState("new");
	const [snackbar, setSnackbar] = useState(null);

	return (
		<Panel id={id}>
			<PanelHeader>Умные Листочки</PanelHeader>
			<UserSnippet currentUser={ currentUser } />
			<ActiveSheetSnippet />
            <Group>
				<SheetSnippetList />
				<Div>
					<Button 
						size="xl" 
						level="2" 
						onClick={ () => setActivePanel("catalog") } 
					>
						{ "Add new Smart Sheet" } 
					</Button>
				</Div>
				<Div>
					<Button 
						size="xl" 
						level="2" 
						onClick={ () => setActivePanel("profilesettings") } 
					>
						{ "Edit profile" } 
					</Button>
				</Div>
				<Div>
					<Button 
						size="xl" 
						level="2" 
						onClick={ () => setActivePanel("editor") } 
					>
						{ "Pagie Editor" } 
					</Button>
				</Div>
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