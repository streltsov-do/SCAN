import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GlobalStyle from './components/utils/globalStyle';
import FontStyles from './components/utils/Fonts/FontStyles';

import reducer from './components/reducers/reducers';

const store= createStore(reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<FontStyles/>
		<GlobalStyle />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

