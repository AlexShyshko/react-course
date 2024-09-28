import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import './index.scss';

import SolarSystem from './components/SolarSystem/SolarSystem';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterErrorPage from './components/RouterErrorPage/RouterErrorPage';

import { GlobalProvider } from './global-context-provider';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <RouterErrorPage />,
	},
	{
		path: 'solar-system',
		element: <SolarSystem />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalProvider>
			<RouterProvider router={router} />
		</GlobalProvider>
	</React.StrictMode>,
);
