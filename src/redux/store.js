import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"
import adminReducer from "./adminSlice"

const store = configureStore({
    reducer : {
        courses : courseReducer,
        admin : adminReducer,
    }
})

export default store