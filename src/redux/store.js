import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"
import adminReducer from "./adminSlice"
import preferencesReducer from "./preferenceSlice"

const store = configureStore({
    reducer : {
        courses : courseReducer,
        admin : adminReducer,
        preferences : preferencesReducer,
    }
})

export default store