
import { createReducer, on } from '@ngrx/store';
import { addKeyword, removeKeyword } from './keyword.actions';

export interface KeywordState {
  keywords: any[];
}

export const initialKeywordState: KeywordState = {
  keywords: []
};

export const keywordReducer = createReducer(
  initialKeywordState,
  on(addKeyword, (state, { keyword }) => ({
    ...state,
    keywords: [...state.keywords, keyword]
  })),
  on(removeKeyword, (state, { keyword }) => ({
    ...state,
    keywords: state.keywords.filter(k => k !== keyword)
  }))
);
