import './Header.scss';

import { HeaderProps } from '../../interfaces-and-types';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const HEADER_TITLE = 'The Solar System catalog';
const SPACE_RELAX_MODE_LABEL = 'Space relax mode';

function Header({ checked, handleChange }: HeaderProps) {

	return (
		<>
			<div className="Header">
				<h1 className="header-title">{HEADER_TITLE}</h1>
				<FormGroup className="space-relax-mode-switch-group">
					<FormControlLabel
						control={
							<Switch
								color="warning"
								checked={checked}
								onChange={handleChange}
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
