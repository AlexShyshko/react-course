import "./MainContentContainer.scss";

import SearchParameter from '../SearchParameters/SearchParameters';
import SummaryResult from '../SummaryResult/SummaryResult';
import Diagram from '../Diagram/Diagram';
import DetailedReport from '../DetailedReport/DetailedReport';

function MainContentContainer() {
  return (
    <>
		<div className="MainContentContainer">
    <SearchParameter/>
    <SummaryResult/>
    <Diagram/>
    <DetailedReport/>
		</div>
    </>
  );
}

export default MainContentContainer;
