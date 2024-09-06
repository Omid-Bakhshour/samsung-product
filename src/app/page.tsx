import HeroSlider from '@/components/Slider/HeroSlider'
import KeyFeatureSlider from '@/components/Slider/KeyFeatureSlider'
import ShowcaseSlider from '@/components/Slider/ShowcaseSlider'
import TitleSection from '@/components/Text/TitleSection'
import { heroSliders } from '@/constants/HeroSlider'
import { mobileKeyFeature } from '@/constants/keyFeatureSlider'
import { showcaseSliders } from '@/constants/ShowcaseSlider'

export default function Home() {
  return (
    <div className='w-full flex flex-col' >
      {/* hero slider */}
      <HeroSlider slides={heroSliders} />
      {/* title section */}
      <TitleSection title='Shop Offers & Latest Innovation' />
      {/* show case tab */}
      <ShowcaseSlider slides={showcaseSliders} />
      {/* mobile key feature slider */}
      <KeyFeatureSlider slider={mobileKeyFeature} />
    </div>
  )
}
