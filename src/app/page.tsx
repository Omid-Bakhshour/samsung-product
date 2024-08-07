import HeroSlider from '@/components/HeroSlider'
import TitleSection from '@/components/Text/TitleSection'
import { heroSliders } from '@/constants/HeroSlider'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full flex flex-col' >
      {/* hero slider */}
      <HeroSlider slides={heroSliders} />
      {/* title section */}
      <TitleSection title='Shop Offers & Latest Innovation' />
      
    </div>
    
  )
}
