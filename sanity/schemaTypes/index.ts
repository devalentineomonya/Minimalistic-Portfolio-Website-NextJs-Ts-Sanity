import { type SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectTypes";
import { productType } from "./productTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, productType],
};
