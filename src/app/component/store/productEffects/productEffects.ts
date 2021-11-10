import { mergeMap, map, catchError } from 'rxjs/operators';
import { ActionTypes } from '../productActions/productActions';
import { ApiService } from '../../../service/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoadItems),
      mergeMap(() =>
        this.apiService.getProduct().pipe(
          map((products) => ({
            type: ActionTypes.LoadSuccess,
            payload: products,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
