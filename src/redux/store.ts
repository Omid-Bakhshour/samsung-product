import  {configureStore} from '@reduxjs/toolkit'
import menu from './slices/menu'

export const store = configureStore({
    reducer: {
        menu: menu,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch