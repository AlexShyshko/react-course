import { GlobalContext, OperatorNameMapper } from './interfaces-and-types';
import customStyles from './_variables.module.scss';
import { Field, FlexibleOptionList, Operator } from 'react-querybuilder';

const HEADER_TITLE = 'The Solar System catalog';
const SPACE_RELAX_MODE_LABEL = 'Space relax mode';
//const SOLAR_SYSTEM_BODY_TYPE_LABEL = 'The Solar System body type';

const DEFAULT_GLOBAL_CONTEXT: GlobalContext = {
	contextRelaxModeChecked: false,
	handleContextRelaxModeChecked: () => {
		// declared in global-context.tsx
	},
	apiResponse: {
		ok: false,
		status: 0,
		statusText: '',
	},
	handleApiResponse: () => {
		// declared in global-context.tsx
	},
};

const DEFAULT_MUI_THEME = {
	palette: {
		primary: {
			main: customStyles.colorPrimary,
		},
		secondary: {
			main: customStyles.colorSecondary,
		},
		text: {
			primary: customStyles.fontColorPrimary,
			secondary: customStyles.fontColorSecondary,
		},
		background: {
			//default: customStyles.colorPrimary,
			paper: customStyles.colorSecondary,
		},
	},
	typography: {
		allVariants: {
			fontFamily: customStyles.fontFamilyMain,
		},
	},
};

const DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES = ['='];
const DEFAULT_BOTH_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES = [
	...DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	'!=',
];
const DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_TEXT_NAMES = [
	'contains',
	'doesNotContain',
	'beginsWith',
	'doesNotBeginWith',
	'endsWith',
	'doesNotEndWith',
	...DEFAULT_BOTH_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	'null',
	'notNull',
];
const DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_NUMBER_NAMES = [
	...DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_TEXT_NAMES,
	'<',
	'<=',
	'>=',
	'>',
	'between',
	'notBetween',
];
const OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER: OperatorNameMapper = {
	contains: { label: 'Like', apiValue: 'cs' },
	doesNotContain: { label: 'Not like', apiValue: 'ncs' },
	beginsWith: { label: 'Starts with', apiValue: 'sw' },
	doesNotBeginWith: { label: "Does't start with", apiValue: 'nsw' },
	endsWith: { label: 'Ends with', apiValue: 'ew' },
	doesNotEndWith: { label: "Does't end with", apiValue: 'new' },
	'=': { label: 'Equals', apiValue: 'eq' },
	'!=': { label: "Does't equal", apiValue: 'neq' },
	null: { label: 'Is null', apiValue: 'eq' }, // can be tricky
	notNull: { label: 'Is not null', apiValue: 'neq' }, // can be tricky
	'<': { label: 'Less than', apiValue: 'lt' },
	'<=': { label: 'Less or equal than', apiValue: 'le' },
	'>': { label: 'Greater than', apiValue: 'gt' },
	'>=': { label: 'Greater or equal than', apiValue: 'ge' },
	between: { label: 'Between', apiValue: 'bt' },
	notBetween: { label: 'Not between', apiValue: 'nbt' },
	// Not supported
	in: { label: 'One of', apiValue: 'notsupported' },
	notIn: { label: 'Not one of', apiValue: 'notsupported' },
};

const DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT: FlexibleOptionList<Operator> = [
	// VARIANT WITH LABEL
	// {
	// 	label: 'True Or False',
	// 	options: [
	// 		{
	// 			label: 'True',
	// 			name: 'true',
	// 			value: 'true',
	// 		},
	// 		{
	// 			label: 'False',
	// 			name: 'false',
	// 			value: 'false',
	// 		},
	// 	],

	// },
	{
		label: 'True',
		name: 'true',
		value: 'true',
	},
	{
		label: 'False',
		name: 'false',
		value: 'false',
	},
];

