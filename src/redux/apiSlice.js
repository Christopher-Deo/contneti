import { createSlice } from "@reduxjs/toolkit";

// setting initial state for the slice file
const initialState = ({
    value: "",
});


//building out the slice file

 const apiSlice = createSlice({
    name: 'apiKey',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
 });

export const { actions, reducer } = apiSlice;
export default apiSlice;