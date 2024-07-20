

export type MenuType = {
    title: string
}

export type MenuChildItemType = {
    title: string
    link?: string
    children?: Omit<MenuChildItemType, 'children'>
}

export type MenuItemType = {
    title: string
    link?: string
    children?: MenuChildItemType[]
}

export type MobileMenuType = {
    title: string
    children: MenuItemType[]
}



