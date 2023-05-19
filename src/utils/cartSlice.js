import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        price:[],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        addPrice:(state, action)=>{
            state.price.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
            state.price.pop();
        },
        clearCart:(state)=>{
            state.items=[];
            state.price=[];
        },
    },
});

// export actions as named export and reducer as default
export const {addItem,addPrice,removeItem,clearCart}=cartSlice.actions;


export default cartSlice.reducer;