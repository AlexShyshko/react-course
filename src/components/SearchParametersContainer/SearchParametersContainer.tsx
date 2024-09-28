import './SearchParametersContainer.scss';

import globalContext from '../../global-context.tsx';
import { useState, useContext } from 'react';
import Search from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { QueryBuilderMaterial } from '@react-querybuilder/material';
import {
	defaultOperators,
	Field,
	QueryBuilder,
	RuleGroupType,
	FullField,
	FlexibleOptionList,
	Option,
	BaseOption,
} from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

import {
	DEFAULT_QUERY_FIELDS,
	DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	DEFAULT_BOTH_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_TEXT_NAMES,
	DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_NUMBER_NAMES,
	OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER,
	DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT,
} from '../../constants';
import KNOWN_PHOTOS_ADDRESSES from '../../../api/known-photos-addresses';
import API from '../../../api/api';

const fields: Field[] = DEFAULT_QUERY_FIELDS;

// const initialQuery: RuleGroupType = {
// 	combinator: 'and',
// 	rules: [
// 		{
// 			field: 'bodyType',
// 			operator: '=',
// 			value: 'Planet',
// 		},
// 	],
// };

const initialQuery: RuleGroupType = {
	combinator: 'and',
	rules: [
		{
			field: 'bodyType',
			operator: '=',
			value: 'Planet',
		},
		{
			field: 'discoveryDate',
			operator: 'between',
			valueSource: 'value',
			value: '1781-03-13,1846-09-23',
		},
		{
			field: 'flattening',
			operator: 'between',
			valueSource: 'value',
			value: '0.01,1',
		},
		{
			field: 'englishName',
			operator: 'notNull',
			valueSource: 'value',
			value: '',
		},
		{
			field: 'massValue',
			operator: '>',
			valueSource: 'value',
			value: '0',
		},
	],
};

function getOperators(fieldName: string, { fieldData }: { fieldData: Field }) {
	// Exclude incompatible operators
	const filtered = [
		...defaultOperators.filter((operator) => {
			let operatorNames;
			switch (fieldData.inputType) {
				case 'text':
					if (fieldData.valueEditorType === 'select') {
						if (fieldName === 'isPlanet') {
							operatorNames =
								DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES;
						} else if (fieldName === 'bodyType') {
							operatorNames =
								DEFAULT_BOTH_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES;
						} else {
							operatorNames =
								DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES;
						}
					} else {
						operatorNames =
							DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_TEXT_NAMES;
					}
					break;
				case 'number':
					operatorNames =
						DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_NUMBER_NAMES;
					break;
				case 'date':
					operatorNames =
						DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_NUMBER_NAMES;
					break;
				default:
					operatorNames =
						DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES;
			}
			return operatorNames.includes(operator.name);
		}),
	];
	// Sort operators
	const operatorKeys = Object.keys(
		OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER,
	);
	filtered.sort((a, b) => {
		const indexA = operatorKeys.indexOf(a.name);
		const indexB = operatorKeys.indexOf(b.name);
		return indexA - indexB;
	});
	// Rename labels
	const renamedLabels = filtered.map((operator) => {
		const renamedOption = {
			...operator,
			label: OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER[operator.name]
				.label,
		};
		return renamedOption;
	});
	return renamedLabels;
}

function getValues(
	fieldName: string,
	_operatorName: string,
	{
		fieldData,
	}: {
		fieldData: FullField<string, string, string, Option, Option>;
	},
) {
	let operatorValues;
	switch (fieldData.inputType) {
		case 'text':
			if (fieldName === 'isPlanet') {
				operatorValues = DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT;
			} else if (fieldName === 'bodyType') {
				const bodyTypes = Object.keys(
					KNOWN_PHOTOS_ADDRESSES.bodyType,
				).map((key) => {
					return {
						label: key,
						name: key,
						value: key,
					};
				});
				operatorValues = bodyTypes;
			}
			break;
	}
	return operatorValues as FlexibleOptionList<BaseOption>;
}

function SearchParametersContainer() {
	const { handleApiResponse } = useContext(globalContext);
	const [query, setQuery] = useState(initialQuery);

	const sendRequest = () => {
		const builtQuery = API.buildQuery(query);
		const response = API.sendRequest(builtQuery);
		response
			.then((response) => {
				handleApiResponse(response);
			})
			.catch((error: unknown) => {
				console.error('Error handling API response:', error);
			});
	};

	return (
		<>
			<div className="SearchParametersContainer">
				<QueryBuilderMaterial>
					<QueryBuilder
						fields={fields}
						getOperators={getOperators}
						getValues={getValues}
						query={query}
						onQueryChange={setQuery}
						controlElements={{
							addGroupAction: () => null,
						}}
					/>
				</QueryBuilderMaterial>
				<Button
					onClick={sendRequest}
					variant="contained"
					color="secondary"
					endIcon={<Search />}
				>
					Explore space
				</Button>
			</div>
		</>
	);
}

export default SearchParametersContainer;
