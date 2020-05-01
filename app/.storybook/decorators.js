import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProviderWrapper from '../src/Provider.js';
import rootReducer from '../src/store/reducers/rootReducer.js';
import '@vkontakte/vkui/dist/vkui.css';
import '../src/styles/bright_light.css';

// https://alligator.io/react/storybook-with-redux/

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export const withProvider = (story) => (
    <ProviderWrapper store={store}>
        { story() }
    </ProviderWrapper>
)