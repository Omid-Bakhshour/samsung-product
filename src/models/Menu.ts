

export type MenuChildItemType = {
    title: string
    link: string
    id: string
    children?: Omit<MenuChildItemType, 'children'>[]
}

export type MenuItemType = {
    title: string
    link: string
    id: string
    children?: MenuChildItemType[]
    hasMultiLevel?: boolean
    fixed?: boolean
}

export type MobileMenuType = {
    title: string
    id: string
    children: MenuItemType[]
}



