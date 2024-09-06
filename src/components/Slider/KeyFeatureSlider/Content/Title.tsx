import { ContentColorType } from '@/models/HeroSlider'
import React from 'react'
import clx from 'classnames'

type Props = {
    title: string
    color: ContentColorType
}

function Title({
    title,
    color,
}: Props) {
    const titleClassnames = clx(
        "mt-[8.88vw] md:mt-[3.33vw] xl:mt-12 text-[7.22vw] md:text-[2.63vw] xl:text-[38px] leading-[1.33] md:leading-[1.2] px-[6.66vw] md:px-[1.66vw] xl:px-6 font-bold text-center",
        {
            "text-white": color === ContentColorType.WHITE,
            "text-black": color === ContentColorType.BLACK,
        }
    )
    return (
        <h2 className={titleClassnames} >{title}</h2>
    )
}

export default Title