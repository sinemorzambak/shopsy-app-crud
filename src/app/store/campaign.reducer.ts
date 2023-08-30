import { createReducer, on } from '@ngrx/store';
import { setCampaignInfo } from '../store/campaign.actions';

export const initialState = {
  campaignState: {
    campaignInfo: null
  }
};

export const campaignReducer = createReducer(
  initialState,
  on(setCampaignInfo, (state, { campaignInfo }) => {
    return { ...state, campaignState: { ...state.campaignState, campaignInfo } };
  })
);
