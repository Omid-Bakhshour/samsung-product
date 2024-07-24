import { MenuChildItemType } from '@/models/Menu'
import React from 'react'
import MenuLink from '../../MenuLink'

type Props = {
    menuItems: Omit<MenuChildItemType, 'children'>[]
    label?: string
}

function CategoryBottomMenuItem({ menuItems, label }: Props) {
    // const isMenuItemsValid = menuItems && menuItems.length > 0
    // if(!isMenuItemsValid) {
    //     return <></>
    // }
    return (
        <div className='flex flex-col pt-[.55vw] pb-[2.2222vw] w-[15.55555556vw]' >
            {
                label && label.length > 0 && (
                    <h3 className='text-[0.83333vw] leading-[1.319vw] font-semibold text-black pt-[0.55vw] px-[1.6666vw] pb-[0.625vw] ' >{label}</h3>
                )
            }
            <ul>
                {
                    menuItems?.map((item) => {
                        return <MenuLink key={item.id} menuItem={item} classname='text-[0.83333vw] py-[0.55vw] px-[1.6666vw] leading-[1.1111111111vw]' />
                    })

                }
            </ul>
        </div>
    )
}

export default CategoryBottomMenuItem