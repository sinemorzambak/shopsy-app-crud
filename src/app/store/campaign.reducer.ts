import { createReducer, on } from '@ngrx/store';
import { createCampaign } from './campaign.actions';
import { AppState } from './app.state'; 

export const initialState: AppState = {
  campaignState: {
    campaignInfo: null
  }
};

export const campaignReducer = createReducer(
  initialState,
  on(createCampaign, (state, { campaignInfo }) => {
    return { ...state, campaignState: { campaignInfo } };
  })
);
