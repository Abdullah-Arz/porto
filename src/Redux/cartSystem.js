import { createSlice } from "@reduxjs/toolkit";
import { Card } from "react-bootstrap";

const initialState = {
    cart:[],
    quantity:0,
    cartItems:0,
    eth_count:null,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    price_range: '0',
    maxprice_range: '1000',
    counter:0,
    show:"4"
}

const cartSystem =  createSlice({
    name : 'cart',
    initialState,
    reducers:{

        AddCart:(state,action) => 
        
        { 

            const itemIndex = state.cart.findIndex( 
                item => item.id === action.payload.id
            );
            
            
                // if(itemIndex >= 0){
                //         state.cart[itemIndex].cartQuantity += 1
                //         state.cartTotalAmount += parseInt(action.payload.price);
                // }else{
                //     const tempProduct = { ...action.payload, cartQuantity:1 };
                //     state.cart.push(tempProduct);
                //     state.cartTotalAmount += parseInt(action.payload.price);
                // }
            
                if(state.counter >= 2){
            if(itemIndex >= 0){
                state.cart[itemIndex].cartQuantity += state.counter
                state.cartTotalAmount += parseInt(action.payload.price*state.counter);
            }else{
                const tempProduct = { ...action.payload, cartQuantity: state.counter };
                state.cart.push(tempProduct);
                state.cartTotalAmount += parseInt(action.payload.price*state.counter);
            }
            }else{
            if(itemIndex >= 0){
                state.cart[itemIndex].cartQuantity += 1
                state.cartTotalAmount += parseInt(action.payload.price);
            }else{
                const tempProduct = { ...action.payload, cartQuantity:1 };
                state.cart.push(tempProduct);
                state.cartTotalAmount += parseInt(action.payload.price);
            }
            }

        },

        ClearCart:(state) => {
            // alert('clear Cart')
            state.cart = []
        },

        RemoveCart:(state,action) => {
            return{
                ...state,    
                cart:state.cart.filter((card)=> {
                return card.id !== action.payload
            })
        }
    },

        AddCount:(state,action) => 
        {
            state.quantity += action.payload
        },

        SubCount:(state,action) => 
        {
            state.quantity -= action.payload
        },

        AddCounter:(state,action) => 
        {
            state.counter = action.payload
        },

        SubCounter:(state,action) => 
        {
            state.counter = action.payload
        },
        
        ClearCount:(state) => {
            state.quantity = 0
        },
            

        EthCount_Add:(state,action) => {
            state.eth_count += action.payload 
        },

        EthCount_Minus:(state,action) => {
            state.eth_count -= action.payload 
        },

        EthCount_Clear:(state,action) => {
            state.eth_count = null 
        },

        TotalAmount:(state,action)=>{
            // state.cartTotalAmount += action.payload
        },

        ClearTotalAmount:(state,action)=>{
            state.cartTotalAmount = null
        },

        SubTotalAmount:(state,action)=>{
            state.cartTotalAmount -= action.payload
        },

        PriceRange:(state, action)=>{
            state.price_range = action.payload
        },

        MaxPriceRange:(state, action)=>{
            state.maxprice_range = action.payload
        },

        ShowCart:(state, action)=>{
            state.show = action.payload
        }

    }
})

export const {AddCart, ClearCart ,RemoveCart, PriceRange, MaxPriceRange, ShowCart, AddCount, AddCounter, SubCounter, TotalAmount,SubTotalAmount, ClearTotalAmount, SubCount, ClearCount, EthCount_Add, EthCount_Minus, EthCount_Clear} = cartSystem.actions;

export default cartSystem.reducer;