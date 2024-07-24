import ModalBackground from '@/components/Common/ModalBackground'
import { MenuChildItemType } from '@/models/Menu'
import React from 'react'
import CategoryBottomMenuItem from './CategoryBottomMenuItem'

type Props = {
    menuItems: MenuChildItemType[]
    show: boolean
    setShow: (value: boolean) => void
}

function CategoryBottomMenu({ show, menuItems, setShow }: Props) {
    return (
        <>
            <div 
                className={`fixed flex-start left-2 items-stretch justify-start top-20 rounded-b-2xl flex-wrap  bg-white z-[2] overflow-hidden ${show ? "flex" : "hidden"}`}
                onMouseLeave={() => setShow(false)}
            >
                {
                    menuItems.map((menuItem) => {
                        return <CategoryBottomMenuItem menuItem={menuItem} />
                    })
                }

            </div>

            <ModalBackground
                visible={show}
                classname='!top-20 !opacity-60 !z-[-1]'
            />
        </>
    )
}

export default CategoryBottomMenu