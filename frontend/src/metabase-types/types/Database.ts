import { ISO8601Time } from ".";
import { DataAccessPermission } from "./Permissions";
import { Table } from "./Table";

export type DatabaseId = number;

export type DatabaseType = string; // "h2" | "postgres" | etc

export type DatabaseFeature =
  | "basic-aggregations"
  | "standard-deviation-aggregations"
  | "expression-aggregations"
  | "foreign-keys"
  | "native-parameters"
  | "nested-queries"
  | "expressions"
  | "case-sensitivity-string-filter-options"
  | "binning";

export type DatabaseDetails = {
  [key: string]: any;
};

export type DatabaseEngine = string;

export type Database = {
  id: DatabaseId;
  name: string;
  description?: string;

  tables: Table[];

  details: DatabaseDetails;
  engine: DatabaseType;
  features: DatabaseFeature[];
  is_full_sync: boolean;
  is_sample: boolean;
  native_permissions: DataAccessPermission;
  data_model_permission?: DataAccessPermission;

  caveats?: string;
  points_of_interest?: string;

  created_at: ISO8601Time;
  updated_at: ISO8601Time;
};
