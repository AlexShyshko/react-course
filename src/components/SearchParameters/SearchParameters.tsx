import './SearchParameters.scss';

//import { useState, useContext } from 'react';

import SearchParametersContainer from '../SearchParametersContainer/SearchParametersContainer';

function SearchParameters() {
	// const [bodyType, setBodyType] = useState('');

	// const handleBodyTypeChange = (event: SelectChangeEvent) => {
	// 	setBodyType(event.target.value);
	// };

	return (
		<>
			<div className="SearchParameters">
				<h3 className="SearchParametersHeader">Search Parameters</h3>
				<SearchParametersContainer />
			</div>
		</>
	);
}

export default SearchParameters;
