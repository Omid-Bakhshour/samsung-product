"use client"

import { MenuItemType } from '@/models/Menu'
import React from 'react'
import CategoryBottomMenu from './BottomMenu/CategoryBottomMenu'
import { useDispatch } from 'react-redux'
import { setBottomMenuId } from "@/redux/slices/menu"

type Props = {
    menu: MenuItemType
}

function CategoryMenuMultiLevel({menu}: Props) {
    const dispatch = useDispatch()

    return (
        <li
            className='category-container group relative'
            onMouseEnter={() => dispatch(setBottomMenuId(menu.id))}
            onMouseLeave={() => dispatch(setBottomMenuId(""))}

        >
            <button className="category-link" >{menu.title}</button>
            <CategoryBottomMenu 
                menu={menu}
            />
        </li>
    )
}

export default CategoryMenuMultiLevel