import { HeroSrcType } from "./HeroSlider"

export enum BadgeType  {
    NEW = "New",
    SALE = "Sale",
}

export type IShowcaseItem = {
    title: string
    description: string
    badge: BadgeType | null
    src: HeroSrcType
}

export type IShowcaseType = {
    id: number
    title: string
    items: IShowcaseItem[]
}