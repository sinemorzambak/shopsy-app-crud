import { ActionReducer, INIT } from '@ngrx/store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === INIT) {
      const storedState = localStorage.getItem('appState');
      if (storedState) {
        return JSON.parse(storedState);
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('appState', JSON.stringify(nextState));
    return nextState;
  };
}
