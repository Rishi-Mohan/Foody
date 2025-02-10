import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // !!! mind here, s at the end of reducer
  // whereas in appStore we are using reducer without s; 
  reducers: {
    addItem: (state, action) => {
      // directly changing the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // here actually we are mutating the state to clear the cart.
      // someone may ask us why are we not doing state=[]
      // because it is only changing the value of the state locally but we want to make changes in global state
      state.items.length = 0;
      // one more way to acheive the same thing and that is to return the empty array
      // return {items : []};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;


/*
  createSlice is a function
  we have to design slice with certain labels
  a) name
  b) initialState
  c) reducers -> we define actions inside that treat it as a api kind of thing
                like adding an item, removing an item and clearing data


  we need to export two thing (reducer and actions)



  in the older version of redux it was strictly prohibited to directly mutate the state
  there we have to create a new state from the older state and returning the state is compulsory
  
  const newState = [...state]
  newState.items.push(action.payload)
  return newState

  But in the redux toolkit it is mandatory to mutate the state, we have to mutate the state
  */