import { ContentColorType } from "@/models/HeroSlider"

export const mobileItems = [
    {
        id: 1,
        tabLabel: "Galaxy Z Fold6",
        title: "Galaxy Z Fold6",
        description:"Get an AED 400 e-voucher and exclusive benefits, worth up to AED 834.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/mobile/kf-m-1.jpg",
            desktop: "/slider/keyfeature/mobile/kf-d-1.jpg",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 2,
        tabLabel: "Galaxy Z Flip6",
        title: "Galaxy Z Flip6",
        description:"Get exclusive gifts and benefits worth up to AED 639.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/mobile/kf-m-2.jpg",
            desktop: "/slider/keyfeature/mobile/kf-d-2.jpg",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 3,
        tabLabel: "Galaxy Unpacked Highlight",
        title: "Unpacked Highlight",
        description:"",
        learnMore: "",
        buyNow: "",
        image: {
            mobile: "/slider/keyfeature/mobile/kf-m-3.jpg",
            desktop: "/slider/keyfeature/mobile/kf-d-3.jpg",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 4,
        tabLabel: "Galaxy Watch Ultra",
        title: "Galaxy Watch Ultra",
        description:"Get free Galaxy Buds2 Pro and 5X Samsung Rewards points worth up to AED 433.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/mobile/kf-m-4.jpg",
            desktop: "/slider/keyfeature/mobile/kf-d-4.jpg",
        },
        color: ContentColorType.WHITE,
    },
    {
        id: 5,
        tabLabel: "Galaxy Buds3 Pro",
        title: "Galaxy Buds3 Pro",
        description:"Galaxy AI-powered sound.",
        learnMore: "",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/mobile/kf-m-5.jpg",
            desktop: "/slider/keyfeature/mobile/kf-d-5.jpg",
        },
        color: ContentColorType.BLACK,
    },
]

export const tvItems = [
    {
        id: 1,
        tabLabel: "Neo QLED 8K",
        title: "A new era of Samsung AI TV.",
        description:"AED 4,000 off & up to 12 months free subscription on TOD, Shahid, OSN+ & more.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/tv/tv-m-1.avif",
            desktop: "/slider/keyfeature/tv/tv-d-1.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 2,
        tabLabel: "OLED TV",
        title: "OLED TV",
        description:"Get up to AED 1,000 & 12 months free subscription on TOD, Shahid, OSN+ & more.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/tv/tv-m-2.avif",
            desktop: "/slider/keyfeature/tv/tv-d-2.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 3,
        tabLabel: "The Frame (2024)",
        title: "The Frame (2024)",
        description:"Get up to AED 1,400 & 12 months free subscription on TOD, Shahid, OSN+ & more.",
        learnMore: "",
        buyNow: "",
        image: {
            mobile: "/slider/keyfeature/tv/tv-m-3.avif",
            desktop: "/slider/keyfeature/tv/tv-d-3.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 4,
        tabLabel: "Music Frame",
        title: "Music Frame",
        description:"Get discounts of AED 400 and 5X Samsung Rewards Points.",
        learnMore: "/",
        buyNow: "/",
        image: {
            mobile: "/slider/keyfeature/tv/tv-m-4.avif",
            desktop: "/slider/keyfeature/tv/tv-d-4.avif",
        },
        color: ContentColorType.BLACK,
    },
]

export const homeItems = [
    {
        id: 1,
        tabLabel: "Bespoke AI",
        title: "Bespoke AI",
        description:"Earn 5X Samsung Rewards and more on every purchase!",
        learnMore: "",
        buyNow: "/",
        image: {
            desktop: "/slider/keyfeature/home/hd1.avif",
            mobile: "/slider/keyfeature/home/hm1.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 2,
        tabLabel: "Bespoke Jet™ AI",
        title: "Bespoke Jet™ AI",
        description:"Enjoy our most powerful stick vacuum*",
        learnMore: "/",
        buyNow: "/",
        image: {
            desktop: "/slider/keyfeature/home/hd2.avif",
            mobile: "/slider/keyfeature/home/hm2.avif",
        },
        color: ContentColorType.WHITE,
    },
    {
        id: 3,
        tabLabel: "Washer & Dryer",
        title: "Efficient Clean, Intelligent wash",
        description:"Our full line of washer and dryers",
        learnMore: "",
        buyNow: "/",
        image: {
            desktop: "/slider/keyfeature/home/hd3.avif",
            mobile: "/slider/keyfeature/home/hm3.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 4,
        tabLabel: "AirDresser",
        title: "AirDresser",
        description:"Refresh your clothes everyday. Deodorize. Sanitize. Steam.",
        learnMore: "",
        buyNow: "/",
        image: {
            desktop: "/slider/keyfeature/home/hd4.avif",
            mobile: "/slider/keyfeature/home/hm4.avif",
        },
        color: ContentColorType.BLACK,
    },
    {
        id: 5,
        tabLabel: "Air Conditioners",
        title: "Air Conditioners (WindFree™)",
        description:"Cool. WindFree™ everywhere",
        learnMore: "",
        buyNow: "/",
        image: {
            desktop: "/slider/keyfeature/home/hd5.avif",
            mobile: "/slider/keyfeature/home/hm5.avif",
        },
        color: ContentColorType.BLACK,
    },
]

export const keyFeatures = [
    {
        title: "Mobile",
        items: mobileItems
    },
    {
        title: "TV & Sound",
        items: tvItems
    },
    {
        title: "Home Appliances",
        items: homeItems
    },

]