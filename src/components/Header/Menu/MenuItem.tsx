import { MenuType } from '@/models/Menu'
import React from 'react'

type Props = {
    menu: MenuType
}

function MenuItem({menu}: Props) {
  return (
    <li className='flex items-center justify-start relative h-full group' >
        <button className='px-[0.5vw] group-hover:rounded-full group-hover:bg-black group-hover:text-white text-[14px] font-medium leading-[2.222222222222vw]' >{menu.title}</button>
    </li>
  )
}

export default MenuItem