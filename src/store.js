import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./Redux/cartSystem";

const store = configureStore({
    reducer: {
        name:cartSystem
    }
})

export default store