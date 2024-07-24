import ModalBackground from '@/components/Common/ModalBackground'
import { MenuChildItemType } from '@/models/Menu'
import React from 'react'

type Props = {
    menuItems: MenuChildItemType[]
    show: boolean
}

function CategoryBottomMenu({ show, menuItems }: Props) {
    return (
        <>
            <div className='fixed  flex left-2   top-20   rounded-b-2xl bg-white z-[2] overflow-hidden' >

            </div>


            <ModalBackground
                visible={show}
                classname='top-20 opacity-60 z-[1]'
            />
        </>
    )
}

export default CategoryBottomMenu