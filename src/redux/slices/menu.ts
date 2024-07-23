import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type menuStateType = {
    secondaryMenuId: string
    isSecondaryMenuActive: boolean,
    spreadMenuId: string,


}

const initialState: menuStateType = {
    secondaryMenuId: "",
    isSecondaryMenuActive: false,
    spreadMenuId: "",

}

const menu = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSecondaryMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload

            return {
                ...state,
                secondaryMenuId: newActiveMenuId,
                isSecondaryMenuActive: newActiveMenuId.length > 0
            }
        },

        setSpreadMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload === state.spreadMenuId ? "" : action.payload;

            return {
                ...state,
                spreadMenuId: newActiveMenuId,
            }
        },
    }
})

export const { setSecondaryMenuId, setSpreadMenuId } = menu.actions;
export default menu.reducer;