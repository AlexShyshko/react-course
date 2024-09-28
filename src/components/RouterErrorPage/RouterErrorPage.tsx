import './RouterErrorPage.scss';

import { useRouteError } from 'react-router-dom';
import { RouteError } from '../../interfaces-and-types';
//import Button from '@mui/material/Button';

export default function RouterErrorPage() {
	const error = useRouteError() as RouteError;
	console.error(error);

	return (
		<div id="RouterErrorPage">
			<h2>{error.status}</h2>
			<h3>{error.statusText}</h3>
			<h3>{error.error.message}</h3>
		</div>
	);
}
