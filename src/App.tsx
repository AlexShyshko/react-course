import './App.scss';

import { useState } from 'react';
import { InputHandler } from './interfaces-and-types.ts';

import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
	const [stateRelaxModeChecked, setStateRelaxModeChecked] = useState(false);

	const handleChangeStateRelaxMode: InputHandler = (event) => {
		setStateRelaxModeChecked(event.target.checked);
	};

	return (
		<>
			<Header
				checked={stateRelaxModeChecked}
				handleChange={handleChangeStateRelaxMode}
			/>
			<Main checked={stateRelaxModeChecked} />
			<Footer />
		</>
	);
}

export default App;
