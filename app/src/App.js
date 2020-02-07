import React, { useEffect } from 'react';
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
		popout: state.popout.popout,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		getValidationQuery: () => dispatch(getValidationQuery()),
		getCurrentUser: () => dispatch(getCurrentUser()),
    }
}

const App = props => {
	const { getValidationQuery, vkquery, getCurrentUser, modal, popout, activePanel } = props;

	useEffect(() => {
		getValidationQuery();
		getCurrentUser();
	}, [])

	if (vkquery) {
		return (
			<View popout={popout} modal={modal} activePanel={activePanel}>
				<ProfileSettings id="profilesettings" />
				<Home id="home" />
				<Catalog id="catalog" />
				<Editor id="editor" />
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