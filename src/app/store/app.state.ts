import { CampaignState } from './campaign.state';
import { KeywordState } from './keyword.state';


export const initialState = {
  campaignState: {
    campaignInfo: null,
    createdCampaign: null,
  }
};

export interface AppState {
  campaignState: CampaignState; 
}

export interface AppState {
  keywordState: KeywordState;
}
