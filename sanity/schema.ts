import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import { reflectionType } from './schemaTypes/reflection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    reflectionType,
    author,
    category,
    blockContent,
  ],
}