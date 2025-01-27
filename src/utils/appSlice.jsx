import { createSlice } from "@reduxjs/toolkit";

// creating a slice
const appSlice = createSlice({
    name:"app",
    initialState: {
        isMenuOpen: true,
    },
    reducers : {
        // state is the 1st parameter, and it does not have any payload. SideBar Slice
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});


export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;