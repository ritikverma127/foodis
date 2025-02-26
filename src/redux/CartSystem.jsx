import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[],
    quantity:0
}

const CartSystem=createSlice({
    name:'user',
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            state.carts.push(action.payload)
        }
    }
})

export const { AddCart } = CartSystem.actions;
export default CartSystem.reducer;
