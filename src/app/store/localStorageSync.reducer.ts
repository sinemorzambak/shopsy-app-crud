import { ActionReducer, INIT } from '@ngrx/store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === INIT) {
      const storedState = localStorage.getItem('campaignState');
      console.log('Stored state from localStorage:', storedState);

      if (storedState) {
        const campaignState = JSON.parse(storedState);

        if (state && state.campaignState) {
          campaignState.campaignState = {
            ...state.campaignState,
            ...campaignState.campaignState,
          };
        }

        return campaignState;
      }
    }

    const nextState = reducer(state, action);

    localStorage.setItem('campaignState', JSON.stringify(nextState));
    return nextState;
  };
}
