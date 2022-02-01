import { isNgTemplate } from '@angular/compiler';
import {createReducer, on} from '@ngrx/store'
import {updateProduct, resetProducts, addProduct}  from '../actions/products.action';

export const initialState:Array<any> =  [];

const _productsReducer = createReducer(
    initialState,
    on(updateProduct, (state, newValue )=> {
        let filteredState = state.filter((item) => item!==null && item.id !== newValue.id)
        return [...filteredState, newValue].sort((a, b) => a.id - b.id)
    }),
    on(resetProducts, () => []),
    // on(addProduct, (state, newValue)=>{
        // let filteredState = state.filter((item) => item!==null && item.id !== newValue.id)
        // let findSelectedValue = state.find((item) => item!==null && item.id === newValue.id);
        // let updatedQuantity = newValue['quantity']; 
        // if(findSelectedValue){
        //     updatedQuantity += findSelectedValue['quantity'] ;
        // }
        // return [...filteredState, {...newValue, quantity: updatedQuantity}].sort((a, b) => a.id - b.id)
    // })
)

export function productsReducer(state: any, action: any){
    return _productsReducer(state, action)
}