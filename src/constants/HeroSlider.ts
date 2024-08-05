import { ContentColorType, ContentDesktopPositionType, ContentMobilePositionType, SliderType } from "@/models/HeroSlider";

export const heroSliders = [
    {
        id: 1,
        type: SliderType.VIDEO,
        content: {
            title: "Galaxy Watch Ultra",
            description: "Get free Galaxy Buds2 Pro and 5X Samsung Rewards points worth up to AED 433.",
            postion: {
                mobile : ContentMobilePositionType.TOPCENTER,
                desktop: ContentDesktopPositionType.LEFTCENTER
            },
            showmoreLink : "/",
            buyNowLink: "/"
        },
        duration: 5,
        color: ContentColorType.BLACK,
        src: {
            mobile: "/slider/hero/hero1mobile.webm",
            desktop: "/slider/hero/hero1desktop.webm"
        }
    },
    {
        id: 2,
        type: SliderType.IMAGE,
        content: {
            title: "Samsung AI TV",
            description: "Get discounts and benefits worth up to AED 11,499 and a TOD Events pass.",
            postion: {
                mobile : ContentMobilePositionType.TOPCENTER,
                desktop: ContentDesktopPositionType.LEFTCENTER
            },
            showmoreLink : "/",
            buyNowLink: "/"
        },
        duration: 5,
        color: ContentColorType.WHITE,
        src: {
            mobile: "/slider/hero/hero2mobile.webp",
            desktop: "/slider/hero/hero2desktop.webp"
        }
    },
    {
        id: 3,
        type: SliderType.IMAGE,
        content: {
            title: "BESPOKE AI",
            description: "AI and connected solutions that give you more free time & bigger energy savings",
            postion: {
                mobile : ContentMobilePositionType.TOPCENTER,
                desktop: ContentDesktopPositionType.LEFTCENTER
            },
            color: ContentColorType.BLACK,
            showmoreLink : "/",
            buyNowLink: "/"
        },
        color: ContentColorType.BLACK,
        duration: 5,
        src: {
            mobile: "/slider/hero/hero3mobile.webp",
            desktop: "/slider/hero/hero3desktop.webp"
        }
    },
    {
        id: 4,
        type: SliderType.VIDEO,
        content: {
            title: "Galaxy Watch Ultra",
            description: "Get free Galaxy Buds2 Pro and 5X Samsung Rewards points worth up to AED 433.",
            postion: {
                mobile : ContentMobilePositionType.TOPCENTER,
                desktop: ContentDesktopPositionType.RIGHTCENTER
            },
            showmoreLink : "/",
            buyNowLink: "/"
        },
        duration: 5,
        color: ContentColorType.WHITE,
        src: {
            mobile: "/slider/hero/hero4mobile.mp4",
            desktop: "/slider/hero/hero4desktop.mp4"
        }
    },
    {
        id: 5,
        type: SliderType.IMAGE,
        content: {
            title: "Beat the heat today!",
            description: "Get free Galaxy Buds2 Pro and 5X Samsung Rewards points worth up to AED 433.",
            postion: {
                mobile : ContentMobilePositionType.TOPCENTER,
                desktop: ContentDesktopPositionType.LEFTCENTER
            },
            color: ContentColorType.BLACK,
            showmoreLink : "/",
            buyNowLink: "/"
        },
        duration: 5,
        color: ContentColorType.BLACK,
        src: {
            mobile: "/slider/hero/hero5mobile.webp",
            desktop: "/slider/hero/hero5desktop.webp"
        }
    },
]