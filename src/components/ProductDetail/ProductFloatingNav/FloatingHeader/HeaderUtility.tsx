import { zfold6UtilitiyLinks } from '@/constants/smartphones/Zfold6'
import Link from 'next/link'
import React from 'react'

function HeaderUtility() {
    return (
        <div className='flex items-center gap-1' >
            {/* utility items / lg show */}
            <ul className='hidden lg:flex items-center' >
                {
                    zfold6UtilitiyLinks.map((utility, index) => {
                        return (
                            <li
                                key={utility.id}
                                className='inline-block align-middle'
                            >
                                <Link
                                    href={utility.link}
                                    className='h-14 block leading-[56px] text-[12px] font-bold px-5 text-black '

                                >
                                    {utility.label}
                                </Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
            {/* buy now button */}
            <div className='h-[15.55vw] md:h-12 flex items-center pr-[6.66vw] md:pr-6' >
                <Link 
                   href={'/'}
                   className='bg-[#2189ff] max-w-[47.77vw] text-[3.33vw] md:text-[14px] py-[2.22vw] px-[4.44vw] md:py-2.5 md:px-6 font-bold text-white md:h-10 flex items-center justify-center rounded-full' 
                >
                    <span>Buy now</span>
                </Link>
            </div>
        </div>
    )
}

export default HeaderUtility