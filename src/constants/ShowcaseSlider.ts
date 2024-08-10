import { BadgeType } from "@/models/ShowcaseSlider"

const offersItems = [
    {
        title: "Galaxy Z Flip6",
        description: "Get benefits worth up to AED 639.",
        badge: BadgeType.NEW,
        src: {
            mobile: "/slider/showcase/offer-m-1.avif",
            desktop: "/slider/showcase/offer-d-1.avif"
        }
    },
    {
        title: "Free Galaxy Buds2 Pro & 5X Rewards.",
        description: "",
        badge: BadgeType.NEW,
        src: {
            mobile: "/slider/showcase/offer-m-2.avif",
            desktop: "/slider/showcase/offer-d-2.avif"
        }
    },

    {
        title: "Get 28% discount and 10X Samsung Rewards",
        description: "",
        badge: BadgeType.SALE,
        src: {
            mobile: "/slider/showcase/offer-m-3.avif",
            desktop: "/slider/showcase/offer-d-3.avif"
        }
    },

    {
        title: "Review now to win a Galaxy Watch7",
        description: "",
        badge: BadgeType.NEW,
        src: {
            mobile: "/slider/showcase/offer-m-4.webp",
            desktop: "/slider/showcase/offer-d-4.avif"
        }
    },

    {
        title: "Get 13% discount and AED 175 Trade-in top-up",
        description: "",
        badge: BadgeType.SALE,
        src: {
            mobile: "/slider/showcase/offer-m-5.avif",
            desktop: "/slider/showcase/offer-d-5.avif"
        }
    },
]

export const showcaseSlider = [
    {
        title: "Offers",
        items: offersItems
    },
    {
        title: "Mobile",
        items: offersItems
    },
    {
        title: "TV & AV",
        items: offersItems
    },
    {
        title: "Home Appliances",
        items: offersItems
    },
    {
        title: "Computer Monitors",
        items: offersItems
    },
]