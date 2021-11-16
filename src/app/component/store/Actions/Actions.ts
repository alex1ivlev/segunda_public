import { Action } from '@ngrx/store';
import { Item } from '../../../item.interface';

export enum ActionTypes {
  Add = '[Products] Add to cart',
  Remove = '[Products] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
}
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: Item) {}
}
export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;
  constructor(public payload: Item) {}
}
export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}
export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;
  constructor(public payload: Item[]) {}
}
export type Actions = AddToCart | RemoveFromCart | GetItems | LoadItems;
