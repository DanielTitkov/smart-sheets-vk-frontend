import React, { useState, useEffect } from 'react';
import { View, Spinner, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import { connect } from 'react-redux';
import { getValidationQuery } from './store/actions/validationActions';
import { getCurrentUser } from './store/actions/userActions';
import Catalog from './panels/sheets/Catalog';
import ProfileSettings from './panels/profile/Settings';
import Editor from './panels/sheets/Editor';

const mapStateToProps = (state) => {
    return {
		activePanel: state.panel.activePanel,
		modal: state.modal.modal,
		vkquery: state.validation.vkquery,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		getValidationQuery: () => dispatch(getValidationQuery()),
		getCurrentUser: () => dispatch(getCurrentUser()),
    }
}

const App = props => {
	const { getValidationQuery, vkquery, getCurrentUser, modal } = props;
	const [activePanel, setActivePanel] = useState('home');
	const [popout, setPopout] = useState(null);

	const openPopout = (popout) => {
		setPopout(popout);
	}
	
	const closePopout = () => {
		setPopout(null);
	}

	useEffect(() => {
		getValidationQuery();
		getCurrentUser();
	}, [])

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	if (vkquery) {
		return (
			<View popout={popout} modal={modal} activePanel={activePanel}>
				<ProfileSettings id="profilesettings" go={go}  />
				<Home 
					id="home" 
					go={go} 
				/>
				<Catalog 
					id="catalog"
					go={go}
				/>
				<Editor id="editor" go={go} />
			</View>
		)
	} else {
		return (
			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
				<Spinner size="large" style={{ marginTop: 20 }} />
				<Footer>Loading... If this doesn't go away you may be using the app outside of VK</Footer>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (App);