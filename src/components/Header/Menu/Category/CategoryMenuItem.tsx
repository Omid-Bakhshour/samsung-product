import { MenuItemType } from '@/models/Menu'
import React, { useState } from 'react'

type Props = {
    menu: MenuItemType
}

function CategoryMenuItem({ menu}: Props) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <li
            className='category-container group'
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
        >
            <button className="category-link" >{menu.title}</button>
        </li>
    )
}

export default CategoryMenuItem