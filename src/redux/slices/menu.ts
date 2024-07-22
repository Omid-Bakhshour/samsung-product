import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type menuStateType = {
    secondryMenuId: string
    isSecondryMenuActive: boolean,

}

const initialState: menuStateType = {
    secondryMenuId: "",
    isSecondryMenuActive: false
}

const menu = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSecondryMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload;

            return {
                ...state,
                secondryMenuId: newActiveMenuId,
                isSecondryMenuActive: newActiveMenuId.length > 0
            }
        },
    }
})

export const { setSecondryMenuId } = menu.actions;
export default menu.reducer;