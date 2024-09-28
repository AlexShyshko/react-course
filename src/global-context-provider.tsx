import React, { useState } from 'react';
import { InputHandler, ApiResponseHandler } from './interfaces-and-types';
import { DEFAULT_GLOBAL_CONTEXT } from './constants';
import globalContext from './global-context';

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	const [contextRelaxModeChecked, setContextRelaxModeChecked] = useState(
		DEFAULT_GLOBAL_CONTEXT.contextRelaxModeChecked,
	);
	const handleContextRelaxModeChecked: InputHandler = (event) => {
		setContextRelaxModeChecked(event.target.checked);
	};

	const [apiResponse, setApiResponse] = useState(
		DEFAULT_GLOBAL_CONTEXT.apiResponse,
	);
	const handleApiResponse: ApiResponseHandler = (response) => {
		setApiResponse(response);
	};

	return (
		<globalContext.Provider
			value={{
				contextRelaxModeChecked,
				handleContextRelaxModeChecked,
				apiResponse,
				handleApiResponse,
			}}
		>
			{children}
		</globalContext.Provider>
	);
};

export { GlobalProvider };
