const newFeautureMenu = [
    {
        id: "1",
        title: "Foldable Phones",
        link: "/",
    },
    {
        id: "2",
        title: "Home Appliances Trade-in",
        link: "/",
    },
    {
        id: "3",
        title: "Game Portal",
        link: "/",
    },
    {
        id: "4",
        title: "Galaxy OSN+ Offers",
        link: "/",
    },
    {
        id: "5",
        title: "Trading Now",
        link: "/",
    },
    {
        id: "6",
        title: "New & Featured",
        link: "/",
    },
]

const offersMenu = [
    {
        id: "7",
        title: "All Offers",
        link: "/",
    },
    {
        id: "8",
        title: "Mobile Offers",
        link: "/",
    },
    {
        id: "9",
        title: "Television & Sound Devices Offers",
        link: "/",
    },
    {
        id: "10",
        title: "Home Appliances Offers",
        link: "/",
    },
    {
        id: "11",
        title: "Monitor Offers",
        link: "/",
    },
]

export const shopMenu = [
    {
        id: "12",
        title: "New & Featured",
        link: "/",
        children: newFeautureMenu,
    },
    {
        id: "13",
        title: "Offers",
        link: "/",
        children: offersMenu,
    },
    {
        id: "14",
        title: "Exclusive Discount Programs",
        link: "/",
    },
    {
        id: "15",
        title: "Why buy from Samsung",
        link: "/",
    },
    {
        id: "16",
        title: "Support",
        link: "/",
    },
]

export const AIMenu = [
    {
        id: "17",
        title: "AI for All",
        link: "/",
    },
    {
        id: "18",
        title: "Galaxy AI",
        link: "/",
    },
    {
        id: "19",
        title: "Samsung AI TV",
        link: "/",
    },
    {
        id: "20",
        title: "Bespoke AI",
        link: "/",
    },
    {
        id: "21",
        title: "All AI Products",
        link: "/",
    },
]

export const mobilesMenu = [
    {
        id: "22",
        title: "Discover Mobiles",
        link: "/",
    },
    {
        id: "23",
        title: "Galaxy AI",
        link: "/",
    },
    {
        id: "24",
        title: "Galaxy Smartphone",
        link: "/",
    },
    {
        id: "25",
        title: "Galaxy Tab",
        link: "/",
    },
    {
        id: "26",
        title: "Galaxy Watch",
        link: "/",
    },
    {
        id: "27",
        title: "Galaxy Buds",
        link: "/",
    },
]

export const left_menu = [
    {
        id: "28",
        title: "Shop",
        link: "/",
        children: shopMenu,
        hasMultiLevel: true,
        fixed: true,
    },
    {
        id: "29",
        title: "AI",
        link: "/",
        children: AIMenu,
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "30",
        title: "Mobile",
        link: "/",
        children: mobilesMenu,
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "31",
        title: "TV & AV",
        link: "/",
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "32",
        title: "Home Appliances",
        link: "/",
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "33",
        title: "Displays",
        link: "/",
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "34",
        title: "Accessories",
        link: "/",
        hasMultiLevel: false,
        fixed: false,
    },
    {
        id: "35",
        title: "SmartThings",
        link: "/",
        hasMultiLevel: false,
        fixed: false,
    },
]

export const right_menu = [
    {
        id: "36",
        title: "Support",
        link: "/",
    },
    {
        id: "37",
        title: "For Business",
        link: "/",
    },
]

export const otherMenu = [
    {
        id: "38",
        title: "Track Your Order",
        link: "/",
    },
    {
        id: "39",
        title: "Product Registration",
        link: "/",
    },
    {
        id: "40",
        title: "Samsung Rewards",
        link: "/",
    },
    {
        id: "41",
        title: "Members",
        link: "/",
    },
]

export const mobileMenu = [
    {
        id: "42",
        title: "categoryMenu",
        children: left_menu
    },
    {
        id: "43",
        title: "support",
        children: right_menu
    },
    {
        id: "44",
        title: "otherMenu",
        children: otherMenu
    },
]
