import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type menuStateType = {
    secondaryMenuId: string
    isSecondaryMenuActive: boolean,
    spreadMenuId: string,
    isMobileMenuOpen: boolean
    bottomMenuId: string
}

const initialState: menuStateType = {
    secondaryMenuId: "",
    isSecondaryMenuActive: false,
    spreadMenuId: "",
    isMobileMenuOpen: false,
    bottomMenuId: "",
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
                isSecondaryMenuActive: newActiveMenuId.length > 0,
                spreadMenuId: "",
            }
        },

        setSpreadMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload === state.spreadMenuId ? "" : action.payload;

            return {
                ...state,
                spreadMenuId: newActiveMenuId,
            }
        },
        
        setMobileMenu:(state, action: PayloadAction<boolean>) => {
            return {
                ...initialState,
                isMobileMenuOpen: action.payload
            }
        },

        setBottomMenuId: (state, action: PayloadAction<string>) => {
            const newActiveMenuId = action.payload

            return {
                ...state,
                bottomMenuId: newActiveMenuId,
            }
        },

        resetMenu:(state) => {
            return initialState
        }
    }
})

export const { setSecondaryMenuId, setSpreadMenuId, resetMenu, setMobileMenu, setBottomMenuId } = menu.actions;
export default menu.reducer;