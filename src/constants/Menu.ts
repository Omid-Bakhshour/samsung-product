
const newFeautureMenu = [
    {
        title: "Foldable Phones",
        link: "/",
    },
    {
        title: "Home Appliances Trade-in",
        link: "/",
        children: [],
    },
    {
        title: "Game Portal",
        link: "/",
        children: [],
    },
    {
        title: "Galaxy OSN+ Offers",
        link: "/",
        children: [],
    },
    {
        title: "Trading Now",
        link: "/",
        children: [],
    },
    {
        title: "New & Featured",
        link: "/",
        children: [],
    },
]

const offersMenu = [
    {
        title: "All Offers",
        link: "/",
    },
    {
        title: "Mobile Offers",
        link: "/",
        children: [],
    },
    {
        title: "Television & Sound Devices Offres",
        link: "/",
        children: [],
    },
    {
        title: "Home Appliances Offers",
        link: "/",
        children: [],
    },
    {
        title: "Monitor Offers",
        link: "/",
        children: [],
    },
]



export const shopMenu = [
    {
        title: "New & Featured",
        link: "/",
        children: newFeautureMenu,
    },
    {
        title: "Offers",
        link: "/",
        children: offersMenu,
    },
    {
        title: "Exclusive Discount Programs",
        link: "/",
        children: [],
    },
    {
        title: "Why buy from Samsung",
        link: "/",
        children: [],
    },
    {
        title: "Support",
        link: "/",
        children: [],
    },
]

export const AIMenu = [
    {
        title: "AI for All",
        link: "/",
        children: [],
    },
    {
        title: "Galaxy AI",
        link: "/",
        children: [],
    },
    {
        title: "Samsung AI TV",
        link: "/",
        children: [],
    },
    {
        title: "Bespoke AI",
        link: "/",
        children: [],
    },
    {
        title: "All AI Products",
        link: "/",
        children: [],
    },
]

export const mobilesMenu = [
    {
        title: "Discover Mobiles",
        link: "/",
    },
    {
        title: "Galaxy AI",
        link: "/",
    },
    {
        title: "Galaxy Smartphone",
        link: "/",
    },
    {
        title: "Galaxy Tab",
        link: "/",
    },
    {
        title: "Galaxy Watch",
        link: "/",
    },
    {
        title: "Galaxy Buds",
        link: "/",
    },
]



export const left_menu = [
    {
        title: "Shop",
        link: "/",
        children: shopMenu,
    },
    {
        title: "AI",
        link: "/",
        children: AIMenu
    },
    {
        title: "Mobile",
        link: "/",
        children: mobilesMenu
    },
    {
        title: "TV & AV",
        link: "/",
    },
    {
        title: "Home Appliances",
        link: "/",
    },
    {
        title: "Displays",
        link: "/",
    },
    {
        title: "Accessories",
        link: "/",
    },
    {
        title: "SmartThings",
        link: "/",
    },
]


export const right_menu = [
    {
        title: "Support",
        link: "/",
    },
    {
        title: "For Business",
        link: "/",
    },
]

export const otherMenu = [
    {
        title: "Track Your Order",
        link: "/",
    },
    {
        title: "Product Registration",
        link: "/",
    },
    {
        title: "Samsung Rewards",
        link: "/",
    },
    {
        title: "Members",
        link: "/",
    },
]

export const mobileMenu = [
    {
        title: "categoryMenu",
        children: left_menu
    },
    {
        title: "support",
        children: right_menu
    },
    {
        title: "otherMenu",
        children: otherMenu
    },
]