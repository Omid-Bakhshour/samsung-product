import { left_menu, right_menu } from '@/constants/Menu'
import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className='w-full flex flex-1 items-center justify-between relative h-full ' >
        {/* left menu */}
        <ul className='flex items-center h-full' >
            {
                left_menu.map((menu) => {
                    return (
                        <MenuItem menu={menu} />
                    )
                })
            }
        </ul>
        {/* right menu */}
        <ul className='flex items-center h-full' >
            {
                right_menu.map((menu) => {
                    return (
                        <MenuItem menu={menu} />
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Menu