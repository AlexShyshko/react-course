import './SolarSystem.scss';

import { InputHandler, Location } from '../../interfaces-and-types';

import { useState, useContext } from 'react';
import { SPACE_RELAX_MODE_LABEL } from '../../constants';
import globalContext from '../../global-context.tsx';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useNavigate, useLocation } from 'react-router-dom';

function SolarSystem() {
	const location: Location = useLocation();
	const navigate = useNavigate();

	const { handleContextRelaxModeChecked } = useContext(globalContext);
	const [relaxModeChecked, setRelaxModeChecked] = useState(true);

	const handleSetRelaxModeChecked: InputHandler = (event) => {
		setRelaxModeChecked(event.target.checked);
		const previousRoutePathname = location.state.previousRoutePathname;

		if (!event.target.checked) {
			navigate(previousRoutePathname, {
				state: { previousRoutePathname: location.pathname },
			});
		}

		handleContextRelaxModeChecked(event);
	};

	return (
		<>
			<div className="SolarSystem">
				<div className="solar-syst">
					<div className="sun"></div>
					<div className="mercury"></div>
					<div className="venus"></div>
					<div className="earth"></div>
					<div className="mars"></div>
					<div className="jupiter"></div>
					<div className="saturn"></div>
					<div className="uranus"></div>
					<div className="neptune"></div>
					<div className="pluto"></div>
					<div className="asteroids-belt"></div>
				</div>
			</div>
			<FormGroup className="space-relax-mode-switch-group">
				<FormControlLabel
					control={
						<Switch
							color="warning"
							checked={relaxModeChecked}
							onChange={handleSetRelaxModeChecked}
							inputProps={{ 'aria-label': 'controlled' }}
						/>
					}
					label={SPACE_RELAX_MODE_LABEL}
					className="space-relax-mode-switch-control"
				/>
			</FormGroup>
		</>
	);
}

export default SolarSystem;
