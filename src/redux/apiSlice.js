import { createSlice } from "@reduxjs/toolkit";

// setting initial state for the slice file
const initialState = ({
    value: "",
});


//building out the slice file

export const apiSlice = createSlice({
    name: 'apiKey',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.apiKey = action.payload;
        },
    },
});
