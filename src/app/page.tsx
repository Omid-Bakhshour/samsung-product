import HeroSlider from '@/components/Slider/HeroSlider'
import ShowcaseSlider from '@/components/Slider/ShowcaseSlider'
import TitleSection from '@/components/Text/TitleSection'
import { heroSliders } from '@/constants/HeroSlider'
import { showcaseSliders } from '@/constants/ShowcaseSlider'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col' >
      {/* hero slider */}
      <HeroSlider slides={heroSliders} />
      {/* title section */}
      <TitleSection title='Shop Offers & Latest Innovation' />
      {/* show case tab */}
      <ShowcaseSlider slides={showcaseSliders} />
      
    </div>
    
  )
}
