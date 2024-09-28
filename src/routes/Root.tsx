import './Root.scss';

import { DEFAULT_MUI_THEME } from '../constants.ts';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../components/Header/Header.tsx';
import Main from '../components/Main/Main.tsx';
import Footer from '../components/Footer/Footer.tsx';

const muiTheme = createTheme(DEFAULT_MUI_THEME);

function Root() {
	// const [stateRelaxModeChecked, setStateRelaxModeChecked] = useState(globalData.stateRelaxModeChecked);

	return (
		<>
			<ThemeProvider theme={muiTheme}>
				<Header
				// stateRelaxModeChecked={stateRelaxModeChecked}
				// setStateRelaxModeChecked={handleChangeStateRelaxMode}
				/>
				<Main />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default Root;
