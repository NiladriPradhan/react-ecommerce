import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    cartItems: [],
    _cartHash: {},
    // get cartHash() {
    //     return this._cartHash;
    // },
    // set cartHash(value) {
    //     this._cartHash = value;
    // },
};

const CartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            console.log(payload)


            const existingProduct = state.cartItems.find((item) => (item.id) === (payload.id));
            if (existingProduct) {
                alert('This product is already in your cart!');
            } else {
                const temp = [...state.cartItems]
                temp.push(payload);
                state.cartItems = temp;
                alert('Product added to cart!');
            }
            // state.cartHash = {
            //     ...state.cartHash,
            //     [payload?.id]: true,
            // };

            let temp2 = { ...state._cartHash }
            temp2 = {
                ...temp2, [payload.id]: true,
            }
            state._cartHash = temp2;

        },
        RemoveFromCart: (state, { payload }) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

            let temp3 = { ...state._cartHash }
            temp3 = {
                [payload.id]: false,
            }
            state._cartHash = temp3;
        }


    }
});

export const { addToCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;