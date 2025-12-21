import { createSlice } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
    name : "preferences",
    initialState : {
        catalogueView : "board",
        dashboardView : "board",
    },
    reducers : {
        changeCatalogueView : (state, action) => {
            state.catalogueView = action.payload
        },
        changeDashboardView : (state, action) => {
            state.dashboardView = action.payload
        }
    }
})

export const {changeCatalogueView, changeDashboardView} = preferencesSlice.actions
export default preferencesSlice.reducer