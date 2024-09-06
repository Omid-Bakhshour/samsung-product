import { ContentColorType, HeroSrcType } from "./HeroSlider"

export type IKeyFeatureItem = {
    id: number
    tabLabel: string
    title: string
    description: string
    learnMore: string
    buyNow: string
    image: HeroSrcType
    color: ContentColorType
}


export type KeyFeature = {
    title: string
    items: IKeyFeatureItem[]
}