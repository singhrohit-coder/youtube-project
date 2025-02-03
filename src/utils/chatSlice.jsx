import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice ({
    name:"chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
    // restrict length to 10 after 10 it pop 1 message.        
            state.messages.splice(50, 1)
            state.messages.unshift(action.payload); // unShift use to push element at first in js
        },
    },
});

export const { addMessage, } = chatSlice.actions
export default chatSlice.reducer;