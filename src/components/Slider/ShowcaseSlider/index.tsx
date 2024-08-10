import { IShowcaseType } from '@/models/ShowcaseSlider'
import React from 'react'
import Tab from './Tab'

type Props = {
    slides: IShowcaseType[]
}

function ShowcaseSlider({
    slides,
}: Props) {
  return (
    <section className='s-contaner flex flex-col' >
        {/* tab */}
        <Tab 
            tabs={slides}
        />
        {/* slider */}
    </section>
  )
}

export default ShowcaseSlider