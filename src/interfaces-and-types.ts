import React from 'react';
import { RuleGroupType } from 'react-querybuilder';
import { To } from '../node_modules/@remix-run/router/dist/history.ts';
// TYPES

type InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
type ApiResponseHandler = (response: ApiResponse) => void;
type BodiesArray = (
	| ResponseBodyStar
	| ResponseBodyMoon
	| ResponseBodyAsteroid
	| ResponseBodyPlanet
	| ResponseBodyDwarfPlanet
	| ResponseBodyComet
)[];

// INTERFACES

// Component props
interface HeaderProps {
	stateRelaxModeChecked: boolean;
	setStateRelaxModeChecked: InputHandler;
}

interface MainProps {
	checked: boolean;
}

// Router
interface RouteError {
	data: string;
	error: {
		columnNumber?: number;
		fileName?: string;
		lineNumber?: number;
		message: string;
		stack: string;
	};
	internal: boolean;
	status: number;
	statusText: string;
}

// Global context
interface GlobalContext {
	contextRelaxModeChecked: boolean;
	handleContextRelaxModeChecked: InputHandler;
	apiResponse: ApiResponse;
	handleApiResponse: ApiResponseHandler;
}

// Location
interface Location {
	hash: string;
	key: string;
	pathname: To;
	search: string;
	state: {
		previousRoutePathname: To;
	};
}

// Query builder
interface OperatorValues {
	label: string;
	apiValue: string;
}
type OperatorNameMapper = Record<string, OperatorValues>;

// API class
interface ApiInterface {
	// API_BASE_PATH: string;
	// OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER: OperatorNameMapper;
	// QUERY_FIELDS_IMPACT_ORDER: string[];
	// QUERY_FIELDS_TO_NORMALIZE: string[];
	// QUERY_OPERATORS_IMPACT_VALUES: string[];

	buildQuery: (query: RuleGroupType) => string;
	// setValueDependsOnOperator: (operator: string) => string;
	// normalizeValue: (field: string, value: string) => string;
	// addCombinator: (queryPath: string, combinator: string) => string;
	// addOrder: (queryPath: string, lastOrderParameter: string) => string;
	sendRequest: (builtQuery: string) => Promise<ApiResponse>;
}

// API responses
interface MoonsProperty {
	moon: string; // moon name NOT ID
	rel: string; // in  URL is ID
}

interface MassProperty {
	massValue: number;
	massExponent: number;
}

interface VolumeProperty {
	volValue: number;
	volExponent: number;
}

interface AroundPlanetProperty {
	planet: string; // ID
	rel: string;
}

interface ApiResponse {
	ok: boolean;
	status: number;
	statusText: string;
	bodies?: BodiesArray;
}

interface ResponseBodyCommon {
	id: string;
	name: string;
	englishName: string;
	isPlanet: boolean;
	moons: MoonsProperty[]; //can be null
	semimajorAxis: number;
	perihelion: number;
	aphelion: number;
	eccentricity: number;
	inclination: number;
	mass: MassProperty[]; //can be null
	vol: VolumeProperty[]; //can be null
	density: number;
	gravity: number;
	escape: number;
	meanRadius: number;
	equaRadius: number;
	polarRadius: number;
	flattening: number;
	dimension: string;
	sideralOrbit: number;
	sideralRotation: number;
	aroundPlanet: AroundPlanetProperty[]; //can be null
	discoveredBy: string;
	discoveryDate: string;
	alternativeName: string;
	axialTilt: number;
	avgTemp: number;
	mainAnomaly: number;
	argPeriapsis: number;
	longAscNode: number;
	bodyType: string;
	rel: string;
}

interface ResponseBodyStar
	extends Omit<ResponseBodyCommon, 'moons' | 'aroundPlanet'> {
	moons: MoonsProperty[] | null;
	aroundPlanet: AroundPlanetProperty[] | null;
}

interface ResponseBodyMoon
	extends Omit<ResponseBodyCommon, 'moons' | 'mass' | 'vol'> {
	moons: MoonsProperty[] | null;
	mass: MassProperty[] | null;
	vol: VolumeProperty[] | null;
}

interface ResponseBodyAsteroid
	extends Omit<
		ResponseBodyCommon,
		'moons' | 'mass' | 'vol' | 'aroundPlanet'
	> {
	moons: MoonsProperty[] | null;
	mass: MassProperty[] | null;
	vol: VolumeProperty[] | null;
	aroundPlanet: AroundPlanetProperty[] | null;
}

interface ResponseBodyPlanet
	extends Omit<ResponseBodyCommon, 'moons' | 'aroundPlanet'> {
	moons: MoonsProperty[] | null;
	aroundPlanet: AroundPlanetProperty[] | null;
}

interface ResponseBodyDwarfPlanet
	extends Omit<ResponseBodyCommon, 'moons' | 'aroundPlanet'> {
	moons: MoonsProperty[] | null;
	aroundPlanet: AroundPlanetProperty[] | null;
}

interface ResponseBodyComet
	extends Omit<
		ResponseBodyCommon,
		'moons' | 'mass' | 'vol' | 'aroundPlanet'
	> {
	moons: MoonsProperty[] | null;
	mass: MassProperty[] | null;
	vol: VolumeProperty[] | null;
	aroundPlanet: AroundPlanetProperty[] | null;
}

// EXPORT TYPES
export type { InputHandler, ApiResponseHandler, BodiesArray };
// EXPORT INTERFACES
export type {
	HeaderProps,
	MainProps,
	RouteError,
	GlobalContext,
	Location,
	OperatorNameMapper,
	ApiInterface,
	ApiResponse,
	ResponseBodyCommon,
	ResponseBodyStar,
	ResponseBodyMoon,
	ResponseBodyAsteroid,
	ResponseBodyPlanet,
	ResponseBodyDwarfPlanet,
	ResponseBodyComet,
};
