import { MenuItemType } from '@/models/Menu'
import Link from 'next/link'
import React from 'react'

type Props = {
    menu: MenuItemType
}

function CategoryLink({ menu}: Props) {
    return (
        <li
            className='category-container group'
     
        >
            <Link href={menu.link} className='category-link' >{menu.title}</Link>
        </li>
    )
}

export default CategoryLink