import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type menuStateType = {
    secondaryMenuId: string
    isSecondaryMenuActive: boolean,

}

const initialState: menuStateType = {
    secondaryMenuId: "",
    isSecondaryMenuActive: false
}

const menu = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSecondaryMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload;

            return {
                ...state,
                secondaryMenuId: newActiveMenuId,
                isSecondaryMenuActive: newActiveMenuId.length > 0
            }
        },
    }
})

export const { setSecondaryMenuId } = menu.actions;
export default menu.reducer;