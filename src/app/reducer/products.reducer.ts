import { isNgTemplate } from '@angular/compiler';
import {createReducer, on} from '@ngrx/store'
import {addProduct, resetProducts}  from '../actions/products.action';

export const initialState:Array<any> =  [];

const _productsReducer = createReducer(
    initialState,
    on(addProduct, (state, newValue )=> {
        let filteredState = state.filter((item) => item!==null && item.id !== newValue.id)
        return [...filteredState, newValue].sort((a, b) => a.id - b.id)
    }),
    on(resetProducts, state => [])
)

export function productsReducer(state: any, action: any){
    return _productsReducer(state, action)
}