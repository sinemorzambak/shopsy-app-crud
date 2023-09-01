// keyword.actions.ts

import { createAction, props } from '@ngrx/store';

export const addKeyword = createAction(
  '[Keyword] Add Keyword',
  props<{ keyword: any }>()
);

export const removeKeyword = createAction(
  '[Keyword] Add Keyword',
  props<{ keyword: any }>()
);
