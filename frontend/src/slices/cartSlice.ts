import {createSlice} from "@reduxjs/toolkit";
import {Item} from "../types/Item";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: <Item[]> [],
        quantity: 0,
        amount: 0.0,
    },
    reducers: {
        addToCart: (state, action) => {
            let allowIncrement = false;
            const itemIndex = state.items.findIndex(el => el.item_id === action.payload.item_id);
            if (itemIndex === -1) {
                const newItem=action.payload;
                newItem.numberInCart=1;
                state.items.push(newItem);
                allowIncrement = true;
            } else {
                if (state.items[itemIndex].numberInCart < state.items[itemIndex].units_in_stock){
                    state.items[itemIndex].numberInCart++;
                    allowIncrement = true;
                }
            }
            if (allowIncrement) {
                state.quantity += 1;
                state.amount += action.payload.unit_price;
                state.amount = parseFloat(state.amount.toFixed(2));
            }
        },
        incrementCartItemNumber: (state, action) => {
            const itemIndex = state.items.findIndex(el => el.item_id === action.payload.item_id);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].numberInCart < state.items[itemIndex].units_in_stock){
                    state.items[itemIndex].numberInCart++;
                    state.quantity += 1;
                    state.amount += action.payload.unit_price;
                    state.amount = parseFloat(state.amount.toFixed(2));
                }
            }
        },
        decrementCartItemNumber: (state, action) => {
            const itemIndex = state.items.findIndex(el => el.item_id === action.payload.item_id);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].numberInCart > 1){
                    state.items[itemIndex].numberInCart--;
                } else {
                    state.items.splice(itemIndex, 1);
                }
                state.quantity -= 1;
                state.amount -= action.payload.unit_price;
                state.amount = parseFloat(state.amount.toFixed(2));
            }
        },
        removeCartItem: (state, action) => {
            const itemIndex = state.items.findIndex(el => el.item_id === action.payload.item_id);
            if (itemIndex !== -1) {
                state.quantity -= action.payload.numberInCart;
                state.amount -= action.payload.unit_price * action.payload.numberInCart;
                state.amount = parseFloat(state.amount.toFixed(2));
                state.items.splice(itemIndex, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.quantity = 0;
            state.amount = 0.0;
        }
    }
});

export const {addToCart, incrementCartItemNumber, decrementCartItemNumber, removeCartItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;