import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
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
                state.quantity -= action.payload.quantity;
                state.amount -= action.payload.unit_price * action.payload.quantity;
                state.amount = parseFloat(state.amount.toFixed(2));
                if (isNaN(state.quantity)){
                    state.quantity = 0;
                }
                if (isNaN(state.amount)){
                    state.amount = 0.0;
                }
                state.items.splice(itemIndex, 1);
            }
        },
    }
});

export const {addToCart, incrementCartItemNumber, decrementCartItemNumber, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;