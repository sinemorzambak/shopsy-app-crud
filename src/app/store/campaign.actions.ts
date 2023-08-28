import { createAction, props } from '@ngrx/store';

export const createCampaign = createAction(
  '[Campaign] Create Campaign',
  props<{ campaignInfo: any }>()
);
