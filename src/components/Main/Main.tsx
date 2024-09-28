import './Main.scss';

//import { MainProps } from '../../interfaces-and-types';

import SearchParameter from '../SearchParameters/SearchParameters';
import SummaryResult from '../SummaryResult/SummaryResult';
import Diagram from '../Diagram/Diagram';
import DetailedReport from '../DetailedReport/DetailedReport';

function Main(/*{ checked }: MainProps*/) {
	return (
		<>
			<div className="Main">
				<SearchParameter />
				<SummaryResult />
				<Diagram />
				<DetailedReport />
			</div>
		</>
	);
}

export default Main;
