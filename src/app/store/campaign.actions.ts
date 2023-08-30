import { createAction, props } from '@ngrx/store';

export const createCampaign = createAction(
  '[Campaign] Set Campaign Info',
  props<{ campaignInfo: any }>()
);
export const setCampaignInfo = createAction(
  '[Campaign] Set Campaign Info',
  props<{ campaignInfo: any }>()
);