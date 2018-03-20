import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shoping-list/store/shoping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shopingListReducer,
  auth: fromAuth.authReducer
};
