import { BadgeType } from '@/models/ShowcaseSlider'
import React from 'react'
import clx from 'classnames'

type Props = {
    type: BadgeType | null
}

function Badge({
    type
}: Props) {

    const badgeClassname = clx(
        "inline-block h-[4.44vw] md:h-[1.38vw] xl:h-5 py-[0.277vw] md:py-[0.1388vw] xl:py-[2px] px-[1.11vw] md:px-[0.41vw] xl:px-[6px] rounded-[2.22vw] md:rounded-[0.69vw] xl:rounded-[10px] text-[2.77vw] md:text-[0.83vw] xl:text-[12px] leading-[3.88vw] md:leading-[1.11vw] xl:leading-[16px] xl:font-bold  text-white",
        {
           "bg-[#2189ff]" : type === BadgeType.NEW,
           "bg-[#ef3434]" : type === BadgeType.SALE
        }
    )
    return (
        <div
            className={badgeClassname}
        >{type}</div>
    )
}

export default Badge