const DEFAULT_QUERY_FIELDS: Field[] = [
	{
		name: 'id',
		label: 'Id of body in the API',
		inputType: 'text', //'text', 'number', or 'date'
	},
	{
		name: 'name',
		label: 'Body name (in french)',
		inputType: 'text',
	},
	{
		name: 'englishName',
		label: 'English name',
		inputType: 'text',
	},
	{
		name: 'isPlanet',
		label: 'Is it a planet?',
		inputType: 'text',
		valueEditorType: 'select',
		//defaultValue: DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT[0].options[0].name,
		defaultValue: DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT[0].name,
	},
	{
		name: 'semimajorAxis',
		label: 'Semimajor Axis of the body in kilometers',
		inputType: 'number',
	},
	{
		name: 'perihelion',
		label: 'Perihelion in kilometers',
		inputType: 'number',
	},
	{
		name: 'aphelion',
		label: 'Aphelion in kilometers',
		inputType: 'number',
	},
	{
		name: 'eccentricity',
		label: 'Orbital eccentricity',
		inputType: 'number',
	},
	{
		name: 'inclination',
		label: 'Orbital inclination in degrees',
		inputType: 'number',
	},
	{
		name: 'massValue',
		label: 'Mass value (MV) [Boby mass in kg = MV * 10^ME]',
		inputType: 'number',
	},
	{
		name: 'massExponent',
		label: 'Mass exponent (ME) [Boby mass in kg = MV * 10^ME]',
		inputType: 'number',
	},
	{
		name: 'volValue',
		label: 'Volume value (VV) [Body volume in km3 = VV * 10^VE]',
		inputType: 'number',
	},
	{
		name: 'volExponent',
		label: 'Volume exponent (VE) [Body volume in km3 = VV * 10^VE]',
		inputType: 'number',
	},
	{
		name: 'density',
		label: 'Body density in g/cm3',
		inputType: 'number',
	},
	{
		name: 'gravity',
		label: 'Surface gravity in m/s2',
		inputType: 'number',
	},
	{
		name: 'escape',
		label: 'Escape speed in m/s',
		inputType: 'number',
	},
	{
		name: 'meanRadius',
		label: 'Mean radius in kilometers',
		inputType: 'number',
	},
	{
		name: 'equaRadius',
		label: 'Equatorial radius in kilometers',
		inputType: 'number',
	},
	{
		name: 'polarRadius',
		label: 'Polar radius in kilometers',
		inputType: 'number',
	},
	{
		name: 'flattening',
		label: 'Flattening',
		inputType: 'number',
	},
	{
		name: 'dimension',
		label: 'Body dimensions in 3 axes X, Y, Z (can be divided with "×", "x", " × ", " x ")',
		inputType: 'text',
		defaultValue: 'X × Y × Z',
	},
	{
		name: 'sideralOrbit',
		label: 'Sideral orbital time for body around another one (the Sun or a planet) in earth day',
		inputType: 'number',
	},
	{
		name: 'sideralRotation',
		label: 'Sideral rotation, necessary time to turn around itself, in hour',
		inputType: 'number',
	},
	{
		name: 'discoveredBy',
		label: 'Discovery name',
		inputType: 'text',
	},
	{
		name: 'discoveryDate',
		label: 'Discovery date',
		inputType: 'date',
		//format: 'dd/MM/yyyy',
	},
	{
		name: 'alternativeName',
		label: 'Temporary name',
		inputType: 'text',
	},
	{
		name: 'axialTilt',
		label: 'Axial tilt',
		inputType: 'number',
	},
	{
		name: 'avgTemp',
		label: 'Mean temperature in K',
		inputType: 'number',
	},
	{
		name: 'mainAnomaly',
		label: 'Mean anomaly in degree',
		inputType: 'number',
	},
	{
		name: 'argPeriapsis',
		label: 'Argument of perihelion in degree',
		inputType: 'number',
	},
	{
		name: 'longAscNode',
		label: 'Longitude of ascending node in degree',
		inputType: 'number',
	},
	{
		name: 'bodyType',
		label: 'The body type',
		inputType: 'text',
		valueEditorType: 'select',
	},
];

const QUERY_FIELDS_IMPACT_ORDER = ['bodyType'];

const QUERY_FIELDS_TO_NORMALIZE = ['discoveryDate'];

const QUERY_OPERATORS_IMPACT_VALUES = ['null', 'notNull'];

const API_BASE_PATH = 'https://api.le-systeme-solaire.net/rest/bodies/';

export {
	HEADER_TITLE,
	SPACE_RELAX_MODE_LABEL,
	//SOLAR_SYSTEM_BODY_TYPE_LABEL,
	DEFAULT_GLOBAL_CONTEXT,
	DEFAULT_MUI_THEME,
	DEFAULT_QUERY_FIELDS,
	DEFAULT_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	DEFAULT_BOTH_QUERY_OPERATORS_FOR_BOOLEAN_EQUALIZATION_NAMES,
	DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_TEXT_NAMES,
	DEFAULT_QUERY_OPERATORS_FOR_FIELD_TYPE_NUMBER_NAMES,
	OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER,
	DEFAULT_QUERY_VALUES_FOR_BOOLEAN_SELECT,
	QUERY_FIELDS_IMPACT_ORDER,
	QUERY_FIELDS_TO_NORMALIZE,
	QUERY_OPERATORS_IMPACT_VALUES,
	API_BASE_PATH,
};
