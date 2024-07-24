import { MenuItemType } from '@/models/Menu'
import React, { useState } from 'react'
import CategoryBottomMenu from './CategoryBottomMenu'

type Props = {
    menu: MenuItemType
}

function CategoryMenuItem({ menu}: Props) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <li
            className='category-container group relative'
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
        >
            <button className="category-link" >{menu.title}</button>
            <CategoryBottomMenu 
                menuItems={menu.children || []}
                show={showMenu}
                setShow={setShowMenu}
            />
        </li>
    )
}

export default CategoryMenuItem