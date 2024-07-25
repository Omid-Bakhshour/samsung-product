
export enum SliderType  {
    IMAGE = "image",
    VIDEO = "video",
}

export enum ContentMobilePositionType {
    TOPCENTER = "topCenter",
    BOOTTOMCENTER = "bottomCenter",
}

export enum ContentDesktopPositionType {
    LEFTCENTER = "leftCenter",
    RIGHTCENTER = "rightCenter",
}

export enum ContentColorType {
    WHITE = "white",
    BLACK = "black",
}

export type ContentPositionType = {
    mobile: ContentMobilePositionType
    desktop: ContentDesktopPositionType
}


export type SliderContentType = {
    title: string
    description: string
    showmoreLink: string
    buyNowLink: string
    postion: ContentPositionType
}

export type HeroSrcType = {
    desktop: string
    mobile: string
}

export type IHeroSlider = {
    id: number
    type: SliderType
    content: SliderContentType
    duration: number
    src: HeroSrcType
    color: ContentColorType

}