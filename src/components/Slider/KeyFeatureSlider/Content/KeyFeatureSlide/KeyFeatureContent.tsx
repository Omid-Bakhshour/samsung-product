import { ContentColorType } from '@/models/HeroSlider'
import { IKeyFeatureItem } from '@/models/KeyFeatureSlider'
import React from 'react'
import clx from 'classnames'
import Link from 'next/link'

type Props = {
    sliderItem: IKeyFeatureItem
    activeColor: ContentColorType
}

function KeyFeatureContent({
    sliderItem,
    activeColor,
}: Props) {

    if (!sliderItem) {
        return <></>
    }

    const title = sliderItem.title
    const description = sliderItem.description
    const showMoreLink = sliderItem.learnMore
    const buyNowLink = sliderItem.buyNow

    const containerClassname = clx(
        "absolute left-0 bottom-[15vw] md:bottom-[3.33vw] xl:bottom-11 px-[6.66vw] md:px-[1.66vw] xl:px-6 w-full flex flex-col items-center justify-center z-[2]",
        {

            "text-white": activeColor === ContentColorType.WHITE,
            "text-black": activeColor === ContentColorType.BLACK,
        }
    )

    const buynowClassname = clx(
        "rounded-btn",
        {
            "rounded-btn_white": activeColor === ContentColorType.WHITE,
            "rounded-btn_black": activeColor === ContentColorType.BLACK,
        }
    )

    const learnMoreClassname = clx(
        "underline-btn mt-[2.2222vw] md:mt-0",
        {
            "underline-btn_white": activeColor === ContentColorType.WHITE,
            "underline-btn_black": activeColor === ContentColorType.BLACK,
        }
    )

    return (
        <div className={containerClassname} >
            <h2 className='mb-[2.22vw] md:mb-[0.55vw] xl:mb-2  text-[8.3333vw] md:text-[3.33vw] xl:text-[48px] font-bold text-current text-center' >{title}</h2>
            {
                description && description.length > 0 && (
                    <p className='mb-[2.22vw] md:mb-[0.55vw] xl:mb-2 text-[3.88vw] md:text-[1.25vw] xl:text-[18px] leading-[1.33] text-current text-center' >{description}</p>

                )
            }
            {/* buttons */}
            <div className=' flex flex-col-reverse md:flex-row gap-[2.22222vw] md:gap-5 items-center justify-center ' >
                {/* show more */}
                <Link
                    href={showMoreLink}
                    className={learnMoreClassname}
                >
                    {"Learn more"}
                </Link>
                {/* buy now */}
                <Link
                    href={buyNowLink}
                    className={buynowClassname}
                >
                    {"Buy now"}
                </Link>

            </div>
        </div>
    )
}

export default KeyFeatureContent