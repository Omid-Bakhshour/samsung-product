import { MenuChildItemType } from '@/models/Menu'
import React from 'react'
import MenuLink from '../MenuLink'

type Props = {
    menuItem: MenuChildItemType
}

function CategoryBottomMenuItem({ menuItem }: Props) {
    const items = menuItem.children
    const title = menuItem.title
    return (
        <div className='flex flex-col pt-[.55vw] pb-[2.2222vw] w-[15.55555556vw]' >
            <h3 className='text-[0.83333vw] leading-[1.319vw] font-semibold text-black pt-[0.55vw] px-[1.6666vw] pb-[0.625vw] ' >{title}</h3>

            <ul>
                {
                    items?.map((item) => {
                        return <MenuLink menuItem={item}  classname='text-[0.83333vw] py-[0.55vw] px-[1.6666vw] leading-[1.1111111111vw]'  />
                    })

                }
            </ul>
        </div>
    )
}

export default CategoryBottomMenuItem