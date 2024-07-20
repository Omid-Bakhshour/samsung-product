import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type menuStateType = {
    activeMenu: string
}

const initialState: menuStateType = {
    activeMenu: "",
}

const menu = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setActiveMenu: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isSidebarOpen: action.payload
            }
        },
    }
})

export const { setActiveMenu } = menu.actions;
export default menu.reducer;