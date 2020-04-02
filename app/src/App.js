import React, { useEffect } from 'react';
import { View, Spinner, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import { useSelector, useDispatch } from 'react-redux';
import { getValidationQuery } from './store/actions/validationActions';
import { getCurrentUser } from './store/actions/userActions';
import Catalog from './panels/sheets/Catalog';
import ProfileSettings from './panels/profile/Settings';
import Editor from './panels/sheets/Editor';
import Details from './panels/sheets/Details';
import About from './panels/about/About';
import './styles/bright_light.css';

const App = props => {
	const dispatch = useDispatch();
	const activePanel = useSelector(state => state.panel.activePanel);
	const modal = useSelector(state => state.modal.modal);
	const vkquery = useSelector(state => state.validation.vkquery);
	const popout = useSelector(state => state.popout.popout);

	useEffect(() => {
		dispatch(getValidationQuery());
		dispatch(getCurrentUser());
	}, [dispatch])

	if (vkquery) {
		return (
			<View popout={popout} modal={modal} activePanel={activePanel}>
				<About id="about" />
				<ProfileSettings id="profilesettings" />
				<Home id="home" />
				<Catalog id="catalog" />
				<Details id="details" />
				<Editor id="editor" />
			</View>
		)
	} else {
		return (
			<div>
				<Spinner size="large" style={{ marginTop: 20 }} />
				<Footer>Loading... If this doesn't go away you may be using the app outside of VK</Footer>
			</div>
		)
	}
}

export default App;