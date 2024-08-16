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
            mobile: "kf-m-1.jpg",
            desktop: "kf-d-1.jpg",
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
            mobile: "kf-m-2.jpg",
            desktop: "kf-d-2.jpg",
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
            mobile: "kf-m-3.jpg",
            desktop: "kf-d-3.jpg",
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
            mobile: "kf-m-4.jpg",
            desktop: "kf-d-4.jpg",
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
            mobile: "kf-m-5.jpg",
            desktop: "kf-d-5.jpg",
        },
        color: ContentColorType.BLACK,
    },
]

export const mobileKeyFeature = {
    title: "Mobile",
    items: mobileItems
}