import {
  ApiInterface,
  ApiResponse,
  BodiesArray,
} from "../src/interfaces-and-types";
import {
  OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER,
  QUERY_FIELDS_IMPACT_ORDER,
  QUERY_FIELDS_TO_NORMALIZE,
  QUERY_OPERATORS_IMPACT_VALUES,
  API_BASE_PATH,
} from "../src/constants";

import { RuleGroupType, RuleType } from "react-querybuilder";

class Api implements ApiInterface {
  private readonly API_BASE_PATH;
  private readonly OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER;
  private readonly QUERY_FIELDS_IMPACT_ORDER;
  private readonly QUERY_FIELDS_TO_NORMALIZE;
  private readonly QUERY_OPERATORS_IMPACT_VALUES;

  constructor() {
    this.API_BASE_PATH = API_BASE_PATH;
    this.OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER =
      OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER;
    this.QUERY_FIELDS_IMPACT_ORDER = QUERY_FIELDS_IMPACT_ORDER;
    this.QUERY_FIELDS_TO_NORMALIZE = QUERY_FIELDS_TO_NORMALIZE;
    this.QUERY_OPERATORS_IMPACT_VALUES = QUERY_OPERATORS_IMPACT_VALUES;
  }

  public buildQuery(query: RuleGroupType) {
    let queryPath = this.API_BASE_PATH + "?";
    let lastOrderParameter = "semimajorAxis";
    const queryRules = query.rules as RuleType[];

    queryRules.forEach((rule, index, array) => {
      const field: string = rule.field;
      const operator =
        this.OPERATOR_NAME_TO_LABEL_OR_API_VALUE_MAPPER[rule.operator].apiValue;

      const fieldImpactOrderIndex =
        this.QUERY_FIELDS_IMPACT_ORDER.indexOf(field);
      const isImpactOrderField = fieldImpactOrderIndex === -1 ? false : true;

      if (isImpactOrderField) {
        if (operator === "eq" && rule.value === "Asteroid") {
          lastOrderParameter = "meanRadius";
        }
      }

      const operatorImpactIndex = this.QUERY_OPERATORS_IMPACT_VALUES.indexOf(
        rule.operator,
      );
      const isImpactValue = operatorImpactIndex === -1 ? false : true;

      const fieldToNormalizeIndex =
        this.QUERY_FIELDS_TO_NORMALIZE.indexOf(field);
      const isFieldValueShouldBeNormalized =
        fieldToNormalizeIndex === -1 ? false : true;

      let value: string;

      if (isImpactValue) {
        value = this.setValueDependsOnOperator(rule.operator);
      } else {
        value = (
          isFieldValueShouldBeNormalized
            ? this.normalizeValue(field, rule.value as string)
            : rule.value
        ) as string;
      }

      queryPath = `${queryPath}filter[]=${field},${operator},${value}${index !== array.length - 1 ? "&" : ""}`;
    });

    queryPath = this.addCombinator(queryPath, query.combinator);
    queryPath = this.addOrder(queryPath, lastOrderParameter);

    return queryPath;
  }

  private setValueDependsOnOperator(operator: string) {
    switch (operator) {
      case "null":
      case "notNull":
        return "";
        break;

      default:
        return "";
    }
  }

  private normalizeValue(field: string, value: string): string {
    switch (field) {
      case "discoveryDate": {
        const splittedValue = value.split(",");
        const normalizedSplittedValue = splittedValue.map((oneValue) => {
          return oneValue.split("-").reverse().join("/");
        });
        return normalizedSplittedValue.join(",");
        break;
      }
      default:
        return value;
    }
  }

  private addCombinator(queryPath: string, combinator: string) {
    switch (combinator) {
      case "and":
        return queryPath;
        break;

      case "or":
        return `${queryPath}&satisfy=any`;
        break;

      default:
        return queryPath;
    }
  }

  private addOrder(queryPath: string, lastOrderParameter: string) {
    switch (lastOrderParameter) {
      case "semimajorAxis":
        return `${queryPath}&order=${lastOrderParameter},asc`;
        break;

      case "meanRadius":
        return `${queryPath}&order=${lastOrderParameter},desc`;
        break;

      default:
        return queryPath;
    }
  }

  public async sendRequest(builtQuery: string) {
    const result: ApiResponse = {
      ok: false,
      status: 0,
      statusText: "",
    };

    const response: Response = await fetch(builtQuery, { method: "GET" });

    result.ok = response.ok;
    result.status = response.status;
    result.statusText = response.statusText;

    if (response.ok) {
      const parsedResponse = (await response.json()) as { bodies: BodiesArray };
      result.bodies = parsedResponse.bodies;
    }

    return result;
  }
}

const API = new Api();

export default API;
