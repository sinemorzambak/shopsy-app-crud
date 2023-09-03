import { createReducer, on } from '@ngrx/store';
import { setCampaignInfo,createCampaign } from '../store/campaign.actions';

export const initialState = {
  campaignState: {
    campaignInfo: null,
    createdCampaign: null,
  }
};

export const campaignReducer = createReducer(
  initialState,
  on(setCampaignInfo, (state, { campaignInfo }) => {
    return { ...state, campaignState: { ...state.campaignState, campaignInfo } };
  }),
  on(createCampaign, (state, { createdCampaign }) => {
    return { ...state, campaignState: { ...state.campaignState, createdCampaign } };
  })
);
