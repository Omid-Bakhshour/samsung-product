import Link from 'next/link'
import React from 'react'
import clx from 'classnames'

type Props = {
    slideItem: {
        id: number,
        label: string,
        link: string
    },
    active: boolean
}

function NavigationSlide({
    slideItem,
    active,
}: Props) {
    const slideClassname = clx("h-full flex items-center text-black py-0 px-[5.55vw] md:px-5 text-[3.33vw] md:text-[12px] relative", {
        "font-bold after:z-1 after:absolute after:content-[''] after:block after:bg-primary-blue after:h-[2px] after:bottom-[0px] md:after:bottom-[-2px] md:after:left-5 after:left-[5.55vw] after:right-[5.55vw] md:after:right-5" : active

    })

    return (
        <Link
            href={slideItem.link}
            className={slideClassname}
        >
            {slideItem.label}
        </Link>
    )
}

export default NavigationSlide