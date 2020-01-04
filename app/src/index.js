import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import vkconnect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import ProviderWrapper from './Provider';

// Init VK  Mini App
vkconnect.send('VKWebAppInit', {});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const SmartSheetsApp = () => (
    <ProviderWrapper store={ store }>
        <App />
    </ProviderWrapper>
);

ReactDOM.render(
    <SmartSheetsApp />, document.getElementById('root')
);