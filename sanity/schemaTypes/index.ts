import { type SchemaTypeDefinition } from 'sanity'
import {staticContentType} from "./staticContent"
import { customElement } from './customElement';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [staticContentType, customElement],
}
