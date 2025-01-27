import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
    // import slice in my store.
    reducer: {
        app: appSlice,
    },
});

export default store;