import './Main.scss';

import { MainProps } from '../../interfaces-and-types';

import SolarSystem from '../SolarSystem/SolarSystem';
import MainContentContainer from '../MainContentContainer/MainContentContainer';

function Main({ checked }: MainProps) {
	return (
		<>
			<div className={checked ? 'solar-system-fullscreen' : 'Main'}>
				{checked ? <SolarSystem/> : null}
				{checked ? null : <MainContentContainer/>}
			</div>
		</>
	);
}

export default Main;
