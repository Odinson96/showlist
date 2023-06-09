import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import showroomReducer from "./reducers/ShowroomSlice"
import showroomPageReducer from "./reducers/ShowroomPageSlice"

const rootReducer = combineReducers({
    showroomReducer,
    showroomPageReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
