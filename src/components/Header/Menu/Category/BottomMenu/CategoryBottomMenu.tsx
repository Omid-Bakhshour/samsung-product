import ModalBackground from '@/components/Common/ModalBackground'
import { MenuItemType } from '@/models/Menu'
import React from 'react'
import CategoryBottomMenuItem from './CategoryBottomMenuItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setBottomMenuId } from '@/redux/slices/menu'

type Props = {
    menu: MenuItemType
}

function CategoryBottomMenu({ menu }: Props) {
    const dispatch = useDispatch()
    const bottomMenuId = useSelector((state: RootState) => state.menu.bottomMenuId)
    const isMenuActive = bottomMenuId === menu.id
    const hasMultiLevel = menu.hasMultiLevel
    const isFixed = menu.fixed
    const children = menu.children
    return (
        <>
            <div
                className={` flex-start  items-stretch justify-start top-20 rounded-b-2xl flex-wrap  bg-white z-[2] overflow-hidden ${isFixed ? "fixed left-2" : "absolute left-0"} ${isMenuActive ? "flex" : "hidden"}`}
            >
                {
                    hasMultiLevel && children?.map((menuItem) => {
                        return <CategoryBottomMenuItem key={menuItem.id}  menuItems={menuItem.children|| []} label={menuItem.title}  />
                    })
                }

                {
                    !hasMultiLevel && (
                        <CategoryBottomMenuItem menuItems={children || []}  />
                    )
                }
            </div>

            <ModalBackground
                visible={isMenuActive}
                classname='!top-20 !opacity-60 !z-[-1]'
                onMouseEnter = {() => dispatch(setBottomMenuId(""))}
            />
        </>
    )
}

export default CategoryBottomMenu