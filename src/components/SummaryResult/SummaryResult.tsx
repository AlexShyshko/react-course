import './SummaryResult.scss';

import globalContext from '../../global-context.tsx';
import { useContext, useEffect } from 'react';

import SummaryTable from '../SummaryTable/SummaryTable.tsx';

function SummaryResult() {
	const { apiResponse } = useContext(globalContext);

	useEffect(() => {
		console.log('apiResponse');
		console.log(apiResponse);
	}, [apiResponse]);

	return (
		<>
			<div className="SummaryResult">
				<h2 className="SummaryResultHeader">Summary Result</h2>
				<SummaryTable />
			</div>
		</>
	);
}

export default SummaryResult;
