import './Header.scss';

import globalContext from '../../global-context.tsx';
import { useState, useContext } from 'react';

import { HEADER_TITLE, SPACE_RELAX_MODE_LABEL } from '../../constants';
import { InputHandler } from '../../interfaces-and-types';
import { useNavigate, useLocation } from 'react-router-dom';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Header(/*{ stateRelaxModeChecked, setStateRelaxModeChecked }: HeaderProps*/) {
	const location = useLocation();
	const navigate = useNavigate();

	const { handleContextRelaxModeChecked } = useContext(globalContext);
	const [relaxModeChecked, setRelaxModeChecked] = useState(false);

	const handleSetRelaxModeChecked: InputHandler = (event) => {
		setRelaxModeChecked(event.target.checked);

		if (event.target.checked) {
			navigate('/solar-system', {
				state: { previousRoutePathname: location.pathname },
			});
		}

		handleContextRelaxModeChecked(event);
	};

	return (
		<>
			<div className="Header">
				<h1 className="header-title">{HEADER_TITLE}</h1>
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
			</div>
		</>
	);
}

export default Header;
