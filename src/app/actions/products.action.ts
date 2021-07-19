import {createAction, props} from '@ngrx/store';
import CartProduct from '../cart-product';

export const addProduct = createAction('[Products Component] add', props<CartProduct>());
export const resetProducts = createAction('[Products Component] reset')